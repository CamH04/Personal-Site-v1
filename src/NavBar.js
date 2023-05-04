import { Link } from "react-router-dom"
// a tags become Link
// href become to

export default function NavBar(){
    return <nav className="Nav">
        <p class="Logo">C/H</p>
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
}