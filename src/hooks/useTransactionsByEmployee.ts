import { useCallback, useState } from "react"
import { RequestByEmployeeParams, Transaction } from "../utils/types"
import { TransactionsByEmployeeResult } from "./types"
import { useCustomFetch } from "./useCustomFetch"
import { useWrappedRequest } from "./useWrappedRequest"

export function useTransactionsByEmployee(): TransactionsByEmployeeResult {
  const { customFetch } = useCustomFetch()
  const { loading, wrappedRequest } = useWrappedRequest()
  const [transactionsByEmployee, setTransactionsByEmployee] = useState<Transaction[] | null>(null)

  const fetchById = useCallback(
    (employeeId: string) =>
      wrappedRequest(async () => {
        const data = await customFetch<Transaction[], RequestByEmployeeParams>(
          "transactionsByEmployee",
          {
            employeeId,
          }
        )

        setTransactionsByEmployee(data)
      }),
    [customFetch, wrappedRequest]
  )

  const invalidateData = useCallback(() => {
    setTransactionsByEmployee(null)
  }, [])

  return { data: transactionsByEmployee, loading, fetchById, invalidateData }
}
