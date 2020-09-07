import React from "react";
import { useParams } from "react-router-dom";

export default props => {
  let { id } = useParams()

  return (
    <h3>Squad {id}</h3>
  )
}