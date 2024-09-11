import { useParams } from 'react-router-dom'
import React from 'react'

const Customer = () => {
  const { id } = useParams()
  const customers = [
    {
      id: 1,
      name: "Juanan",
      lastName: "Estival",
      ani:"111"

    },

    {
      id: 2,
      name: "Andrea",
      lastName: "Bassani",
      ani:"222"

    },
    {
      id: 3,
      name: "Fabio",
      lastName: "Marinelli",
      ani:"333"

    }
  ]
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
  const customer = customers.filter(customer => customer.id == id)[0]
  const crmCase = crmCases.filter(crmCase => crmCase.customer == id)[0]
  console.log(id)
  console.log(customer)
  console.log(crmCase)


  return (
    <>
      <h3>Name:{customer.name}</h3>
      <h3>Last Name:{customer.lastName}</h3>
      <h3>ANI:{customer.ani}</h3>
      <h3>Case:{crmCase.comment}</h3>
    </>

  )
}

export default Customer
