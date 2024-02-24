import Heart from '@/public/heart-48.png'
import Image from 'next/image'

export default async function Home() {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.API_KEY);
  const data = await response.json()

  return (
    <main className="">
      <section className=' w-4/5 m-auto mt-10 rounded-xl border-gray-400 border-4'>
        {/* Outline around the card and header */}

        <h1 className='text-center text-white font-semibold text-3xl my-5'>
          Latest News
        </h1>
        {data ? (
          <div key={data.id} className="flex flex-col w-3/4 m-auto rounded-2xl card " >
            {/* Card */}
            <figure>
              {/* Picture */}
              <Image src={data.url} alt={data.title} width={900} height={750} />
            </figure>
            <div className="flex flex-col justify-start card-body">
              {/* Content of the Post */}
              <h2 className="text-2xl text-white card-title text-left">
                {data.title}
              </h2>
              {/* <img src={Heart} alt="heart" className='relative ml-4' /> */}
              <div className='flex flex-col'>
                {/* Content excludng the Title */}
                {data.explanation}
                <br></br>
                <br></br>
                <div className='badge badge-outline m-auto'>
                  {data.date}
                </div>

              </div>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </main>
  );
}
