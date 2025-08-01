export type Item = {
  name: string
  link: string
  image: string
  dateAdded: string
  comment?: string
}
export type TileProps = {
  item: Item
}

export const youtubeChannelArray: Item[] = [
  {
    //maybe add city
    name: 'The Museum of Modern Art',
    link: 'https://www.youtube.com/@themuseumofmodernart',
    image: 'moma1.png',
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
    name: 'Electron Soundcloud',
    link: 'https://soundcloud.com/elektron-cafe',
    image: 'ilektron1.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Pikap mixcloud',
    link: 'https://www.mixcloud.com/topikap/',
    image: 'topikap.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Paranoise radio',
    link: 'https://www.paranoiseradio.com/',
    image: 'paranoise.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Paranoise mixcloud',
    link: 'https://www.mixcloud.com/ParanoiseRadio/',
    image: 'paranoise1.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Classics by Sofia',
    link: 'https://open.spotify.com/playlist/7iPLWA8euz3QaZjkFSUsUm?si=Wca-jOqIQuWRKnVFzwVCyg&pi=Zc0pkVFUSLG0O&nd=1&dlsi=f3224d75fadf4452',
    image: 'classic.png',
    dateAdded: '18/07/2025',
  },
  {
    name: 'lastfm',
    link: 'https://www.last.fm/user/MrsBlackGr',
    image: 'lastfm-me.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'Goo mixcloud',
    link: 'https://www.mixcloud.com/george-goo/',
    image: 'goo.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'lostinthe soundcloud',
    link: 'https://www.google.com/search?q=lostinthe+mixcloud&oq=lostinthe+mixcloud&gs_lcrp=EgZjaHJvbWUyCwgAEEUYChg5GKAB0gEIMzk4OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    image: 'lostinthe.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'Kirchoff mixcloud',
    link: 'https://www.mixcloud.com/37_5967%CE%9D_Kirchoff26_1123%CE%95/?fbclid=IwY2xjawLp6oVleHRuA2FlbQIxMABicmlkETBNUFdrQkV4VWFzeFR3MjFkAR68HL75UYJXYRTAgh16HXXR9RJe9D8SdFbFpcpc7EAmYneGSPPca9VL3qOdpQ_aem_OqTZ0SCZE77xaTkFClmqZQ',
    image: 'kirchoff1.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'lostinthe mixcloud',
    link: 'https://soundcloud.com/lostinthe',
    image: 'lostinthe.png',
    dateAdded: '31/07/2025',
  },

  {
    name: 'Holy Tongue',
    link: 'https://amidahrecords.bandcamp.com/',
    image: 'holy_tongue.png',
    dateAdded: '18/07/2025',
  },
  {
    name: 'Panfar mixcloud',
    link: 'https://www.mixcloud.com/pan-far/reposts/',
    image: 'panfar.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Duru mixcloud',
    link: 'https://www.mixcloud.com/DuruDuru/reposts/',
    image: 'duru.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Electrodon Mixcloud',
    link: 'https://www.mixcloud.com/electrodon/',
    image: 'electrodon.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'mechatronica Mixcloud',
    link: 'https://www.mixcloud.com/electrodon/',
    image: 'mechatronica.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'asoray soundcloud',
    link: 'https://www.soundcloud.com/asoray/',
    image: 'asoray.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'CDV dj sets mixcloud',
    link: 'https://www.google.com/search?q=club+de+visionaire+mixcloud&oq=club+de+visionaire+mixcloud&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBdIBCDUyMDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
    image: 'cdv.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'Tresor soundcloud',
    link: 'https://soundcloud.com/tresorberlin',
    image: 'tresor.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'CDV soundcloud',
    link: 'https://soundcloud.com/user-635775409',
    image: 'cdv.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'Tresor sets soundcloud',
    link: 'https://soundcloud.com/search?q=tresor',
    image: 'tresor.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'fusion soundcloud',
    link: 'https://soundcloud.com/fusionfestivallaerz',
    image: 'fusion.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'Afrika burn soundcloud',
    link: 'https://soundcloud.com/afrikaburn',
    image: 'afrikaburn.png',
    dateAdded: '31/07/2025',
  },
]

