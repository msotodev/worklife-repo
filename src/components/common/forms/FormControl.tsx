import type { FormControlProps } from "../../../types/form";

export default function FormControl(
    { children } : FormControlProps
) {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    );
}