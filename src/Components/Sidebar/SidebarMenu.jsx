import "./SidebarMenu.css"
import {Link} from 'react-router-dom'

export default function SidebarMenu() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/" className="sidebarLink">Form Generator</Link>
                        </li>
                        <li className="sidebarListItem">
                            Form
                        </li>
                        <li className="sidebarListItem">
                            List
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}