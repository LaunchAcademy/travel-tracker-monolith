import React, { useState } from "react"

import TravelTile from "./TravelTile"

const TravelList = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null)

  let places = props.data.places

  const listOfPlaces = places.map((place) => {
    const togglePlace = () => {
      setSelectedPlace(place.id)
    }

    let selectedStatus = ""

    if (selectedPlace === place.id) {
      selectedStatus = "done"
    }
    
    return(
      <TravelTile
        key={place.id}
        place={place}
        togglePlace={togglePlace}
        selectedStatus={selectedStatus}
      />
    )
  })

  let message = ""

  if (selectedPlace === props.data.favoritePlaceId) {
    message = "What a beauty!"
  }

  return(
    <div>
      <ul>
        {listOfPlaces}
      </ul>

      <h4>{message}</h4>
    </div>
  )
}

export default TravelList