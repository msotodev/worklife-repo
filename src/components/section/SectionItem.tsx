import type { SectionItemProps } from "../../types/section";
import Button from "../common/buttons/Button";

export default function SectionItem(
    { removeSection, section, setSection }: SectionItemProps
) {
    const handleSelectedClick = () => {
        if (setSection) {
            setSection(section);
        }
    };

    const handleRemoveClick = () => {
        if (removeSection) {
            removeSection(section.id);
        }
    };

    return (
        <article className="flex flex-col gap-4 p-3 shadow-sm bg-gray-50 hover:bg-gray-100 transition">
            <div className="flex justify-between items-center">
                <h4 className="font-semibold capitalize">{section.type}</h4>
                <div className="flex gap-1">
                    {
                        removeSection &&
                        <Button iconName="edit_note"
                            colorType="light"
                            onClick={handleSelectedClick} />
                    }
                    {
                        removeSection &&
                        <Button iconName="delete_forever"
                            colorType="light"
                            onClick={handleRemoveClick} />
                    }
                </div>
            </div>
            {section.description && (
                <p className="text-xs text-gray-500 mt-1">{section.description}</p>
            )}
        </article>
    );
}