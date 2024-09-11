import React from 'react'
import { NavLink } from 'react-router-dom'

export const Customers = () => {
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
  return (
    <>
    <h1>My Custom CRM</h1>
    { customers.map( (customer, i) => <NavLink key={i} to={'/customers/customer/' + customer.id}> <h2 >{customer.name }</h2></NavLink> )}
    </>
  )
}
export default Customers

