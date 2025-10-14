import type { DocumentItemProps } from "../../types/document";

export default function FormDocument({ title }: DocumentItemProps) {
    return (
        <article>
            <input type="text" value={title} />

            <form id="form-new-document" className="form-new-document">
                <input type="hidden" name="documentId" value="1" />
            </form>
        </article>
    );
}