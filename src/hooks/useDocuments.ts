import type { DocumentItemData } from "../types/document";
import { useLocalStorage } from "./useLocalStorage";

export function useDocuments() {
  const [documents, setDocuments, clearDocuments] = useLocalStorage<DocumentItemData[]>(
    "documents",
    []
  );

  const addDocument = (doc: DocumentItemData) => setDocuments([...documents, doc]);

  const removeDocument = (index: number) =>
    setDocuments(documents.filter((_, i) => i !== index));

  return { documents, addDocument, removeDocument, clearDocuments };
}