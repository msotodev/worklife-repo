import type { SectionItemData } from "../../../types/section";

export default function SectionItem(
    { section }: { section: SectionItemData }
) {
    return (
        <article className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <h4 className="font-semibold capitalize">{section.type}</h4>
            {section.role && <p className="text-sm text-gray-600">{section.role}</p>}
            {section.description && (
                <p className="text-xs text-gray-500 mt-1">{section.description}</p>
            )}
        </article>
    );
}