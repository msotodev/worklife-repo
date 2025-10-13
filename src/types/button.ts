export interface ButtonProps {
    title: string;
    type: "submit" | "reset" | "button" | undefined;
    iconName?: string;
    className?: string;
    colorType: "primary" | "primary-outline";
    onClick?: () => void;
}