import React from 'react'
import { NavLink } from 'react-router-dom'

const Cases = () => {
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
  return (
    <>
    <h1>Cases</h1>
    {crmCases.map( (crmCase, i) =>  <NavLink key={i} to={'/cases/case/' + crmCase.case_id}><h2>{crmCase.comment}</h2></NavLink>)}

    </>
  )
}

export default Cases
