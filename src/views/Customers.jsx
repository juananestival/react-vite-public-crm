import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@salesforce/design-system-react';



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
    <Button label="Hello Button" />
    { customers.map( (customer, i) => <NavLink key={i} to={'/customers/customer/' + customer.id}> <h2 >{customer.name }</h2></NavLink> )}
    </>
  )
}
export default Customers

