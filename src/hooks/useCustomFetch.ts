import { useCallback, useContext } from "react"
import { AppContext } from "../utils/context"
import { fakeFetch, RegisteredEndpoints } from "../utils/fetch"

export function useCustomFetch() {
  const { cache } = useContext(AppContext)

  const customFetch = useCallback(
    async <TData, TParams extends object = object>(
      endpoint: RegisteredEndpoints,
      params?: TParams
    ): Promise<TData> => {
      const cacheKey = JSON.stringify({ endpoint, params })
      const cacheResponse = cache?.current.get(cacheKey)

      if (cacheResponse) {
        const data = JSON.parse(cacheResponse)
        return data as Promise<TData>
      }

      const result = await fakeFetch<TData>(endpoint, params)
      cache?.current.set(cacheKey, JSON.stringify(result))
      return result
    },
    [cache]
  )

  const clearCache = useCallback(() => {
    if (cache?.current) {
      cache.current = new Map<string, string>()
    }
  }, [cache])

  return { customFetch, clearCache }
}
