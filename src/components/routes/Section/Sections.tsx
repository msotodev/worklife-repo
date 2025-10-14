import { useState } from "react";
import { useSections } from "../../../hooks/useSections";
import { DEFAULT_SECTION, type SectionItemData, type SectionItemProps } from "../../../types/section";
import FormSection from "../../sections/FormSection";
import Button from "../../common/buttons/Button";

export default function Sections() {
    const { sections, addSection, updateSection } = useSections();
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
        <section className="flex flex-col gap-5">
            {section.id >= 0
                ? <FormSection description={section.description}
                    id={section.id}
                    type={section.type}
                    current={section.current}
                    duration={section.duration}
                    role={section.role}
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
                    <article className="flex flex-col gap-2">
                        {sections.map(item => (
                            <SectionItem key={item.id} {...item} setSection={setSection} />
                        ))}
                    </article>
                </>
            }
        </section>
    );
}

function SectionItem(
    { id, description, type, current, duration, role, setSection }: SectionItemProps
) {
    const handleClick = () => {
        if (setSection) {
            setSection({ id, description, type, current, duration, role });
        }
    };

    return (
        <article className="flex flex-col gap-2 bg-white p-2 cursor-pointer"
            onClick={handleClick}>
            <span className="text-[var(--color-primary)] capitalize">{`${type.replace('-', ' ')}`}</span>
            <span>{`[${id}] - ${description}`}</span>
        </article>
    );
}