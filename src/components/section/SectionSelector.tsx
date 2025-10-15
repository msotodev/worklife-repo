import { useState } from "react";
import { useSections } from "../../hooks/useSections";
import type { SectionItemData, SectionSelectorProps } from "../../types/section";
import Button from "../common/buttons/Button";
import SectionItem from "./SectionItem";

export default function SectionSelector({ document, onSelect }: SectionSelectorProps) {
    const { sections } = useSections();
    const [isOpen, setIsOpen] = useState(false);

    const handleSectionClick = (section: SectionItemData) => {
        onSelect(document.id, section);
        setIsOpen(false);
    }

    return (
        <div className="relative">
            <Button title="Add Section"
                colorType="primary"
                type="button"
                onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <ul className="absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg p-2 z-10 overflow-y-auto max-h-80">
                    {sections.map((section, index) => (
                        <li key={index} onClick={() => handleSectionClick(section)}>
                            <SectionItem section={section} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}