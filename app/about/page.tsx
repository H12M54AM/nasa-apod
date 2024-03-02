import { Metadata } from "next"

export const metadata: Metadata = {
    title: "APOD Redesign - About",
    description: "Discover the story behind our space-centric platform leveraging NASA's APOD API. Learn how we bring the marvels of space to your screen, blending design excellence with astronomical insights. Dive into our mission to enhance user experience and showcase the beauty of the cosmos.",
    keywords: "Space website background, NASA APOD API integration, design excellence, astronomical insights, user experience enhancement.",
    openGraph: {
        title: "APOD Redesign - About",
        description: "Discover the story behind our space-centric platform leveraging NASA's APOD API. Learn how we bring the marvels of space to your screen, blending design excellence with astronomical insights. Dive into our mission to enhance user experience and showcase the beauty of the cosmos.",
        url: "https://apod.edwardcreates.ca/about",
        type: "website"
    }
}

export default function About() {
    return (
        <main className="h-screen">
            <h1 className='text-center text-white font-semibold text-3xl my-5'>
                About Comming Soon...
            </h1>
        </main>
    )
}