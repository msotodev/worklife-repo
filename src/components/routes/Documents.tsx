import { useState } from "react";
import { useDocuments } from "../../hooks/useDocuments";
import type { DocumentItemData, DocumentItemProps } from "../../types/document";
import FormDocument from "../sections/FormDocument";

export default function Documents() {
    const { documents, addDocument, } = useDocuments();
    const [document, setDocument] = useState<DocumentItemData>({ id: 0, title: "New" });

    return (
        <section className="flex flex-col gap-[20px]">
            {document.id > 0
                ? <FormDocument id={document.id} title={document.title} setDocument={setDocument} />
                : <>
                    <h3>Documents</h3>
                    <article className="flex gap-[10px] flex-wrap">
                        {documents.map(item => (
                            <BtnEditDocument key={item.id} {...item} setDocument={setDocument} />
                        ))}
                        <BtnNewDocument documents={documents} addDocument={addDocument} />
                    </article>
                </>
            }
        </section>
    );
}

function BtnNewDocument({ addDocument, documents }: { addDocument: (doc: any) => void; documents: any[] }) {
    const handleClick = () => addDocument({ id: documents.length + 1, title: "New document" })

    return (
        <button className="flex flex-col gap-2 justify-center items-center p-[20px] w-[150px] h-[200px] shadow-[0_2px_4px_var(--color-light-hover)] hover:[color:var(--color-primary)]"
            onClick={handleClick}>
            <span className="material-symbols-outlined text-5xl">list_alt_add</span>
            <span>New document</span>
        </button>
    );
}

function BtnEditDocument({ id, title, setDocument }: DocumentItemProps) {
    const handleClick = () => setDocument({id, title});

    return (
        <button className="flex flex-col gap-2 justify-between items-start p-[20px] w-[150px] h-[200px] shadow-[0_2px_4px_var(--color-light-hover)] hover:[color:var(--color-primary)]"
            onClick={handleClick}>
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span>{`${title} ${id}`}</span>
        </button>
    );
}