export const barsArray: Item[] = [
  {
    name: 'Pikap',
    link: 'https://www.instagram.com/topikap',
    image: 'topikap.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Electron',
    link: 'https://www.instagram.com/elektron.cafe',
    image: 'ilektron1.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Μήκους',
    link: 'https://www.instagram.com/mikroumikous.bar',
    image: 'mikous.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Προσεχώς',
    link: 'https://www.instagram.com/prosexws',
    image: '',
    dateAdded: '19/07/2025',
    comment: 'akrivoutsiko!',
  },
  {
    name: 'Pierrot',
    link: 'https://www.instagram.com/_pierrot_le_fou_pub_alehaus/',
    image: 'pierrot.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Oratos',
    link: 'https://www.instagram.com/_oratos__/',
    image: 'oratos.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Yfanet',
    link: 'https://www.instagram.com/fabrika.yfanet/',
    image: 'yfanet.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Resi',
    link: 'https://www.instagram.com/theresidentsbar/',
    image: 'resi.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Arcade',
    link: 'https://www.instagram.com/arcade_skg/',
    image: 'arcade.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Giapi',
    link: 'https://www.instagram.com/giapi_bar /',
    image: 'giapi.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Hemingway',
    link: 'https://www.instagram.com/hemingway_skg/',
    image: 'hemingway.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Elephantas',
    link: 'https://www.instagram.com/cafe_bar_elephantas/',
    image: 'elephantas.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Film',
    link: 'https://www.instagram.com/film_cafe_bar/',
    image: 'film.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Mr Jones',
    link: 'https://www.instagram.com/mr.jones_thessaloniki/',
    image: 'mrjones.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Urban',
    link: 'https://www.instagram.com/urbanbarskg/',
    image: 'urban.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Elxate',
    link: 'https://www.instagram.com/elxate_unofficial/',
    image: 'elxate.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Palermo',
    link: 'https://www.instagram.com/cafepalermo_/',
    image: 'palermo.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Stereo',
    link: 'https://www.instagram.com/stereo_oo_/',
    image: 'stereo.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Ypsilon',
    link: 'https://www.instagram.com/ypsilon___/',
    image: 'ypsilon.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Tzela Delta',
    link: 'https://www.instagram.com/tzeladeltaskg_/',
    image: 'tzeladelta.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Ydro',
    link: 'https://www.instagram.com/ydro___/',
    image: 'ydro.png',
    dateAdded: '21/07/2025',
  },
  // {
  //   name: 'Speakeasy',
  //   link: 'https://www.instagram.com/speakeasy_floor/',
  //   image: 'speakeasy.png',
  //   dateAdded: '21/07/2025',
  // },
  {
    name: 'Highonsugar',
    link: 'https://www.instagram.com/highonsugar______/',
    image: 'highonsugar.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Host',
    link: 'https://www.instagram.com/the_host_clubskg/',
    image: 'host.png',
    dateAdded: '21/07/2025',
  },
  {
    name: 'Augoustos',
    link: 'https://www.instagram.com/avgoustosbar/',
    image: 'augoustos.png',
    dateAdded: '31/07/2025',
  },
  {
    name: 'The Path',
    link: 'https://www.instagram.com/the_path_skg/',
    image: 'thepath.png',
    dateAdded: '31/07/2025',
  },
]
export const djsArray: Item[] = [
  {
    name: 'Παν Φαρ',
    link: 'https://www.instagram.com/pan__far/',
    image: 'panfar.png',
    dateAdded: '19/07/2025',
  },

  {
    name: 'Duru Duru',
    link: 'https://www.instagram.com/eva.duruduru/',
    image: 'duru.png',
    dateAdded: '19/07/2025',
  },

  {
    name: 'lostinthe',
    link: 'https://www.instagram.com/lostinthe.77/',
    image: 'goo.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Goo',
    link: 'https://www.instagram.com/vwettex/',
    image: 'goo.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Kirchoff',
    link: 'https://web.facebook.com/profile.php?id=1080617384',
    image: 'kirchoff.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Kate de Sons',
    link: 'https://www.instagram.com/katedesons/',
    image: 'katedesons.png',
    dateAdded: '19/07/2025',
  },
  {
    name: 'Mammoth',
    link: 'https://web.facebook.com/nikos.kleisiaris.1',
    image: 'mammoth.png',
    dateAdded: '19/07/2025',
  },
]

