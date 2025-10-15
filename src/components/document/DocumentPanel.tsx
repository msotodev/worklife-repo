import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { DocumentPanelProps, SortableSectionProps } from "../../types/document";
import Button from "../common/buttons/Button";
import SectionSelector from "../section/SectionSelector";
import SectionItem from "../section/SectionItem";

export default function DocumentPanel({ document, onAddSection, onReorder, setIsNew }: DocumentPanelProps) {
    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = document.sections.findIndex((_, index) => index === active.id);
        const newIndex = document.sections.findIndex((_, index) => index === over.id);
        console.log({ oldIndex, newIndex })
        onReorder(document.id, arrayMove(document.sections, oldIndex, newIndex));
    };

    const handleBack = () => setIsNew(true);

    return (
        <section className="p-4 bg-white shadow-sm">
            <header className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">{document.title}</h2>

                <Button title="Back to documents"
                    colorType="primary-outline"
                    type="button"
                    onClick={handleBack} />
            </header>

            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext
                    items={document.sections.map((_, index) => index)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="flex flex-col gap-3">
                        {document.sections.length > 0 ? (
                            document.sections.map((section, index) => (
                                <SortableSection key={index} section={section} index={index} />
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm text-center py-4">
                                No sections yet. Click “Add Section”.
                            </p>
                        )}

                        <div className="flex justify-center items-center">
                            <SectionSelector document={document} onSelect={onAddSection} />
                        </div>
                    </div>
                </SortableContext>
            </DndContext>
        </section>
    );
}

function SortableSection({ index, section }: SortableSectionProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: index });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <SectionItem section={section} />
        </div>
    );
}