import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit={props.weatherMethod} className="form">
      <input type="text" name="city" placeholder="city" />
      <button>Get weather</button>
    </form>
  )
}

export default Form
