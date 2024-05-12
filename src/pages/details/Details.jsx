import React from 'react'
import './style.scss'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsbanner/DeatailBanner'
import { useParams } from 'react-router-dom'
import Cast from './cast/cast'
import VideosSection from './videosection/VideoSection'
import Similar from './carousels/similar'
import Recommendation from './carousels/Recommedation'


const Details = ({}) => {

  const {mediaType,id}=useParams();
  
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)

  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  return(
    <dir>
      {/* 
      in optional chainning use . with arrays as well
      <DetailsBanner video={data?.results?[0]} crew={credits?.crew}/> */}
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>

      {/* cast component */}
      <Cast data={credits?.cast} loading={creditsLoading}/>

      {/* video section */}

      <VideosSection data={data} loading={loading}/>

      {/* similar */}

      <Similar mediaType={mediaType} id={id}/>

      {/* Recomendataion */}

      <Recommendation mediaType={mediaType} id={id}/>
    </dir>
  )
}


export default Details;