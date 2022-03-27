import { createContext, FC, ReactNode, useContext } from 'react'

interface SortState {
  sortBy: string
  sortDirection: string
}

interface TableProviderValue {
  onToggleSort: (field: string, isSameColumn: boolean) => void
  sortState: SortState
}

const TableContext = createContext<TableProviderValue | undefined>(undefined)

interface TableProviderProps {
  children: ReactNode
  value: TableProviderValue
}

const TableProvider: FC<TableProviderProps> = ({ children, value }) => {
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

const useTableContext = () => {
  const context = useContext(TableContext)

  /* istanbul ignore next */
  if (context === undefined) {
    throw new Error('useTableContext must be within a TableProvider')
  }

  return context
}

export { TableProvider, useTableContext }
