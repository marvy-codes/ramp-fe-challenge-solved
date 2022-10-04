import { FunctionComponent } from "react"
import { Transaction } from "../../utils/types"

type TransactionPaneProps = {
  transaction: Transaction
}

export type TransactionPaneComponent = FunctionComponent<TransactionPaneProps>
