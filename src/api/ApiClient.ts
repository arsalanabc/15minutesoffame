import { type PostFields } from '../screen/Home'

export enum PostTypes {
  Instagram,
  YouTube,
  Twitter,
  Image
}

export async function fetchApi (endpoint: string, options: RequestInit = {}): Promise<Response> {
  const response = await fetch(`https://your-api-url.com/${endpoint}`, options)
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }
  return await response.json()
}

export async function getTodaysFame (): Promise<PostFields> {
  return (getRandomElement(testData))
}

function getRandomElement (list: PostFields[]): PostFields {
  const randInt = Math.floor(Math.random() * list.length)
  return list[randInt]
}
const testData: PostFields[] = [{
  id: '0',
  link: 'https://fastly.picsum.photos/id/89/200/300.jpg?hmac=Mkt49bCquTyq1IBgwbLmaT43TeyQgXNig052fowQB1M',
  image: 'https://fastly.picsum.photos/id/89/200/300.jpg?hmac=Mkt49bCquTyq1IBgwbLmaT43TeyQgXNig052fowQB1M',
  type: PostTypes.Image
},
{
  id: '1',
  link: 'https://www.instagram.com/p/CUbHfhpswxt/',
  image: '',
  type: PostTypes.Instagram
},
{
  id: '2',
  link: 'https://www.youtube.com/watch?v=HpVOs5imUN0',
  image: '',
  type: PostTypes.YouTube
},
{
  id: '2',
  link: 'https://twitter.com/MichelleObama/status/1179770850754596865?s=20',
  image: '',
  type: PostTypes.Twitter
}
]
