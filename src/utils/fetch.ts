import {
  getEmployees,
  getTransactionsPaginated,
  getTransactionsByEmployee,
  setTransactionApproval,
} from "./requests"
import { PaginatedRequestParams, RequestByEmployeeParams, SetTransactionApprovalParams } from "./types"

const timeout = getTimeout()
const mockTimeout = 1 * timeout

export function fakeFetch<TData, TParams extends object = object>(
  endpoint: RegisteredEndpoints,
  params?: TParams
): Promise<TData> {
  return new Promise((resolve, reject) => {
    mockApiLogger({
      message: "Loading request",
      data: { endpoint, params },
      type: "info",
    })

    let result: TData

    try {
      switch (endpoint) {
        case "employees":
          result = getEmployees() as unknown as TData

          setTimeout(() => {
            mockApiLogger({ data: { endpoint, params, result } })
            resolve(result)
          }, mockTimeout)
          break

        case "paginatedTransactions":
          result = getTransactionsPaginated(params as PaginatedRequestParams) as unknown as TData

          setTimeout(() => {
            mockApiLogger({ data: { endpoint, params, result } })
            resolve(result)
          }, mockTimeout * 2.5)
          break

        case "transactionsByEmployee":
          result = getTransactionsByEmployee(params as RequestByEmployeeParams) as unknown as TData

          setTimeout(() => {
            mockApiLogger({ data: { endpoint, params, result } })
            resolve(result)
          }, mockTimeout * 1.5)
          break

        case "setTransactionApproval":
          result = setTransactionApproval(params as SetTransactionApprovalParams) as unknown as TData

          mockApiLogger({ data: { endpoint, params, result } })
          resolve(result)
          break

        default:
          throw new Error("Invalid endpoint")
      }
    } catch (error) {
      if (error instanceof Error) {
        mockApiLogger({
          message: error.message,
          data: { endpoint, params },
          type: "error",
        })
        reject(error.message)
      }
    }
  })
}

function mockApiLogger({
  data,
  message = "Success request",
  type = "success",
}: {
  message?: string
  data: object
  type?: "success" | "error" | "info"
}) {
  if (process.env.REACT_APP_MOCK_REQUEST_LOGS_ENABLED === "false") {
    return
  }

  console.log(`%c--Fake Request Debugger-- %c${message}`, "color: #717171", getTitleColor())
  console.log(data)

  function getTitleColor() {
    if (type === "error") {
      return "color: #d93e3e;"
    }

    if (type === "info") {
      return "color: #1670d2;"
    }

    return "color: #548a54;"
  }
}

function getTimeout() {
  const timeout = parseInt(
    new URL(document.location as unknown as URL).searchParams.get("timeout") ??
      process.env.REACT_APP_TIMEOUT_MULTIPLIER ??
      "1000"
  )

  if (Number.isNaN(timeout)) {
    return 1000
  }

  return timeout
}

export type RegisteredEndpoints =
  | "employees"
  | "paginatedTransactions"
  | "transactionsByEmployee"
  | "setTransactionApproval"
