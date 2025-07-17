import { videosArray } from './data/youtube'

export type Item = {
  id: number
  name: string
  link: string
  image: string
  dateAdded: string
}

type TileProps = {
  item: Item
}
const Tile = ({ item }: TileProps) => {
  return (
    <div className='p-4 '>
      <a href={item.link} target='_blank' rel='noopener noreferrer'>
        <img
          src={item.image}
          className='h-40 mb-2 aspect-video object-contain '
        />
        <h1 className='text-xl text-gray-200 text-600 text-center my-3'>
          {item.name}
        </h1>
        <p className='text-sm text-gray-200 text-center'>{item.dateAdded}</p>
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <div
      className='min-h-screen flex flex-col'
      style={{
        background: 'linear-gradient(to bottom, #000000, #1a1a1a, #5d184cff)',
      }}
    >
      <main className='flex-grow flex flex-col text-gray-200 font-sans p-8'>
        <h1 className='text-4xl font-semibold text-center mb-10'>
          my art resources
        </h1>

        {/* <nav className='flex justify-center gap-10 text-xl border-b border-gray-200 pb-4 mb-8'>
          <span className='hover:text-white cursor-pointer'>Videos</span>
          <span className='hover:text-white cursor-pointer'>Music</span>
          <span className='hover:text-white cursor-pointer'>Art</span>
        </nav> */}

        <section className='mb-12'>
          <h2 className='text-2xl m-4'>Youtube channels</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {videosArray.map((item, i) => (
              <Tile item={item} key={i} />
            ))}
          </div>
        </section>
        {/*  
      <section className='mb-12'>
        <h2 className='text-2xl mb-4'>Videos</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='bg-gray-800 rounded shadow-md p-4'>
              <div className='bg-gray-600 h-40 mb-2' />
              <p className='text-sm text-gray-400'>Name, date updated</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-2xl mb-4'>Instagram accounts</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='bg-gray-800 rounded shadow-md p-4'>
              <div className='bg-gray-600 h-40 mb-2' />
              <p className='text-sm text-gray-400'>Name, date updated</p>
            </div>
          ))}
        </div>
      </section> */}
      </main>
      <footer className='text-center text-sm text-gray-200 py-6'>
        <a
          href='https://angeliki.web.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          ©Angeliki Patrinou, 2025
        </a>
      </footer>
    </div>
  )
}
