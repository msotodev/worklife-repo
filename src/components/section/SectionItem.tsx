import type { SectionItemProps } from "../../types/section";

export default function SectionItem(
    { section, setSection }: SectionItemProps
) {
    const handleClick = () => {
        if (setSection) {
            setSection(section);
        }
    };

    return (
        <article className="p-3 bg-gray-50 hover:bg-gray-100 transition cursor-pointer" onClick={handleClick}>
            <h4 className="font-semibold capitalize">{section.type}</h4>
            {section.description && (
                <p className="text-xs text-gray-500 mt-1">{section.description}</p>
            )}
        </article>
    );
}