import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData(careersLoader)

    return (
        <div>
            {careers.map(career => (
                <div className="careers">
                    <Link to={career.id.toString()} key={career.id}>
                        <p>{career.title}</p>
                        <p>Based on{career.location}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export const  careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    return res.json()
}