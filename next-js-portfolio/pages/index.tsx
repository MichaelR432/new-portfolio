import Head from 'next/head'
import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import mars from "../public/marsAvatarLg.png"
import weather from "../public/weather.png"
import passwordgen from "../public/passwordgen.png"
import teamgen from "../public/teamgen.png"
import trackteam from "../public/track-team.png"
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] =useState(false);
  return (
  <div className={darkMode ? "dark" :""}>
    <>
      <Head>
        <title>Michael A Ramos Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white dark:bg-slate-900 px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-bold dark:text-white'>Developed By Mike</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                className='cursor-pointer text-2xl  dark:text-white'/>
              </li>
              <li>
                <a className=' bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/1olVZ_ELkYGjXhznAWk_ockTrkKZ6X-1y/view?usp=sharing' target="blank">Resume</a>
              </li>
              
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className=' text-5xl py-2 text-green-700 font-medium md:text-6xl'>Michael A Ramos</h2>
            <h3 className=' text-2xl py-2 md:text-3xl  dark:text-white'>Full Stack Developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto  dark:text-gray-300'>
              Hello! Welcome to my Portfolio! 
              </p>
          </div>
          <div className='text-5xl flex justify-center gap-16  dark:text-white'>
            <a href='https://www.linkedin.com/in/michael-ramos-4399aa1a4/' target="blank">
            <AiFillLinkedin />
            </a>
            <a href='https://github.com/MichaelR432' target="blank">
            <AiFillGithub />
            </a>
          </div>
          <div className='flex items-center mx-auto bg-gradient-to-b from-green-700 rounded-full w-80 h-80 mt-20'>
            <div className='mb-20'>
             <Image alt='' src={mars} />
            </div>
          </div>
        </section>

        <section className=' dark:text-white'>
          <div>
            <h3 className='text-center text-3xl py-1 mt-5 '>About Me</h3>
            <p className='text-center text-md py-2 leading-8 text-gray-800  dark:text-white max-w-lg mx-auto'> I am a University of Arizona Coding Bootcamp Alum and continue to learn outside of the classroom everyday. I have worked with both client and sever software systems. I enjoy connecting with other engineers and working through different stages of the development process.  </p>

            <h3 className='text-center text-3xl py-1 mt-5 '>My Projects</h3>
          </div>
          <div className=' lg:flex gap-10 justify-between'>
            <a href='https://michaelr432.github.io/weather-or-not-dashboard/' target="blank">
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700'>
              <Image src={weather} alt="" className=" shadow-lg"></Image>
              <h3 className='text-lg font-medium pt-8 pb-2'>Weather Dashborad</h3>
            </div>
            </a>
            <a href='https://michaelr432.github.io/password-gen-chall3/' target="blank">
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700'>
              <Image src={passwordgen} alt="" className=" shadow-lg"></Image>
              <h3 className='text-lg font-medium pt-8 pb-2'>Password Generator</h3>
            </div>
            </a>
            <a href='https://github.com/MichaelR432/generate-my-team' target="blank">
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700'>
              <Image src={teamgen} alt="" className=" shadow-lg"></Image>
              <h3 className='text-lg font-medium pt-8 pb-2'>Team Generator 'Node.js'</h3>
            </div>
            </a>
            <a href='https://github.com/MichaelR432/track-my-team-db' target="blank">
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700'>
              <Image src={trackteam} alt="" className=" shadow-lg"></Image>
              <h3 className='text-lg font-medium pt-8 pb-2'>Track My Team 'Sql'</h3>
            </div>
            </a>
          </div>
        </section> 
      </main>
    </>
  </div>
  )
}
