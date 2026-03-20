"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
    isCatalogModalOpen: boolean;
    openCatalogModal: () => void;
    closeCatalogModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

    const openCatalogModal = () => setIsCatalogModalOpen(true);
    const closeCatalogModal = () => setIsCatalogModalOpen(false);

    return (
        <ModalContext.Provider value={{ isCatalogModalOpen, openCatalogModal, closeCatalogModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
