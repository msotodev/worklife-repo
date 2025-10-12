export interface DocumentItemData {
    id: number;
    title: string;
}

export interface DocumentItemProps extends DocumentItemData {
    setDocument: (item: DocumentItemData) => void;
}