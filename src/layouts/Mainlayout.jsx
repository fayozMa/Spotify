import React from 'react'
import Leftbar from '../components/Leftbar'
import RightBar from '../components/RightBar'
import MusicPlayer from '../components/MusicPlayer'

function Mainlayout({children}) {
  return (
    <div>
        <div className="w-[20vw] fixed h-[100vh] top-0 bg-black"><Leftbar/></div>
        <div className="w-[60vw] mx-auto">{children}</div>
        <div className="w-[20vw] fixed h-[100vh] bg-black right-0 top-0"><RightBar/></div>
        <div className="h-[80px] fixed bottom-0 z-10 w-full bg-[#181818]"><MusicPlayer/></div>
    </div>
  )
}

export default Mainlayout