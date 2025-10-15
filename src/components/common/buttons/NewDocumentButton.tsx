import type { NewDocumentProps } from "../../../types/document";

export default function NewDocumentButton(
    { addDocument, noDocuments }: NewDocumentProps
) {
    const handleClick = () => addDocument(
        { id: noDocuments + 1, title: "New", sections: [] }
    );

    return (
        <button className="flex flex-col gap-2 justify-center items-center p-5 w-40 h-52 shadow-md hover:[color:var(--color-primary)]"
            onClick={handleClick}>
            <span className="material-symbols-outlined text-5xl">list_alt_add</span>
            <span>New document</span>
        </button>
    );
}