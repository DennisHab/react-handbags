import React from 'react';

function NavButton({value, disable}) {
    return (
      <button disabled={disable}
      onClick={() => console.log({value}.value)}>
          {value}
      </button>
    );
}
export default NavButton;