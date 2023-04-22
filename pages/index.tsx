import Head from 'next/head'
import Intro from '@/components/Intro'
import NavigationBar from '@/components/NavigationBar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Abenezer E.</title>
      </Head>

        <NavigationBar />
        
        <main className="flex min-h-screen bg-black">
          <Intro />
        </main>
    </>
  )
}
