import { createContext, FC, ReactNode, useContext } from 'react'

interface ToggleState {
  column: number
  sort: string
}

interface TableProviderValue {
  onToggleSort: (column: number) => void
  toggleSort: ToggleState
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

  if (context === undefined) {
    throw new Error('useTableContext must be within a TableProvider')
  }

  return context
}

export { TableProvider, useTableContext }
