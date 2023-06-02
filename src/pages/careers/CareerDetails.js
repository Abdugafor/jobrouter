import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()

    return (
        <div>
           <h2>Career about {career.title}</h2>
           <p>Job salary: {career.salary}</p>
           <p>Country: {career.location}</p>
        </div>
    )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/careers' + id)

    return res.json()
}