import { Metadata } from "next";

export const metadata: Metadata = {
    title: "APOD Project - Disclaimer",
    description: "A place where you can view the Astronomy Picture of the Day",
    authors:
        [{
            name: "Edward Naidoo"
        }],
    keywords: "Space, Astronomy, Picture"
};

export default function Learnmore() {
    return (
        <main className="h-screen">
            <h1 className="text-white font-semibold text-4 text-center text-4xl my-5">Disclaimer</h1>

            <p className="w-2/4 m-auto text-lg">
                This is a personal project focused on recreating or
                solving ideas related to NASA's Astronomy Picture of 
                the Day in space. I want to clarify that there is no
                plagiarism involved in this project. All credits
                for the original content go to NASA.

                This project is inspired by the incredible work done
                by NASA in exploring and sharing the wonders of space
                through their Picture of the Day program.
            </p>
        </main>
    )
}