export type Item = {
  id: string
  name: string
  link: string
  image: string
  dateAdded: string
}
export type TileProps = {
  item: Item
}

export const youtubeChannelArray: Item[] = [
  {
    //maybe add city
    id: 'yt_1',
    name: 'The Museum of Modern Art',
    link: 'https://www.youtube.com/@themuseumofmodernart',
    image: 'momapic.png',
    dateAdded: '17/07/2025',
  },
  {
    id: 'yt_2',
    name: 'Luisiana Museum of Modern Art',
    link: 'https://www.youtube.com/@LouisianaMuseum',
    image: 'luisiana-inv.png',
    dateAdded: '17/07/2025',
  },
  {
    id: 'yt_3',
    name: 'Tate Museum',
    link: 'https://www.youtube.com/@Tate',
    image: 'tate.png',
    dateAdded: '17/07/2025',
  },
]

export const musicArray: Item[] = [
  {
    id: 'music_3',
    name: 'lastfm',
    link: 'https://www.last.fm',
    image: 'lastfm.png',
    dateAdded: '17/07/2025',
  },
  {
    id: 'music_1',
    name: 'Soundcloud',
    link: 'https://www.soundcloud.com/',
    image: 'soundcloud.png',
    dateAdded: '17/07/2025',
  },
  {
    id: 'music_2',
    name: 'Mixcloud',
    link: 'https://www.mixcloud.com/',
    image: 'mixcloud.png',
    dateAdded: '17/07/2025',
  },
]
