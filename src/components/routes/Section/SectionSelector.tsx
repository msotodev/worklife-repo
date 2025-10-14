import { useState } from "react";
import type { SectionSelectorProps } from "../../../types/section";
import Button from "../../common/buttons/Button";
import { useSections } from "../../../hooks/useSections";

export default function SectionSelector({ document, onSelect }: SectionSelectorProps) {
    const { sections } = useSections();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <Button title="Add Section"
                colorType="primary"
                type="button"
                onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <ul className="absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg p-2 z-10">
                    {sections.map((section, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                onSelect(document.id, section);
                                setIsOpen(false);
                            }}
                            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                        >
                            <strong className="capitalize">{section.type}</strong>
                            <p className="text-xs text-gray-500">{section.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}