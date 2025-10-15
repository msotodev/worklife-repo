import Icon from "../common/Icon";

export default function Home() {
    return (
        <section className="flex flex-col gap-8 p-4">
            <div className="flex gap-2 items-center">
                <h1><span className="font-semibold text-xl">Worklife</span> repo</h1>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Icon className="text-2xl text-pink-950" iconName="task_alt" />
                    <p className="text-sm text-gray-500 mt-1">
                        Choose, Drag, drop and create your next resume from a easy way
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Icon className="text-2xl text-pink-800" iconName="task_alt" />
                    <p className="text-sm text-gray-500 mt-1">
                        Make your owns templates and share with your friend
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Icon className="text-2xl text-pink-800" iconName="task_alt" />
                    <p className="text-sm text-gray-500 mt-1">
                        Disvover the eassier way to build and control of your resumes
                    </p>
                </div>
            </div>
            <div>
                <button className="flex flex-col gap-2 justify-center items-center p-5 w-40 h-52 shadow-md hover:[color:var(--color-primary)]">
                    <span className="material-symbols-outlined text-5xl">list_alt_add</span>
                    <span>New document</span>
                </button>
            </div>
        </section>
    );
}