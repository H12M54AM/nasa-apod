import Link from "next/link"

type DEV = {
    type_of: string,
    id: number,
    username: string,
    name: string,
    twitter_username: string,
    github_username: string,
    summary: string,
    location: string,
    website_url: string,
    joined_at: string,
    profile_image: string
}

/**
 * 
 * @returns User profile info from Dev.to
 */
async function getProfile() {
    let res = await fetch(`https://dev.to/api/users/by_username?url=${process.env.DEV_ACCOUNT}`, {
        method: "GET"
    })
    const data = res.json()
    return data
}

export default async function About() {
    const account: DEV = await getProfile()
    return (
        <main className="h-screen">
            {account ? (
                <section id={account.id.toString()} className="flex items-center justify-center gap-3 my-5">
                    {/* Profile Picture */}
                    <div className="avatar">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={account.profile_image} />
                        </div>
                    </div>
                    <br />
                    <div className="w-2/4">
                        <h1 className=' text-white font-semibold text-3xl '>
                            {account.name}
                        </h1>
                        <Link href={account.website_url} target="blank" className="underline hover:no-underline">
                            {account.website_url}
                        </Link>
                        <p className=" my-3">
                            {account.summary}
                        </p>
                    </div>
                </section>
            ) : (
                <section>
                    Loading...
                </section>
            )}
        </main>
    )
}