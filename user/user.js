import React from 'react';

class User extends React.Component {
  render(){
    return(
      <div>
        <div id="user-header">
          <label class="user-header-name">Borja</label>
        </div>
        <div id="user-content">
          <p id="user-content-description">
            Im 21 years old and I love React
          </p>
        </div>
      </div>
    )
  }
}
