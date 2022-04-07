import React from "react"

const TravelTile = (props) => {
  // debugger
  const togglePlace = () => {
    props.setSelectedPlaceId(props.place.id)
  }

  let selectedStatus = ""
  if (props.selectedPlaceId === props.place.id) {
    selectedStatus = "done"
  }

  return (
    <li className={selectedStatus} onClick={togglePlace}>
      {props.place.name}
    </li>
  )
}

export default TravelTile
