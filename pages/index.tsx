import Head from 'next/head'
import Intro from '@/components/Intro'
import NavigationBar from '@/components/NavigationBar'
import Abount from '@/components/About'


export default function Home() {
  return (
    <>
      <Head>
        <title>Abenezer E.</title>
      </Head>

        <NavigationBar />
        
        <main className="min-h-screen bg-black overflow-x-hidden">
          <Intro />
          <Abount />
        </main>
    </>
  )
}
