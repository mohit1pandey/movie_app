import React from 'react'
import './style.scss'
import HeroBanner from './herobanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Toprated from './toprated/Toprated'

const Home = () => {
  return (
    <div className="homepage">

      <HeroBanner />
      
      <Trending />
      <Popular/>
      <Toprated/>

    </div>
  )
}

export default Home