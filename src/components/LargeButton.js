import React from "react";

/**
 * Function that returns Large Button Component.
 * @param text text of the button.
 * @param color background color of the button.
 */
export const LargeButton = ({ text, color }) => {
  return (
    <div className='button-wrapper'>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className='large-button'
        style={{ background: color }}
      >
        {text}
      </button>
    </div>
  );
};
