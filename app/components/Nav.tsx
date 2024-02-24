import Image from "next/image"
// import './../public/nasa-logo.svg' 
import nasa_logo from '@/public/nasa-logo.svg'
import Link from "next/link"

export default function Nav() {
    return (
        <>
            {/* <header>
                <div className="p-8 flex h-16 justify-between text-white">
                    <div className="flex relative">
                        <Image
                            src={nasa_logo}
                            height={50}
                            width={50}
                            alt="Nasa Logo"
                            className="relative"
                        />
                        <h3>Astronomy Picture of the Day</h3>
                    </div>
                    <div className="flex flex-row">
                        <div className="no-underline text-white text-xl relative">
                            <ul><li><a href="#">Home</a></li></ul>
                            <ul><li><a href="#latest__news">News</a></li></ul>
                        </div>
                    </div>
                </div>
            </header> */}

            <div className="navbar text-white w-5/6 m-auto">
                <div className="navbar-start">
                    <div className="flex relative">
                        <Image
                            src={nasa_logo}
                            height={50}
                            width={50}
                            alt="Nasa Logo"
                            className="relative"
                        />
                        <h1>Astronomy Picture of the Day</h1>
                    </div>
                    <div className="">

                        <Link href={"/about"} >About</Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    )
}