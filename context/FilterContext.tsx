import { todoType } from "@/type/interface";
import { createContext, useContext, useState } from "react";

export type filterContextType = {
  filterList: todoType[];
  setFilterList: React.Dispatch<React.SetStateAction<todoType[] | []>>;
};

interface childrenProp {
  children: React.ReactNode;
}

export const FilterContext = createContext<filterContextType>(
  {} as filterContextType
);

const FilterContextProvider: React.FC<childrenProp> = ({ children }) => {
  const [filterList, setFilterList] = useState<todoType[] | []>([]);
  return (
    <FilterContext.Provider value={{ filterList, setFilterList }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

export const useFilterProvider = () => useContext(FilterContext);
