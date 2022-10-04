import { Fragment } from "react"

export function Instructions() {
  return (
    <Fragment>
      <h1 className="RampTextHeading--l">Approve transactions</h1>
      <div className="RampBreak--l" />
      <p className="RampText">
        Your company uses Ramp as their main financial instrument. You are a manager and you need to
        approve the transactions made by your employees.
        <span className="RampBreak--s" />
        Select the checkbox on the right to approve or decline the transactions. You can filter
        transactions by employee.
      </p>
    </Fragment>
  )
}
