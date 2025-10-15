import type { ButtonProps } from "../../../types/button";
import Icon from "../Icon";

export default function Button(
    { title, type, iconName, className, colorType, onClick }: ButtonProps
) {
    className ??= "";
    className += " px-2 py-1 rounded-sm cursor-pointer flex items-center justify-center";
    className += iconName ? " gap-2" : "";
    className += colorType ? " " + getColorClass(colorType) : "";

    return (
        <button type={type}
            className={className}
            onClick={onClick}>
            <Icon className="text-[18px]" iconName={iconName} />
            {
                title &&
                <span>{title}</span>
            }
        </button>
    );
}

function getColorClass(colorType: "primary" | "primary-outline" | "light") {
    switch (colorType) {
        case "light": return "bg-gray-100 shadow-sm text-pink-800 hover:bg-gray-200";
        case "primary": return "bg-pink-800 text-white hover:bg-pink-900";
        case "primary-outline": return "bg-alice-blue text-pink-800 border border-pink-800 hover:bg-gray-100";
        default: return "bg-pink-800 hover:bg-pink-900 text-white hover:bg-pink-900]";
    }
}