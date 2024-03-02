import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'APOD Redesign - Home',
  description: 'Explore the wonders of the universe with our space-themed website powered by NASA\'s Astronomy Picture of the Day API. Immerse yourself in captivating daily images and expand your cosmic knowledge. Enhance your frontend development skills while enjoying the beauty of space.',
  keywords: 'Space exploration, NASA APOD API, cosmic imagery, frontend development, universe wonders',
  openGraph: {
    type: "website",
    url: "https://apod.edwardcreates.ca/"
  }
}

type APOD = {
  id: number,
  title: string,
  url: string,
  hurl: string,
  date: string,
  media_type: string,
  explanation: string,
  copyright: string
}
/**
 * 
 * @returns NASA api data
 */
async function getData() {
  let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`, {
    method: "GET"
  });
  // Forces json into types
  const data:APOD = await res.json()
  return data
}
/**
 * 
 * @returns The main page fo picture, body and styling
 */
export default async function Home() {
  // Contatins all of the Nasa API data
  const data:APOD = await getData()
  return (
    <main className="">
      <section className=' w-4/5 m-auto mt-10 rounded-xl border-gray-400 border-4'>
        {/* Outline around the card and header ^^^ */}

        <h1 className='text-center text-white font-semibold text-3xl my-5'>
          Latest News
        </h1>
        {data ? (
          /**
           * This section return both visual and 
           * theoretical/conceptual content. 
           * 
           * Visual being a photo in either HD 
           * or regular.
           * 
           * Theoretical/Conceptual being the 
           * words or facts about the visual 
           * we see. 
           */
          <div key={data?.id} className="flex flex-col w-3/4 m-auto rounded-2xl card " >
            {/* Card */}
            {data?.media_type === "video" ? (
              /**
               * This if-check will switch between
               * video if the fetched data just so
               * happens to be a video. Otherwise 
               * it'll be a picture. 
               */
              <iframe
                src={data?.url}
                title={data?.title}
                width='560'
                height='349'
                frameBorder='0'
                allowFullScreen
              />
            ) : (
              <div>
                {/* Downloadable Picture */}
                <a href={data?.hurl}>
                  <Image
                    src={data?.url}
                    alt={data?.title}
                    width={900}
                    height={750}
                    priority={true}
                    quality={100}
                  />
                </a>
              </div>
            )}
            {/* 
            The code below contains the content needed for each release
            , then  it will change and stay the same unlike the code above 
            which switches between a video or picture.
            */}
            <div className="flex flex-col justify-start card-body">
              {/* Content of the Post */}
              <h2 className="text-2xl text-white card-title text-left">
                {data?.title}
              </h2>
              <h3 className='font-thin italic'>
                {data?.copyright}
              </h3>
              {/* <img src={Heart} alt="heart" className='relative ml-4' /> */}
              <div className='flex flex-col'>
                {/* Content excludng the Title */}
                {data?.explanation}
                <br></br>
                <br></br>
                <div className='badge badge-outline m-auto'>
                  {data?.date}
                </div>

              </div>
            </div>
          </div>
        ) : (
          // Will display in the event of no data from the api is being returned
          <h1>Loading...</h1>
        )}
      </section>
    </main>
  );
}
