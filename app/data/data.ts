export type Item = {
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
    name: 'The Museum of Modern Art',
    link: 'https://www.youtube.com/@themuseumofmodernart',
    image: 'momapic.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Luisiana Museum of Modern Art',
    link: 'https://www.youtube.com/@LouisianaMuseum',
    image: 'luisiana-inv.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Tate Museum',
    link: 'https://www.youtube.com/@Tate',
    image: 'tate.png',
    dateAdded: '17/07/2025',
  },
]

export const musicArray: Item[] = [
  {
    name: 'lastfm',
    link: 'https://www.last.fm/user/MrsBlackGr',
    image: 'lastfm-me.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'goo mixcloud',
    link: 'https://www.mixcloud.com/george-goo/',
    image: 'goo.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Electron Soundcloud',
    link: 'https://soundcloud.com/elektron-cafe',
    image: 'ilektron1.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Pikap Soundcloud',
    link: 'https://soundcloud.com/to-pikap-radio',
    image: 'pikap1.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Electron mixcloud',
    link: 'https://www.mixcloud.com/elektroncafe/',
    image: 'ilektron.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'pikap mixcloud',
    link: 'https://www.mixcloud.com/topikap/',
    image: 'topikap.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'classics by sofia',
    link: 'https://open.spotify.com/playlist/7iPLWA8euz3QaZjkFSUsUm?si=Wca-jOqIQuWRKnVFzwVCyg&pi=Zc0pkVFUSLG0O&nd=1&dlsi=f3224d75fadf4452',
    image: '',
    dateAdded: '18/07/2025',
  },
  {
    name: 'Holy Tongue',
    link: 'https://amidahrecords.bandcamp.com/',
    image: 'holy_tongue.png',
    dateAdded: '18/07/2025',
  },
]

export const artistsArray: Item[] = [
  {
    name: 'Pedro Maia',
    link: 'https://www.instagram.com/maiapedro/',
    image: 'maia.png',
    dateAdded: '17/07/2025',
  },
]
