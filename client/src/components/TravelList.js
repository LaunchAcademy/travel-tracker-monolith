import React, { useState } from "react"

import TravelTile from "./TravelTile"

const TravelList = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  // debugger

  let message = ""
  if (selectedPlaceId === props.data.favoritePlaceId) {
    message = "What a beauty!"
  } else {
    message = ""
  }

  const listOfPlaces = props.data.places.map((place) => {
    return (
      <TravelTile
        key={place.id}
        place={place}
        setSelectedPlaceId={setSelectedPlaceId}
        selectedPlaceId={selectedPlaceId}
      />
    )
  })
  return (
    <div>
      <ul>{listOfPlaces}</ul>
      <p>{message}</p>
    </div>
  )
}

export default TravelList
