import { youtubeChannelArray, musicArray, TileProps, Item } from './data/data'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'], // πρόσθεσε και '600', '700' αν χρειάζεσαι bold
  variable: '--font-montserrat',
})
export default function Home() {
  return (
    <div
      className={` ${montserrat.variable} min-h-screen flex flex-col text-gray-200`}
      style={{
        background: 'linear-gradient(to top, #181322ff, #63104eff)',
      }}
    >
      <div className='w-full bg-black p-8'>
        <h1 className='text-5xl font-extralight text-center my-6'>
          s • o • u • r • c • e • r • y
        </h1>
      </div>

      <main className='flex flex-grow flex-col  font-sans p-8'>
        {sectionsArray.map((section, i) => {
          return (
            <div key={i}>
              <Section item={section} />
              {i !== sectionsArray.length - 1 && (
                <div className='w-full h-1 bg-yellow-200 my-8 opacity-20' />
              )}
            </div>
          )
        })}
      </main>
      {/* <div className='w-full bg-black p-8'> */}

      <footer className='text-center text-sm text-gray-200 py-6 bg-black p-8'>
        <a
          href='https://angeliki.web.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          © Angeliki Patrinou, 2025
        </a>
      </footer>
    </div>
  )
}

const Tile = ({ item }: TileProps) => {
  return (
    <div className='flex p-4 transition-transform duration-300 hover:scale-105  brightness-80 hover:brightness-100 '>
      <a href={item.link} target='_blank' rel='noopener noreferrer'>
        <img
          src={item.image}
          className='h-40 mb-2 aspect-video object-contain '
        />
        <h1 className='text-xl text-gray-200 text-center my-3'>{item.name}</h1>
      </a>
    </div>
  )
}

type Section = {
  name: string
  array: any
}
type SectionProps = {
  item: Section
}

const Section = ({ item }: SectionProps) => {
  return (
    <section className='mb-10' key={item.name}>
      <h2 className='text-3xl mt-8 mb-6 text-yellow-200 text-center tracking-wide brightness-70'>
        {item.name}
      </h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {item.array.map((item: Item, i: number) => (
          <Tile item={item} key={i} />
        ))}
      </div>
    </section>
  )
}

const youtubeChannelsSection = {
  name: 'Youtube Channels',
  array: youtubeChannelArray,
}

const musicSection = {
  name: 'Music',
  array: musicArray,
}

const sectionsArray = [youtubeChannelsSection, musicSection]
