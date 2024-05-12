import { useState, useEffect } from 'react'
import './App.scss'
import { fetchDataFromAPI } from './utils/api'
import { getAPIconfiguration, getGeneres } from './store/homeslice';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom'

//import all the components

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResults from './pages/searchresults/SearchResults';
import Explore from './pages/explore/Explore';
import NotFound from './pages/404/NotFound';




function App() {

  const dispatch = useDispatch();

  const { url } = useSelector((state) => state.home);
  console.log(url)

  useEffect(() => {

    fetchApiConfig();
    genresCall();

  }, []);


  const fetchApiConfig = async () => {

    await fetchDataFromAPI('/configuration')
      .then((res) => {

        const url = {

          backdrop: res.images.secure_base_url + "original",

          poster: res.images.secure_base_url + "original",

          profile: res.images.secure_base_url + "original",


        }
        dispatch(getAPIconfiguration(url))
      })
  }

  const genresCall = async () => {

    let promises = [];
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    endPoints.forEach((url) => {

      promises.push(fetchDataFromAPI(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);

    // console.log(data)
   
    // data =[{geners},{geners}]
    // destructure in map and save each value with its id and save it at allGeners

    data.map(({ genres }) => {
      return (genres.map((item) => {
        return (allGenres[item.id] = item)
      }))
    })

    // console.log(allGenres)
    dispatch(getGeneres(allGenres))
  }
  


  return (
    <>
      <div>

        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:mediaType/:id' element={<Details />} />
            <Route path='./search/:query' element={<SearchResults />} />
            <Route path='/explore/:mediaType' element={<Explore />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
