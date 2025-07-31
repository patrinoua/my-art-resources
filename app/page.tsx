import {
  TileProps,
  Item,
  youtubeChannelArray,
  musicArray,
  // artistsArray,
  therinaArray,
  barsArray,
  djsArray,
  ekpompesArray,
  followingArray,
  hobbiesArray,
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
        background:
          'linear-gradient(to bottom, #150731ff, #63104eff, #011c34ff)',
      }}
    >
      <div className='w-full bg-black p-8'>
        {/* <img src='colorimage.png' className='w-full'/> */}
        <h1
          className='text-3xl md:text-7xl font-extralight text-center my-6
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
                <div className='w-full h-1 bg-yellow-900 my-8 opacity-80 shadow-lg' />
              )}
            </div>
          )
        })}
      </main>
      {/* <div className='w-full bg-black p-8'> */}
      <div className='flex flex-col items-center p-4 text-gray-500 '>
        * Things that are not included (but hey, change my mind!) are{' '}
        <b>arte, nts</b>
      </div>
      <footer
        className='text-center text-sm text-gray-200 py-6 bg-black p-8
            bg-[url("/colorimage.png")]
            bg-cover 
            bg-[0%_67%]
      '
      >
        <div className='flex justify-center'>
          <a
            href='https://www.instagram.com/demeque_saloniquia/'
            target='_blank'
            className='no-underline'
          >
            <img src='instagram.png' className='w-7 m-2 mb-5' />
          </a>
          <a
            href='https://github.com/patrinoua/my-art-resources'
            target='_blank'
            className='no-underline'
          >
            <img src='github.png' className='w-7 m-2 mb-5' />
          </a>
        </div>
        {/* <a
          href='https://angeliki.web.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          © Angeliki Patrinou, 2025
        </a> */}
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
        className='text-3xl md:text-5xl mt-8 mb-8 text-amber-400 text-center tracking-wide brightness-70'
      >
        {section.name}
      </h2>
      <div className='grid grid-cols-1 gap-4 grid-cols-2 md:grid-cols-3 '>
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
          className='md:h-45 md:w-45 h-25 w-25 object-cover rounded-full bg-[#150b0b]/30 brightness-80 shadow-lg p-1 md:m-2 md:p-2'
        />
        <h1 className='text-xl text-gray-200 text-center my-3 max-w-[200px] '>
          {item.name}
        </h1>
        {item.comment && (
          <p className='text-gray-200 text-center my-3 max-w-[200px] '>
            {item.comment}
          </p>
        )}
      </div>
    </a>
  )
}

const youtubeChannels = {
  name: 'Youtube Channels',
  array: youtubeChannelArray,
}

const music = {
  name: 'Music',
  array: musicArray,
}

// const artists = {
//   name: 'Artists',
//   array: artistsArray,
// }
const bars = {
  name: 'Where?',
  array: barsArray,
}
const djs = {
  name: 'Who?',
  array: djsArray,
}
const ekpompes = {
  name: 'Shows',
  array: ekpompesArray,
}
const following = {
  name: 'Δείξε μου το φίλο σου',
  array: followingArray,
}
const therina = {
  name: 'θερινά σινεμά',
  array: therinaArray,
}
const hobbies = {
  name: 'hobbiz',
  array: hobbiesArray,
}

const sectionsArray = [
  youtubeChannels,
  music,
  bars,
  djs,
  ekpompes,
  // artists,
  following,
  therina,
  hobbies,
]
