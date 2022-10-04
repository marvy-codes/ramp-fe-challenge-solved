import { useCallback, useContext, useState } from "react"
import { AppContext } from "../utils/context"

export function useWrappedRequest() {
  const [loading, setLoading] = useState(false)
  const { setError } = useContext(AppContext)

  const wrappedRequest = useCallback(
    async (promise: () => Promise<void>) => {
      try {
        setLoading(true)
        await promise()
      } catch (error) {
        setError(error as string)
      } finally {
        setLoading(false)
      }
    },
    [setError]
  )

  return { loading, wrappedRequest }
}
