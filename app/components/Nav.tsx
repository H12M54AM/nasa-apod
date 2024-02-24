import Image from "next/image"
// import './../public/nasa-logo.svg' 
import nasa_logo from '@/public/nasa-logo.svg'
import Link from "next/link"

export default function Nav() {
    return (
        <>
            <div className="navbar text-white w-5/6 m-auto flex justify-between ">
                <div className="navbar-start">
                    <div className="flex items-center">
                        <Image
                            src={nasa_logo}
                            height={80}
                            width={80}
                            alt="Nasa Logo"
                            className="relative"
                        />

                        <Link className="text-red-500 font-semibold" href={"/"}>Astronomy Picture of the Day</Link>
                    </div>
                </div>
                <div className="navbar-end  ">
                    <Link className="mx-5 ease-in-out duration-150 btn hover:btn-primary" href={"/about"} >About</Link>
                    <Link className="mx-5 ease-in-out duration-150 btn hover:btn-primary" href={"/disclaimer"} >Disclaimer!</Link>
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </>
    )
}