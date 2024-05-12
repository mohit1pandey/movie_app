import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import ContantWrapper from '../../../components/contentWrapper/ContantWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'



// trending ke ander movies and tv shows both 
// go and check trending in tmdb

const Popular = () => {
    
const [endpoint , setEndPoint] = useState("movie")

const {data,loading}=useFetch(`/${endpoint}/popular`)



    // pass this function to SwitchTabs


    const onTabChange=(tab)=>{

      setEndPoint(tab==="Movies"?"movie":"tv")

    }

  return (
    <div className='carouselSection'>
        <ContantWrapper>
            <span className="carouselTitle">
                Polular
            </span>
            <SwitchTabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
        </ContantWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint
        }/>
        
    </div>
  )
}

export default Popular