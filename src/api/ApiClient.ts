import { ImageFields } from "../screen/Home";

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`https://your-api-url.com/${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }
  
export async function getTodaysFame():Promise<ImageFields>{
    return await({
        id: "1",
        link: "https://fastly.picsum.photos/id/89/200/300.jpg?hmac=Mkt49bCquTyq1IBgwbLmaT43TeyQgXNig052fowQB1M",
        image: "https://fastly.picsum.photos/id/89/200/300.jpg?hmac=Mkt49bCquTyq1IBgwbLmaT43TeyQgXNig052fowQB1M"
    })
}
