import FormDocument from "../sections/FormDocument";

export default function Documents() {
    return (
        <section id="documents" className="section">
            <h3>Documents</h3>
            <article id="all-documents" className="all-documents">
                <article id="btn-new-document" className="new-document">
                    <span className="material-symbols-outlined">list_alt_add</span>
                    <span>New document</span>
                </article>
            </article>

            <FormDocument />
        </section>
    );
}