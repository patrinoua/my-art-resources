import {
  youtubeChannelArray,
  musicArray,
  artistsArray,
  TileProps,
  Item,
} from './data/data'
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
        {/* <img src='colorimage.png' className='w-full'/> */}
        <h1
          className='text-3xl md:text-8xl font-extralight text-center my-6
            text-transparent bg-clip-text 
            bg-[url("/colorimage.png")]
            bg-cover 
            bg-[0%_50%]
            '
        >
          s • o • u • r • c • e • r • y
        </h1>
      </div>

      <main className='flex flex-grow flex-col  font-sans p-8'>
        {sectionsArray.map((section, i) => {
          return (
            <div key={i}>
              <Section section={section} />
              {i !== sectionsArray.length - 1 && (
                <div className='w-full h-1 bg-yellow-200 my-8 opacity-20' />
              )}
            </div>
          )
        })}
      </main>
      {/* <div className='w-full bg-black p-8'> */}

      <footer
        className='text-center text-sm text-gray-200 py-6 bg-black p-8
            bg-[url("/colorimage.png")]
            bg-cover 
            bg-[0%_67%]
      '
      >
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

type Section = {
  name: string
  array: Item[]
}
type SectionProps = {
  section: Section
}

const Section = ({ section }: SectionProps) => {
  return (
    <section className='mb-10 flex flex-col items-center' key={section.name}>
      <h2
        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        className='text-3xl md:text-6xl mt-8 mb-8 text-amber-300 text-center tracking-wide brightness-80'
      >
        {section.name}
      </h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 '>
        {section.array.map((item: Item, i: number) => (
          <Tile item={item} key={i} />
        ))}
      </div>
    </section>
  )
}

const Tile = ({ item }: TileProps) => {
  return (
    <a href={item.link} target='_blank' rel='noopener noreferrer'>
      <div
        className='
          flex flex-col p-4 
          items-center
          transition-transform duration-300 
          hover:scale-115 brightness-80 hover:brightness-100 
          center'
      >
        <img
          src={(item.image.length && item.image) || 'art_default.png'}
          className='h-45 w-45 object-cover rounded-full bg-[#150b0b]/30 brightness-80 shadow-lg'
        />
        <h1 className='text-xl text-gray-200 text-center my-3 max-w-[200px] '>
          {item.name}
        </h1>
      </div>
    </a>
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

const artistsSection = {
  name: 'Artists',
  array: artistsArray,
}
const sectionsArray = [youtubeChannelsSection, musicSection, artistsSection]
