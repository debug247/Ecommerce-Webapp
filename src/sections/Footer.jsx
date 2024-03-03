import React, { useEffect } from 'react'
import { footericons } from '../components/export'
import { FaFacebook, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import footerlogo from '../assets/clients/footer-logo.svg'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../components/DarkModeContext';
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (

        <>
            <section className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}>
                <div data-aos="zoom-in" id='icon-boxes' className='flex justify-between lg:items-center items-start lg:flex-row flex-col w-full gap-6'>
                    {
                        footericons.map((item, index) => (
                            <div key={index} className='flex justify-center items-center gap-3'>
                                <div id='iconbox' className='border-2 dark:text-white border-slate-300 rounded-full p-4 hover:bg-black hover:text-white cursor-pointer'>
                                    {item.icon && <item.icon className='w-[25px] h-[25px]' />}
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <h1 className='text-2xl text-black font-semibold dark:text-white'>{item.title}</h1>
                                    <p className='text-[17px] text-slate-600 dark:text-white'>{item.para}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section id='contact' className={`${darkMode ? 'dark bg-[#19191a]' : 'light bg-black'} w-full text-white lg:px-10 px-10 lg:py-20 py-10 grid lg:grid-cols-5 grid-cols-1 justify-between items-start gap-14`}>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-start gap-5'>
                    <img src={footerlogo} alt="" />
                    <p className='text-lg text-justify text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit harum dolorem nostrum facilis repellat ab totam, quidem vero ea fuga.</p>
                    <div id='social-icons' className=' grid grid-cols-4 gap-3'>
                        <div id='social-icon-box' className='border-2 border-slate-600 rounded-full p-3 hover:bg-white hover:text-black cursor-pointer'><FaFacebook className='w-[20px] h-[20px]' /></div>
                        <div id='social-icon-box' className='border-2 border-slate-600 rounded-full p-3 hover:bg-white hover:text-black cursor-pointer'><FaLinkedin className='w-[20px] h-[20px]' /></div>
                        <div id='social-icon-box' className='border-2 border-slate-600 rounded-full p-3 hover:bg-white hover:text-black cursor-pointer'><FaTwitter className='w-[20px] h-[20px]' /></div>
                        <div id='social-icon-box' className='border-2 border-slate-600 rounded-full p-3 hover:bg-white hover:text-black cursor-pointer'><AiFillInstagram className='w-[20px] h-[20px]' /></div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-start gap-3'>
                    <h1 className='text-xl font-semibold'>About Us</h1>
                    <h1 className='text-lg text-slate-300'>Our Story</h1>
                    <h1 className='text-lg text-slate-300'>Mission & Values</h1>
                    <h1 className='text-lg text-slate-300'>Meet the team</h1>
                    <h1 className='text-lg text-slate-300'>Sustainability Efforts</h1>
                    <h1 className='text-lg text-slate-300'>Brand Partnerships</h1>
                    <h1 className='text-lg text-slate-300'>Influencer Collaborations</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600" className='flex flex-col justify-center items-start gap-3'>
                    <h1 className='text-xl font-semibold'>Accessibility</h1>
                    <h1 className='text-lg text-slate-300'>Our Story</h1>
                    <h1 className='text-lg text-slate-300'>Mission & Values</h1>
                    <h1 className='text-lg text-slate-300'>Meet the team</h1>
                    <h1 className='text-lg text-slate-300'>Sustainability Efforts</h1>
                    <h1 className='text-lg text-slate-300'>Brand Partnerships</h1>
                    <h1 className='text-lg text-slate-300'>Influencer Collaborations</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="800" className='flex flex-col justify-center items-start gap-3'>
                    <h1 className='text-xl font-semibold'>Join Our Community</h1>
                    <h1 className='text-lg text-slate-300'>Our Story</h1>
                    <h1 className='text-lg text-slate-300'>Mission & Values</h1>
                    <h1 className='text-lg text-slate-300'>Meet the team</h1>
                    <h1 className='text-lg text-slate-300'>Sustainability Efforts</h1>
                    <h1 className='text-lg text-slate-300'>Brand Partnerships</h1>
                    <h1 className='text-lg text-slate-300'>Influencer Collaborations</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1000" className='flex flex-col justify-center items-start gap-6 w-full'>
                    <h1 className='text-3xl font-bold'>Let's get in touch</h1>
                    <p className='text-slate-300 text-xl'>Signup for our newsletter & gets 50% off</p>
                    <div id='form' className='flex justify-start items-center gap-1 bg-white rounded-xl p-2 w-full'>
                        <input type="email" placeholder='Enter your email here...' className='px-4 py-2 w-full' />
                        <button className='text-black pr-3'><FaArrowRightLong className='w-[20px] h-[20px]' /></button>
                    </div>
                </div>
            </section>

            {/* dark mode toggle button  */}
            <div>
                <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-gray-900 fixed top-[350px] right-[30px]'>
                    {darkMode ? <FaMoon size={30} className='text-white' /> : <FaSun size={30} className='text-white' />}
                </button>
            </div>

            {/* scroll to top button  */}
            <div id='icon-box' className='bg-yellow-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
                <Link to='hero' spy={true} offset={-100} smooth={true}>
                    <FaArrowUp className='w-[35px] h-[35px]' />
                </Link>
            </div>
        </>

    )
}

export default Footer