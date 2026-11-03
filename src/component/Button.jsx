import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className="bg-secondary-color w-52 h-14 rounded-xl text-white font-bold hover:opacity-70">
        {props.btn}
      </button>
    </div>
  );
};

export default Button;
