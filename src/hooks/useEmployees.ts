import { useCallback, useState } from "react"
import { Employee } from "../utils/types"
import { useCustomFetch } from "./useCustomFetch"
import { useWrappedRequest } from "./useWrappedRequest"
import { EmployeeResult } from "./types"

export function useEmployees(): EmployeeResult {
  const { customFetch } = useCustomFetch()
  const { loading, wrappedRequest } = useWrappedRequest()
  const [employees, setEmployees] = useState<Employee[] | null>(null)

  const fetchAll = useCallback(
    () =>
      wrappedRequest(async () => {
        const employeesData = await customFetch<Employee[]>("employees")
        setEmployees(employeesData)
      }),
    [customFetch, wrappedRequest]
  )

  const invalidateData = useCallback(() => {
    setEmployees(null)
  }, [])

  return { data: employees, loading, fetchAll, invalidateData }
}
