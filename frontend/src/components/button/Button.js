import React from 'react';

export default function Button(props) {
  const { description, value, selected, color, onClick } = props;

  const buttonClass = `btn waves-effect waves-purple black-text ${
    +selected === +value ? color : 'deep-purple lighten-4'
  }`;

  const onButtonClick = ({ target }) => {
    onClick(target.value);
  };

  return (
    <button
      style={{ margin: 3 }}
      className={buttonClass}
      onClick={onButtonClick}
      value={value}
    >
      {description}
    </button>
  );
}
