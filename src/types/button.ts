export interface ButtonProps {
    title?: string;
    type?: "submit" | "reset" | "button";
    iconName?: string;
    className?: string;
    colorType?: "light" | "primary" | "primary-outline";
    onClick?: () => void;
}