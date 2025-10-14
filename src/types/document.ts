import type { SectionItemData } from "./section";

export interface DocumentItemData {
    id: number;
    title: string;
    sections: SectionItemData[];
}

export interface DocumentItemProps extends DocumentItemData {
    setDocument: (item: DocumentItemData) => void;
    onAddSection: (documentId: number, section: SectionItemData) => void;
    onReorder: (documentId: number, newOrder: SectionItemData[]) => void;
}

export interface EditDocumentProps extends DocumentItemData {
    setDocument: (item: DocumentItemData) => void;
}

export interface NewDocumentProps {
    noDocuments: number;
    addDocument: (doc: DocumentItemData) => void;
}

export interface DocumentPanelProps {
    document: DocumentItemData;
    onAddSection: (documentId: number, section: SectionItemData) => void;
    onReorder: (documentId: number, newOrder: SectionItemData[]) => void;
    setIsNew: (isNew: boolean) => void;
}

export const DEFAULT_DOCUMENT: DocumentItemData = {
    id: -1,
    title: "New",
    sections: []
};