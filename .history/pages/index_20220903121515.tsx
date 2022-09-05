import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Landing />
      </main>
      <section className='relative min-h-screen -mt-[100vh] z-40 bg-[#1B1B1B]'>
        <div>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
            New Promos
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Home
