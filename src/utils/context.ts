import { createContext } from "react"

export const AppContext = createContext<AppContextProps>({ setError: () => {} })

type AppContextProps = {
  setError: (error: string) => void
  cache?: React.MutableRefObject<Map<string, string>>
}
