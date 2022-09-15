import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './title.css';

export default function Title() {

    const [ homeTitle, setHomeTitle ] = useState(false)
    const location = useLocation()
    const currentLocation = location.pathname

useEffect(() => {
  if( currentLocation === "/list") {
    setHomeTitle(true)
  }
  else {
    setHomeTitle(false)
  }
},[currentLocation])

  return (
    <>{homeTitle
        ?
          <h2>Current Employees</h2>
        :           
          <h2>Create Employee</h2>
    }</>
  )
}