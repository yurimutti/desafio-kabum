import React, { useState } from 'react'
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'

import { User } from './styles'

function index() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  return isUserLoggedIn ? (
    <User>
      <LoggedIn />
    </User>
  ) : (
    <User>
      <NotLoggedIn />
    </User>
  )
}

export default index