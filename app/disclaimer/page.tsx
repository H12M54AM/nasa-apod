import { Metadata } from "next";

export const metadata: Metadata = {
    title: "APOD Redesign - Disclaimer",
    description: "Delve into the legalities and disclosures of our space-themed website featuring NASA's APOD API. Understand our commitment to accuracy, data usage policies, and terms of service. Navigate through our disclaimer to ensure transparency and compliance in your cosmic exploration journey.",
    keywords: "Website legalities, data usage policies, terms of service, transparency commitment, compliance guidelines.",
    openGraph: {
        title: "APOD Redesign - Disclaimer",
        description: "Delve into the legalities and disclosures of our space-themed website featuring NASA's APOD API. Understand our commitment to accuracy, data usage policies, and terms of service. Navigate through our disclaimer to ensure transparency and compliance in your cosmic exploration journey.",
        url: "https://apod.edwardcreates.ca/disclaimer",
        type: "website"
    }
};

export default function Learnmore() {
    return (
        <main className="h-screen">
            <h1 className="text-white font-semibold text-4 text-center text-4xl my-5">Disclaimer</h1>

            <p className="w-2/4 m-auto text-lg">
                This is a personal project focused on recreating or
                solving ideas related to NASA&apos;s Astronomy Picture of 
                the Day in space. I want to clarify that there is no
                plagiarism involved in this project. All credits
                for the original idea of APOD go to NASA. Except the overall 
                design.

                This project is inspired by the incredible work done
                by NASA in exploring and sharing the wonders of space
                through their Picture of the Day program.
            </p>
        </main>
    )
}