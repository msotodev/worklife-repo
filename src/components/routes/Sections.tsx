import FormSection from "../sections/FormSection";

export default function Sections() {
    return (
        <section id="sections" className="flex flex-col gap-[20px]">
            <h3 className="flex-row-between">
                Sections

                <button id="btn-new-section" className="btn">
                    <span className="material-symbols-outlined">assignment_add</span>
                    <span>New section</span>
                </button>
            </h3>
            <article id="all-sections" className="all-sections"></article>
            
            <FormSection />
        </section>
    );
}