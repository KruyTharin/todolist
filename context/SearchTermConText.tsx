import { createContext, useContext, useState } from "react";

export type searchTermContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

interface childrenProp {
  children: React.ReactNode;
}

export const SearchTermContext = createContext<searchTermContextType>(
  {} as searchTermContextType
);

const SearchTermContextProvider: React.FC<childrenProp> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;

export const useSearchTermContextProvider = () => useContext(SearchTermContext);
