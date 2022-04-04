import React from "react";


function Header ({ onDarkModeClick }) {

    function handleDarkModeClick() {
        onDarkModeClick()
      }
     

return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {onDarkModeClick ? "Dark" : "Light"} Mode
        </button>
    </header>
)
}




export default Header