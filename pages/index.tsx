import Image from 'next/image'
import Head from 'next/head'
import {motion} from 'framer-motion'

const navBottonStyle = 'text-white hover:bg-gray-700 mx-5 p-1 px-2 rounded-full cursor-pointer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ebenezer | EBZ</title>
      </Head>
      <main className="flex min-h-screen bg-black">
        <motion.nav 
          className='flex fixed h-10 w-10/12 border-b-2 border-white m-5 pb-1'
          >
            <ul 
              className='pl-5 flex flex-row '>
                <li 
                  className={navBottonStyle}
                  >
                    About Me
                </li>
                <li 
                  className={navBottonStyle}
                  >
                    Education
                </li>
                <li 
                  className={navBottonStyle}
                  >
                    My Works
                </li>
                <li 
                  className={navBottonStyle}
                  >
                    Contact
                </li>
            </ul>

        </motion.nav>

      </main>
    </>
  )
}
