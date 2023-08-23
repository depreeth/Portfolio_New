import React from 'react'
import profile from '../assets/profile.png'

const Home = () => {
  return (
    <div className=' w-full h-[95vh] flex flex-col px-20 pt-8'>
        <div className=' w-full  flex justify-between items-center p-3 bg-black text-white rounded-[30px] '>
            <div className=' w-[80%] flex justify-around'>
                <div className=' '>Home</div>
                <div className=' '>About</div>
                <div className=' '>Resume</div>
            </div>
            <div className=' w-full flex items-center justify-center text-xl '>
                <div className=' w-10 h-10 bg-[#FD4518] flex justify-center items-center rounded-full mx-1'>D</div>
                <div className=' mx-1'>Depreeth</div>
            </div>
            <div className=' w-[80%] flex justify-around'>
                <div className=' '>Skills</div>
                <div className=' '>Projects</div>
                <div className=' '>Contact</div>
            </div>
        </div>
        <div className=' text-center mt-8 mb-2 px-4 py-1 rounded-3xl border border-black mx-auto'>Hello!</div>
        <div className=' flex flex-col justify-center items-center my-2 z-10'>
            <div className=' text-6xl font-semibold my-1'>I'm <span className=' text-[#FD4518]'>Depreeth ,</span></div>
            <div className=' text-6xl font-semibold my-1'>Frontend Web Developer</div>
        </div>
        <div className=' relative mx-auto w-[45%] h-full mt-40 bg-[#FD4518] rounded-t-full border'>
            <div className=' absolute bottom-0  flex justify-center items-center w-full h-[60vh]'><div className=' w-full h-full'><img className=' object-contain h-full w-full' src={profile} alt='profile PIC'/></div></div>
            <div className=' absolute bottom-[6%] flex justify-center items-center w-full'><div className='  rounded-3xl p-1 bg-white'><button className=' rounded-3xl px-4 py-2 text-white font-semibold bg-[#FD4518]'>Resume</button></div></div>
        </div>
    </div>
  )
}

export default Home
 