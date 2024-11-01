import React, { createContext, useState, ReactNode } from "react";
import { IHierarchy } from "../components/TreeView";

export interface AppContextType {
  tree: Array<IHierarchy>;
  setTree: (newTree: Array<IHierarchy>) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tree, setTree] = useState<Array<IHierarchy>>([]);

  return (
    <AppContext.Provider value={{ tree, setTree }}>
      {children}
    </AppContext.Provider>
  );
};
