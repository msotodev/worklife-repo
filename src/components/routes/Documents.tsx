import { useState } from "react";
import DocumentPanel from "../document/DocumentPanel";
import type { DocumentItemData, EditDocumentProps } from "../../types/document";
import { useDocuments } from "../../hooks/useDocuments";
import NewDocumentButton from "../common/buttons/NewDocumentButton";

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
        <section className="flex flex-col gap-4 p-4 min-h-full overflow-y-auto">
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
                        <NewDocumentButton noDocuments={documents.length}
                            addDocument={handleNew} />
                    </article>
                </>
            }
        </section>
    );
}


function BtnEditDocument({ id, title, sections, setDocument }: EditDocumentProps) {
    const handleClick = () => setDocument({ id, title, sections });

    return (
        <button className="flex flex-col gap-2 justify-between items-start bg-white p-5 w-40 h-52 shadow-md hover:[color:var(--color-primary)]"
            onClick={handleClick}>
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span>{`${title} ${id}`}</span>
        </button>
    );
}