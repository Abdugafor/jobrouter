import { Link } from "react-router-dom"

export function NotFound() {
    return (
        <div>
            <h2>Page Not found</h2>
            <p>Lorem fjsda i oifdoas ldklfj ioerrwjf jkdsfl;</p>

            <p>Go to the <Link to="/">Homepage</Link></p>
        </div>
    )
}