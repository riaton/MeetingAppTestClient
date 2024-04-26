import React from 'react';

import "./header.css";

export const HeaderOrganism = (props) => {
  const { signOut } = props

  return(
    <div id="header">
        <button id="headerButton" onClick={signOut}>ログアウト</button>
    </div>
  )
}

export default HeaderOrganism;