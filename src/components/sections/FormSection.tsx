import { useEffect, useState } from "react";
import { DEFAULT_SECTION, type SectionItemData, type SectionItemProps } from "../../types/section";
import Button from "../common/buttons/Button";
import FormControl from "../common/forms/FormControl";

export default function FormSection(
    { section, addSection, setSection }: SectionItemProps
) {
    const [formData, setFormData] = useState<SectionItemData>(section);

    // sincronizar si cambian los props
    useEffect(() => {
        setFormData(section);
    }, [section]);

    const handleTypeChange = (value: string) => {
        const updated = { ...formData, type: value };
        setFormData(updated);
        if (setSection) setSection(updated);
    };

    const handleRoleChange = (value: string) => {
        const updated = { ...formData, role: value };
        setFormData(updated);
        if (setSection) setSection(updated);
    };

    const handleDescriptionChange = (value: string) => {
        const updated = { ...formData, description: value };
        setFormData(updated);
        if (setSection) setSection(updated);
    };

    const handleDurationChange = (value: string) => {
        const updated = { ...formData, duration: new Date(value) };
        setFormData(updated);
        if (setSection) setSection(updated);
    };

    const handleCurrentChange = (checked: boolean) => {
        const updated = { ...formData, current: checked };
        setFormData(updated);
        if (setSection) setSection(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (addSection) {
            addSection({
                ...formData,
                duration: formData.duration ? new Date(formData.duration) : undefined,
            });

            setFormData(section);
        }
    };

    const handleCancel = () => {
        if (setSection) {
            setSection(DEFAULT_SECTION);
        }
    };

    return (
        <article className="flex flex-col gap-4 max-w-[400px]">
            <h3>
                Sections / {section.id > 0 ? "Edit" : "New"}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <FormControl>
                    <label>Type</label>
                    <select name="type" value={formData.type}
                        onChange={e => handleTypeChange(e.target.value)}>
                        <option value="">Select the type</option>
                        <option value="introduction">Introduction</option>
                        <option value="work-experience">Work Experience</option>
                        <option value="education">Education</option>
                        <option value="soft-skills">Soft Skills</option>
                        <option value="hard-skills">Hard Skills</option>
                    </select>
                </FormControl>
                {
                    formData.type != "" &&
                    <>
                        {
                            formData.type == "work-experience" &&
                            <>
                                <FormControl>
                                    <label>Role</label>
                                    <input name="role" type="text"
                                        value={formData.role} onChange={e => handleRoleChange(e.target.value)} />
                                </FormControl>
                                <FormControl>
                                    <label>Duration</label>
                                    <input name="duration" type="date"
                                        value={formData.duration ? formData.duration.toISOString().slice(0, 10) : ""}
                                        onChange={e => handleDurationChange(e.target.value)} />
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="current">Curent</label>
                                    <input id="current" name="current" type="checkbox"
                                        checked={formData.current}
                                        onChange={e => handleCurrentChange(e.target.checked)} />
                                </FormControl>
                            </>
                        }
                        <FormControl>
                            <label>Description</label>
                            <textarea name="description" rows={10}
                                value={formData.description}
                                onChange={e => handleDescriptionChange(e.target.value)}></textarea>
                        </FormControl>
                    </>
                }
                <div className="flex gap-1">
                    <Button type="button" title="Cancel" colorType="primary-outline" onClick={handleCancel} />
                    <Button type="submit" title="Save section" colorType="primary" />
                </div>
            </form>
        </article>
    );
}