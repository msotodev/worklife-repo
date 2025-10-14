import type { DocumentItemData } from "./document";

export interface SectionItemData {
  id: number;
  type: string;
  role?: string;
  duration?: Date;
  current?: boolean;
  description: string;
}

export interface SectionItemProps extends SectionItemData {
  setSection?: (item: SectionItemData) => void;
  addSection?: (item: SectionItemData) => void;
}

export interface SectionSelectorProps {
  document: DocumentItemData;
  onSelect: (documentId: number, section: SectionItemData) => void;
}

export const DEFAULT_SECTION: SectionItemData = {
  id: -1,
  type: "",
  description: "",
  role: undefined,
  duration: undefined,
  current: false,
};