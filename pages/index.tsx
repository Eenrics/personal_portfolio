import Head from 'next/head'
import Intro from '@/components/Intro'
import NavigationBar from '@/components/NavigationBar'
import Abount from '@/components/About'
import Works from '@/components/Works'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abenezer Eshetie</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

        <NavigationBar />
        
        <main className="min-h-screen bg-black overflow-x-hidden  chewy-regular">
          <Intro />
          <Abount />
          <Works />
        </main>
    </>
  )
}
