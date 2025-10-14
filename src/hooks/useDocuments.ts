import { useState } from "react";
import { DEFAULT_DOCUMENT, type DocumentItemData } from "../types/document";
import type { SectionItemData } from "../types/section";
import { useLocalStorage } from "./useLocalStorage";

export function useDocuments() {
  const [documents, setDocuments, clearDocuments] = useLocalStorage<DocumentItemData[]>(
    "documents",
    []
  );

  const [selectedDocument, setSelectedDocument] = useState<DocumentItemData>(DEFAULT_DOCUMENT);

  const addDocument = (doc: DocumentItemData) => setDocuments(
    [...documents, doc]
  );

  const addSection = (documentId: number, section: SectionItemData) => {
    console.log({ documentId, section })
    setDocuments(prev =>
      prev.map(doc =>
        doc.id === documentId
          ? { ...doc, sections: [...doc.sections, { ...section, id: documentId }] }
          : doc
      )
    );

    if (selectedDocument?.id === documentId) {
      setSelectedDocument(prev => ({
        ...prev!,
        sections: [...(prev?.sections ?? []), section],
      }));
    }
  };

  const reorderSections = (documentId: number, newSections: SectionItemData[]) => {
    console.log(newSections)
    setDocuments(prev =>
      prev.map(doc =>
        doc.id === documentId ? { ...doc, sections: newSections } : doc
      )
    );

    if (selectedDocument?.id === documentId) {
      setSelectedDocument(prev => ({
        ...prev!,
        sections: newSections,
      }));
    }
  };

  const removeDocument = (index: number) =>
    setDocuments(documents.filter((_, i) => i !== index));

  return {
    selectedDocument,
    documents,
    addDocument,
    addSection,
    setSelectedDocument,
    reorderSections,
    removeDocument,
    clearDocuments
  };
}