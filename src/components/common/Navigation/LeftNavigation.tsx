import { NavLink } from "react-router-dom";

export default function LeftNavigation() {
    return (
        <nav className="side-nav">
            <ul id="navigation">
                <li>
                    <NavLink to="/">
                        <span className="material-symbols-outlined">home</span>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/documents">
                        <span className="material-symbols-outlined">work</span>
                        <span>Documents</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sections">
                        <span className="material-symbols-outlined">assignment</span>
                        <span>Sections</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/templates">
                        <span className="material-symbols-outlined">work</span>
                        <span>Templates</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}