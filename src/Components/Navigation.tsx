import React, { useState } from 'react'
import { motion, stagger,AnimatePresence } from 'framer-motion'
const Navigation = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
 const item = {
    exit: {
        opacity: 0,
        x: '100vw',
        transition: {
            ease: "easeInOut",
            duration: 0.3,
            delay:.3,
        }
        
    }
 }

    return (
        <div>

            <div className=' bg-blue-100'>
                <div className=" flex items-center justify-between container mx-auto p-2  ">
                    <motion.div animate={{ fontSize: 50, color: "#ff2994" }} className=" logo text-2xl">logo here</motion.div>
                    <nav className='hidden md:block'>
                        <ul className='flex gap-4'>
                            {
                                ['Home', 'About', 'Blog', 'Contact'].map((data, index) => {
                                    return (
                                        <li key={index}><a href="#">{data}</a></li>
                                    )

                                })
                            }
                        </ul>
                    </nav>
                    <div className="z-30 menu-bar block md:hidden cursor-pointer ">
                        <div className={`flex flex-col justify-between z-30 w-8  h-5 ${toggle ? 'open' : ''}`} onClick={handleToggle}>
                            <div className="hamburger-line h-0.5 w-full ease-in duration-300 bg-black"></div>
                            <div className={`hamburger-line h-0.5 w-full  transition delay-300 duration-300 ease-in-out bg-black ${toggle ? 'hidden' : ''}`}></div>
                            <div className="hamburger-line h-0.5 w-full ease-in duration-300 bg-black"></div>

                        </div>
                    </div>


                </div>
                <div className='z-10 block md:hidden'>
                    <AnimatePresence>

                    {
                        toggle &&
                        <motion.div
                        variants={item}
                        initial={{ x: '100vw',opacity: 0 }}
                        animate={{ x: 0 ,opacity: 1}}
                        transition={{duration: .3,delay:.3}}
                        exit="exit"
                       
                            
                            className='menu-item absolute   top-0 bg-blue-100  right-0 h-screen w-screen '>

                            <div
                                className='flex justify-center items-center flex-col h-full w-full'>
                                <h1 className='text-xl text-black'><a href="#"> login here</a> </h1>
                                <h1 className='text-xl text-black'><a href="#"> join now and be a member</a> </h1>

                            </div>
                        </motion.div>
                    }
                    </AnimatePresence>
                </div>

            </div>
            <div>
                <div className="text-xl">this is the best feature of this website</div>
            </div>
        </div>
    )
}

export default Navigation