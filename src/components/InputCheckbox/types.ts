import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onChange: (newValue: boolean) => void
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
