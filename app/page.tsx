import Heart from '@/public/heart-48.png'
import Image from 'next/image'

export default async function Home() {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key='+ process.env.API_KEY);
  const data = await response.json()

  return (
    <main className="box-border p-0 m-0 bg-black">
      <div id="latest__news">
        <h1 className='text-center text-white'>
          Latest News
        </h1>
        {data ? (
            <div key={data.id} className="flex flex-row" >
              <div className="flex flex-col m-auto bg-white">
                <div className="m-auto text-center bg-gray-600"><Image src={data.url} alt={data.title} width={100} height={50}/></div>
                <div className="flex flex-row justify-start">
                  <div className="ml-10"><h2>{data.title}</h2></div>
                  {/* <img src={Heart} alt="heart" className='relative ml-4' /> */}
                </div>
                <div className="p-1">
                  <div className="p-1">
                    {data.explaination}
                  </div>
                  {/* <div className="p-1">
                    {item.description}
                  </div> */}
                </div>
                <div className="mb-8 text-center">{data.date}</div>
              </div>
            </div>
        ) : (
          <h1>Loading...</h1>
        )}

      </div>
    </main>
  );
}