export const ekpompesArray: Item[] = [
  {
    name: 'story of Utopias',
    link: 'https://www.mixcloud.com/topikap/story-of-utopias-by-nikolas-malevitsis-kyriakos-plsds/',
    image: '',
    dateAdded: '19/07/2025',
  },
  {
    name: 'samba, kirchoff',
    link: 'https://www.mixcloud.com/ParanoiseRadio/cicadas-s03e05-kirchoff/',
    image: '',
    dateAdded: '19/07/2025',
  },
  {
    name: 'germanos, ambient',
    link: 'https://www.mixcloud.com/ParanoiseRadio/mindcolormusic-s02e03-omni-causa/',
    image: '',
    dateAdded: '19/07/2025',
  },
]

export const followingArray: Item[] = [
  {
    name: 'panfar mixcloud favorites',
    link: 'https://www.mixcloud.com/pan-far/favorites/',
    image: 'panfar.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'panfar soundcloud',
    link: 'https://soundcloud.com/panfrk/following',
    image: 'panfar.png',
    dateAdded: '17/07/2025',
  },
  {
    name: 'mrClarinet soundcloud',
    link: 'https://soundcloud.com/user-87464760/following',
    image: '',
    dateAdded: '17/07/2025',
  },
  {
    name: 'duru soundcloud',
    link: 'https://soundcloud.com/duru-duru-1/following',
    image: 'duru.png',
    dateAdded: '17/07/2025',
  },
]
export const therinaArray: Item[] = [
  {
    name: 'Apollon',
    link: 'https://www.instagram.com/cine_apollon/',
    image: 'cine-apollon.png',
    dateAdded: '20/07/2025',
  },
  {
    name: 'Alex',
    link: 'https://www.instagram.com/cinema_alex/',
    image: 'cine-alex.png',
    dateAdded: '20/07/2025',
  },

  {
    name: 'Natali',
    link: 'https://www.instagram.com/natalicinema',
    image: 'cine-natali.png',
    dateAdded: '20/07/2025',
  },
]

export const hobbiesArray: Item[] = [
  {
    name: 'ορειβασια - ΟΑΛΘ - σχολη βουνου;',
    link: 'https://web.facebook.com/oalth/events',
    image: 'oalth.png',
    dateAdded: '22/07/2025',
  },
  {
    name: 'ΦΗΤ - πεζοποριαα',
    link: 'https://web.facebook.com/groups/622073555529798/events',
    image: 'fit.png',
    dateAdded: '22/07/2025',
  },

  {
    name: 'NorthStars',
    link: 'https://web.facebook.com/groups/5712697648860055/events',
    image: 'NorthStars.png',
    dateAdded: '22/07/2025',
  },
  {
    name: 'adventure experience',
    link: 'https://web.facebook.com/adventureexperiencegreece/events',
    image: 'adventureexperience.png',
    dateAdded: '22/07/2025',
  },
  {
    name: 'Kings of Mountains',
    link: 'https://web.facebook.com/kingsofmountains.gr/events',
    image: 'kingsofmountains.png',
    dateAdded: '22/07/2025',
  },
  {
    name: 'pezoporontas',
    link: 'https://web.facebook.com/pezoporontas',
    image: 'pezoporontas.png',
    dateAdded: '22/07/2025',
  },
  {
    name: 'στερεοσις φωτογραφια',
    link: 'https://www.stereosis.com/academy-back-to-basics/',
    image: 'stereosis.png',
    dateAdded: '22/07/2025',
  },
  {
    name: 'χορος - συγχρονο / σουινγκ / μπαλετο',
    link: '',
    image: '',
    dateAdded: '22/07/2025',
  },
  {
    name: 'φωτογραφια στερεοσις / φλας',
    link: '',
    image: '',
    dateAdded: '22/07/2025',
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
