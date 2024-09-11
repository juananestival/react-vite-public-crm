import { useParams } from 'react-router-dom'
import React from 'react'

const Case = () => {
  const { id } = useParams()
  const crmCases = [
    {
      case_id:1,
      customer:1,
      comment:"case Juanan"
    },
    {
      case_id:2,
      customer:2,
      comment:"case Andrea"
    },
    {
      case_id:3,
      customer:3,
      comment:"case Fabio"
    }
  ]
  const crmCase = crmCases.filter(crmCase => crmCase.case_id == id)[0]
  console.log(id)
  console.log(crmCase)


  return (
    <div>{crmCase.comment}</div>
  )
}

export default Case
