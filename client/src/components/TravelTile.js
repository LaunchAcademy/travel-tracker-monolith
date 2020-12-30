import React from "react"

const TravelTile = (props) => {

  return (
    <li className={props.selectedStatus} onClick={props.togglePlace}>
      {props.place.name}
    </li>
  )
}

export default TravelTile