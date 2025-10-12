export default function FormSection() {
    return (
        <article id="new-section" className="new-section">
            <h4>New Section</h4>
            <p>This is a form to create a new section</p>

            <form id="form-new-section" className="form-new-section">
                <input type="hidden" name="sectionId" id="section-id" value="1" />

                <div className="form-control">
                    <label htmlFor="section-type">Type</label>
                    <select name="sectionType" id="section-type">
                        <option value="-1">Select the type</option>
                        <option value="introduction">Introduction</option>
                        <option value="work-experience">Work Experience</option>
                        <option value="education">Education</option>
                        <option value="soft-skills">Soft Skills</option>
                        <option value="hard-skills">Hard Skills</option>
                    </select>
                </div>

                <div id="form-role" className="form-control hide">
                    <label htmlFor="role">Role</label>
                    <input type="text" id="role" name="role" />
                </div>

                <div id="form-duration" className="form-control hide">
                    <label htmlFor="duration">Duration</label>
                    <input type="date" id="duration" name="duration" />
                </div>

                <div id="form-current" className="form-control hide">
                    <label htmlFor="current">Curent</label>
                    <input type="checkbox" id="current" name="current" />
                </div>

                <div id="form-description" className="form-control hide">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" cols={100} rows={20}></textarea>
                </div>

                <button id="btn-add-section" type="submit" className="btn">Add Section</button>
            </form>
        </article>
    );
}