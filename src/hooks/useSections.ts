import type { SectionItemData } from "../types/section";
import { useLocalStorage } from "./useLocalStorage";

export function useSections(
  initialSections: SectionItemData[] = []
) {
  const [sections, setSections, clearSections] = useLocalStorage<SectionItemData[]>(
    "sections", initialSections
  );

  const addSection = (doc: SectionItemData) => setSections([...sections, doc]);

  const updateSection = (updated: SectionItemData) => {
    setSections(prev =>
      prev.map(sec => (sec.id === updated.id ? updated : sec))
    );
  };

  const reorderSections = (newOrder: SectionItemData[]) => {
    setSections(newOrder);
  };

  const removeSection = (id: number) =>
    setSections(sections.filter((item) => item.id !== id));

  return { sections, addSection, updateSection, reorderSections, removeSection, clearSections };
}