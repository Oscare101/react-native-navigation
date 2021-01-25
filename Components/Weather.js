import React, { View } from 'react'

const Weather = (props) => {
  return (
    <>
      {props.city && (
        <>
          <View>
            {props.city}, {props.country}
          </View>
          <View>Temp {props.temp}</View>
          <View>Sunrise {props.sunrise}</View>
          <View>Sunset {props.sunset}</View>
          <View>Pressure {props.pressure}</View>
        </>
      )}
      <View>{props.error}</View>
    </>
  )
}

export default Weather
