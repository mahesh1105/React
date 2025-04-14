import { useEffect, useRef, useState } from 'react'
import Input from './components/Input';
import './App.css'

/* OTP Input:
  - Digits must be a Number
  - Auto-move to next input after typing
  - Auto-backspace to previous input if value is cleared
  - Paste full OTP across all boxes (bonus feature)
  - Focus on first input on mount
*/

// It must be generic so that if number of digits might gets changed in future, it will adapt it with minimal change

/*
  The isNaN() function in JavaScript is used to check whether a value is NaN (Not-a-Number). 
  However, in your example isNaN(space), the behavior can depend on the value of space.
  
  If space is a string like " " (a space character), isNaN(" ") would return false, 
  because JavaScript treats a space as a valid number and implicitly converts it to 0 when doing numeric comparisons.
*/

/*
  The ?. syntax is called the optional chaining operator in JavaScript.
  It's a feature introduced in ES2020 that allows you to safely access 
  deeply nested properties of an object without causing runtime errors 
  if any of the properties in the chain are null or undefined.

  Example:
  --------
  num && refVar.current[ind + 1]?.focus();

  This line is performing two actions:

  1. num &&: This is a logical AND (&&) operator. It checks if num is truthy (i.e., not null, undefined, false, 0, "", or NaN).
  If num is falsy, the right-hand side (after &&) will not execute. If num is truthy, it proceeds to check the next part.

  2. refVar.current[ind + 1]?.focus();: This is the key part where the optional chaining operator (?.) is used.
  - refVar.current[ind + 1]: This accesses the element at the index ind + 1 in the refVar.current array 
    (which holds references to the input DOM elements).
  - (?.): The optional chaining operator here ensures that if refVar.current[ind + 1] is null or undefined 
    (for example, if refVar.current[ind + 1] does not exist or if the index is out of bounds), it will not throw an error. 
    Instead, it will return undefined safely, and the .focus() method will not be called.
*/

function App() {
  // Create a variable for OTP digits count
  const OTP_DIGITS = 5;

  // Create a state to handle the otp digits
  const [otpDigits, setOtpDigits] = useState(new Array(OTP_DIGITS).fill(""));

  // useRef returns an object — and that object has a single property called .current
  // const refVar = {
  //   current: []
  // };
  // refVar.current = some-value;
  const refVar = useRef([]);

  // flag to track if paste happened
  const hasPasted = useRef(false);

  useEffect(() => {
    if(!hasPasted.current) {
      refVar.current[0]?.focus();
    }
  }, []);

  function handleOnChange(num, ind) {
    // Check if num is not a number if yes then don't do below things for it
    // But space is considered as 0, it is considered as a number, add an extra check for not considering space
    if(isNaN(num) || num == " ")
      return;

    // Printing the value to check the exact value got from the event
    // console.log(num);

    // Recieve the copies of array values in local variable
    const newArr = [...otpDigits];

    // Update the value which is changed
    newArr[ind] = num;

    // set the array to new array
    setOtpDigits(newArr);

    // Note: Below line is not allowed - You cannot change the variable made using useState directly, it can be changed using function only
    // otpDigits[ind] = val;

    // Go forward only when if some value is present at current block
    num && refVar.current[ind+1]?.focus();
  }

  function onKeyClicked(e, ind) {
    // Printing the event to check what and all things the event contains
    // console.log(e);

    // If key is backspace and if value is not there in the box then go to previous box
    if(!e.target.value && e.key == "Backspace") {
      refVar.current[ind-1]?.focus();
    }
  }

  function onPasteData(e) {
    // Prevent the default behavior of the event
    e.preventDefault();

    // Update the variable to true as data will be pasted that's why this function is invoked
    hasPasted.current = true;

    const data = e.clipboardData.getData("text");

    // Replace the non-digit with "" (empty character)
    const digits = data.replace(/\D/g, "").split("").slice(0, OTP_DIGITS);

    const newOtp = [...otpDigits];

    digits.forEach((digit, ind) => {
      newOtp[ind] = digit;
    });

    setOtpDigits(newOtp);

    // Move focus to the next empty input
    const nextIndex = digits.length < OTP_DIGITS ? digits.length : OTP_DIGITS - 1;
    refVar.current[nextIndex]?.focus();

    // Consider a case where you got 4 digits from the copied data but you need 5 digits
    // That's why added last lines to focus on exactly where we want
  }

  /*
    In React, ref is a special attribute that allows you to directly access a DOM element.
    When you define the ref prop on an element, it gives you a reference to the actual DOM node,
    which is the input element in this case.
  */

  return (
    <div className='app'>
      <h1>Validate OTP</h1>
      <div className="container">
        {otpDigits.map((value, index) => {
          return (
            <Input
              key={index} // For Differentiating the Components
              ref={(input) => {
                // Inside ref, callback have one parameter that will point to dom element not the digit
                // console.log(input);
                return refVar.current[index] = input;
              }}
              index={index}
              value={value}
              onOtpChange={handleOnChange}
              onKeyClicked={onKeyClicked}
              onPasteData={onPasteData}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
