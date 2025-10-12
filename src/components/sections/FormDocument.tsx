export default function FormDocument() {
    return (
        <article id="new-document">
            <h4>New document</h4>

            <form id="form-new-document" className="form-new-document">
                <input type="hidden" name="documentId" id="document-id" value="1" />
            </form>
        </article>
    );
}