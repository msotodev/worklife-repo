import type { IconProps } from "../../types/icon";

export default function Icon(
    { className, iconName }: IconProps
) {
    className ??= "";
    className += " material-symbols-outlined"

    return (
        <span className={className}>{iconName}</span>
    )
}