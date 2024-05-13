import { type PostSubmitType } from '../components/PostForm'
// import { type PostFields } from '../screen/Home'

const api = 'http://localhost:8080'

export enum PostTypes {
  Instagram = 'Instagram',
  YouTube = 'YouTube',
  Twitter = 'Twitter',
  Image = 'Image',
  Facebook = 'Facebook',
  LinkedIn = 'LinkedIn',
  Pinterest = 'Pinterest',
  TikTok = 'TikTok'
}

// export async function fetchApi (endpoint: string, options: RequestInit = {}): Promise<Response> {
//   const response = await fetch(`https://your-api-url.com/${endpoint}`, options)
//   if (!response.ok) {
//     throw new Error(`API error: ${response.status} ${response.statusText}`)
//   }
//   return await response.json()
// }

export async function submitPostRequest (email: string): Promise<Response> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  }

  return await fetch(`${api}/post-request`, requestOptions)
}

export async function submitPost (post: PostSubmitType): Promise<Response> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  }

  return await fetch(`${api}/post`, requestOptions)
}

export async function getPostRequest (uniqueCode: string): Promise<Response> {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  return await fetch(`${api}/post-request/${uniqueCode}`, requestOptions)
}

export async function getCurrentPost (): Promise<Response> {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  return await fetch(`${api}/post/current`, requestOptions)
}

export async function getTodaysFame (): Promise<Response> {
  return await getCurrentPost()
  // return (getRandomElement(testData))
}

// function getRandomElement (list: PostFields[]): PostFields {
//   const randInt = Math.floor(Math.random() * list.length)
//   return list[randInt]
// }
// const testData: PostFields[] = [{
//   id: '0',
//   link: 'https://fastly.picsum.photos/id/89/200/300.jpg?hmac=Mkt49bCquTyq1IBgwbLmaT43TeyQgXNig052fowQB1M',
//   image: 'https://fastly.picsum.photos/id/89/200/300.jpg?hmac=Mkt49bCquTyq1IBgwbLmaT43TeyQgXNig052fowQB1M',
//   type: PostTypes.Image
// },
// {
//   id: '1',
//   link: 'https://www.instagram.com/p/CUbHfhpswxt/',
//   image: '',
//   type: PostTypes.Instagram
// },
// {
//   id: '2',
//   link: 'https://www.youtube.com/watch?v=HpVOs5imUN0',
//   image: '',
//   type: PostTypes.YouTube
// },
// {
//   id: '2',
//   link: 'https://twitter.com/MichelleObama/status/1179770850754596865?s=20',
//   image: '',
//   type: PostTypes.Twitter
// }
// ]
