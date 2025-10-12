import type { DocumentItemProps } from "../../types/document";

export default function FormDocument({id, title} : DocumentItemProps) {
    return (
        <article id="new-document">
            <h4>{`${title} ${id}`}</h4>

            <form id="form-new-document" className="form-new-document">
                <input type="hidden" name="documentId" id="document-id" value="1" />
            </form>
        </article>
    );
}