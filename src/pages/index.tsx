import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({podcastSeries}: any) {
  console.log(podcastSeries);

  return (
    <>
      <main className='h-[45rem] sm:h-full'> 
       <div className='w-full flex flex-col items-center justify-center px-10 mb-5'>
         <Image src={podcastSeries.imageUrl} width={350} height={350} alt={podcastSeries.name} className="rounded-lg" />
         <h2 className='text-3xl my-5 sm:my-5'>{podcastSeries.name}</h2>
         <p className="w-80 sm:w-96 text-center sm:text-left">{podcastSeries.description}</p>
       </div>
      </main>
    </>
  )
}
