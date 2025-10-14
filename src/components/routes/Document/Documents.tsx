import { useState } from "react";
import { useDocuments } from "../../../hooks/useDocuments";
import { type DocumentItemData, type EditDocumentProps, type NewDocumentProps } from "../../../types/document";
import DocumentPanel from "./DocumentPanel";

export default function Documents() {
    const { selectedDocument, setSelectedDocument, documents, addDocument, addSection, reorderSections } = useDocuments();
    const [isNew, setIsNew] = useState(true);

    const handleNew = (document: DocumentItemData) => {
        setIsNew(true);
        addDocument(document);
    }

    const handleEdit = (document: DocumentItemData) => {
        setIsNew(false);
        setSelectedDocument(document);
    }

    return (
        <section className="flex flex-col gap-[20px]">
            {!isNew
                ?
                <DocumentPanel document={selectedDocument}
                    onAddSection={addSection}
                    onReorder={reorderSections}
                    setIsNew={setIsNew} />
                : <>
                    <h3>Documents</h3>
                    <article className="flex gap-[10px] flex-wrap">
                        {documents.map(item => (
                            <BtnEditDocument key={item.id} {...item}
                                setDocument={handleEdit}
                                sections={item.sections} />
                        ))}
                        <BtnNewDocument noDocuments={documents.length}
                            addDocument={handleNew} />
                    </article>
                </>
            }
        </section>
    );
}

function BtnNewDocument({ addDocument, noDocuments }: NewDocumentProps) {
    const handleClick = () => addDocument(
        { id: noDocuments + 1, title: "New", sections: [] }
    );

    return (
        <button className="flex flex-col gap-2 justify-center items-center p-[20px] w-[150px] h-[200px] shadow-[0_2px_4px_var(--color-light-hover)] hover:[color:var(--color-primary)]"
            onClick={handleClick}>
            <span className="material-symbols-outlined text-5xl">list_alt_add</span>
            <span>New document</span>
        </button>
    );
}

function BtnEditDocument({ id, title, sections, setDocument }: EditDocumentProps) {
    const handleClick = () => setDocument({ id, title, sections });

    return (
        <button className="flex flex-col gap-2 justify-between items-start bg-white p-[20px] w-[150px] h-[200px] shadow-[0_2px_4px_var(--color-light-hover)] hover:[color:var(--color-primary)]"
            onClick={handleClick}>
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span>{`${title} ${id}`}</span>
        </button>
    );
}