import type { ButtonProps } from "../../../types/button";

export default function Button(
    { title, type, iconName, className, colorType, onClick }: ButtonProps
) {
    className ??= "";
    className += " px-4 py-2 rounded-[4px] text-white cursor-pointer flex items-center justify-center";
    className += iconName != undefined ? " gap-2" : "";
    className += colorType != undefined ? " " + getColorClass(colorType) : "";

    return (
        <button type={type}
                className={className}
                onClick={onClick}>
            <span className="material-symbols-outlined text-[18px]">{iconName}</span>
            <span>{title}</span>
        </button>
    );
}

function getColorClass(colorType: "primary" | "primary-outline"){
    switch(colorType) {
        case "primary": return "bg-[var(--color-primary)] hover:[background-color:var(--color-primary-dark)]";
        case "primary-outline": return "bg-[var(--color-alice-blue)] text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-light-hover)]";
        default: return "bg-[var(--color-primary)] hover:[background-color:var(--color-primary-dark)]";
    }
}