import React from 'react'
import Video from '../components/home/Video'
import HomeBottomBanner from '../components/home/HomeBottomBanner'
import HomeTopBanner from '../components/home/HomeTopBanner'

const Home = () => {
  return (
    <div className='relative mb-5 overflow-y-auto text-white'>
    <div className='h-screen w-screen fixed top-0 left-0'>
        <Video />
    </div>
    <div className='h-screen w-screen relative flex justify-between flex-col'>
        <HomeTopBanner />   
        <HomeBottomBanner />
    </div>
    </div>
  )
}

export default Home