import React from 'react';

function CloseButton({ onClick, text = "Cerrar", className = "btn btn-secondary" }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default CloseButton;