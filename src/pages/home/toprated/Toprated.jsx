import React, { useState } from 'react'
import ContantWrapper from '../../../components/contentWrapper/ContantWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'



// trending ke ander movies and tv shows both 
// go and check trending in tmdb

const Toprated = () => {
    
const [endpoint , setEndPoint] = useState("movie")

const {data,loading}=useFetch(`/${endpoint}/top_rated`)



    // pass this function to SwitchTabs


    const onTabChange=(tab)=>{

      setEndPoint(tab==="Movies"?"movie":"tv")

    }

  return (
    <div className='carouselSection'>
        <ContantWrapper>
            <span className="carouselTitle">
            Toprated
            </span>
            <SwitchTabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
        </ContantWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint
        }/>
        
    </div>
  )
}

export default Toprated