import React, { useState } from 'react'
import ContantWrapper from '../../../components/contentWrapper/ContantWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'






// trending ke ander movies and tv shows both 
// go and check trending in tmdb

const Trending = () => {
    
const [endpoint , setEndPoint] = useState("day")

const {data,loading}=useFetch(`/trending/all/${endpoint}`)



    // pass this function to SwitchTabs


    const onTabChange=(tab)=>{

      setEndPoint(tab==="Day"?"day":"week")

    }

  return (
    <div className='carouselSection'>
        <ContantWrapper>
            <span className="carouselTitle">
                Trending
            </span>
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContantWrapper>
        <Carousel data={data?.results} loading={loading}/>
        
    </div>
  )
}

export default Trending