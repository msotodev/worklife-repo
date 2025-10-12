import { NavLink, useLocation } from "react-router-dom";
import type { MenuItemProps } from "../../../types/menu";

export default function LeftNavigation() {
    return (
        <nav className="bg-[var(--color-primary)] text-[var(--color-alice-blue)] flex flex-col content-center mt-5 mb-5">
            <ul id="navigation" className="flex flex-col list-none mt-[35px]">
                <MenuItem title="Home"
                    route="/"
                    iconName="home" />

                <MenuItem title="Documents"
                    route="/documents"
                    iconName="work" />

                <MenuItem title="Sections"
                    route="/sections"
                    iconName="assignment" />

                <MenuItem title="Templates"
                    route="/templates"
                    iconName="note_stack" />
            </ul>
        </nav>
    );
}

function MenuItem(
    { title, route, iconName }: MenuItemProps
) {
    let className = `flex no-underline text-inherit py-[10px] px-[25px] gap-2 items-center hover:[background-color:var(--color-light-hover)]`;

    const location = useLocation();
    const isActive = location.pathname == route;

    className += isActive ? " bg-[var(--color-light-hover)]" : "";

    return (
        <li className="border-b-black/15 border-b-[1px]">
            <NavLink to={route} className={className}>
                <span className="material-symbols-outlined text-lg">{iconName}</span>
                <span>{title}</span>
            </NavLink>
        </li>
    )
}