import React, { forwardRef } from 'react';

// {index, value, onOtpChange} - Object Destructuring OR
// if we accept the parameters by using the variable name in the function, like data or props
// then inside the function, we need to do destructuring of objects, like -
// const {index, value, onOtpChange} = props;

// As React passes the value from one component to another component in the form of object

// Note: whenever key is written while calling the components then it is not passed as the prop to the component
// Instead it will be used to differentiate between the components when it rendered multiple times

/*
  Also, in case of ref, it is not passed as normal prop, instead you need to use "React.forwardRef"

  const Input = forwardRef((props, ref) => {
    const { index, value, onOtpChange } = props;
    // Now you can safely use `ref` separately
  });

  So you’re NOT destructuring ref from the props — you’re grabbing it as the second param.
*/

/*
  inputMode="numeric": Shows the numeric keyboard on mobile 📱
  pattern="\d*": Accepts only digits (can pair with validation or regex)
*/

/*
  onKeyDown - When user presses any key
  onKeyUp - When user releases any key
*/

const Input = forwardRef((props, ref) => {
  const {index, value, onOtpChange, onKeyClicked, onPasteData} = props;

  return (
    <input
      type='text'
      className='otp-input'
      value={value}
      ref={ref}
      onChange={(e) => {
        onOtpChange(e.target.value, index)
      }}
      maxLength={1}
      inputMode='numeric'
      pattern="\d*"
      onKeyDown={(e) => {
        onKeyClicked(e, index);
      }}
      onPaste={(e) => {
        onPasteData(e);
      }}
    />
  );
});

export default Input;
