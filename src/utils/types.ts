export type Transaction = {
  id: string
  amount: number
  employee: Employee
  merchant: string
  date: string
  approved: boolean
}

export type Employee = {
  id: string
  firstName: string
  lastName: string
}

export type PaginatedResponse<TData> = {
  data: TData
  nextPage: number | null
}

export type SuccessResponse = {
  success: boolean
}

export type PaginatedRequestParams = {
  page: number | null
}

export type RequestByEmployeeParams = {
  employeeId: string
}

export type SetTransactionApprovalParams = {
  transactionId: string
  value: boolean
}
