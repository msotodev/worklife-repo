import { useState } from "react";
import { DEFAULT_SECTION, type SectionItemData } from "../../types/section";
import { useSections } from "../../hooks/useSections";
import FormSection from "../sections/FormSection";
import Button from "../common/buttons/Button";
import SectionItem from "../section/SectionItem";

export default function Sections() {
    const { sections, addSection, updateSection, removeSection } = useSections();
    const [section, setSection] = useState<SectionItemData>(DEFAULT_SECTION);

    const handleNewClick = () => setSection({ id: 0, description: "", type: "" });

    const handleSubmit = (item: SectionItemData) => {
        if (item.id == 0) {
            item.id = sections.length + 1;
            addSection(item);
        }
        else {
            updateSection(item);
        }

        setSection(DEFAULT_SECTION);
    };

    return (
        <section className="flex flex-col gap-4 p-4">
            {section.id >= 0
                ? <FormSection section={section}
                    addSection={handleSubmit}
                    setSection={setSection} />
                : <>
                    <h3 className="flex justify-between items-center">
                        <span>Sections</span>
                        <Button type="button"
                            title="New section"
                            colorType="primary"
                            iconName="assignment_add"
                            onClick={handleNewClick} />
                    </h3>
                    <ul className="flex flex-col gap-2">
                        {sections.map(item => (
                            <li key={item.id}>
                                <SectionItem section={item}
                                    setSection={setSection}
                                    removeSection={removeSection} />
                            </li>
                        ))}
                    </ul>
                </>
            }
        </section>
    );
}