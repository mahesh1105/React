import React from 'react'
import { useId } from 'react'

// Every Component will get props functionality, that are passed via HTML attributes
// Here instead of directly writing "props", we are destructuring the props elements - so that it can be used directly
// label - To/From, amount - value, onAmountChange
function InputBox({label, amount, onAmountChange, onCurrencyChange, currencyOptions=[], selectCurrency="usd", amountDisable=false, currencyDisable=false, className=""}) {
    // Hooks to generate the Unique ID
    const amountInputId = useId();
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
                <input id={amountInputId} className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} disabled={currencyDisable} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((currency) => (
                        <option value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

/*
    {currencyOptions.map((currency) => (
        <option value={currency}>{currency}</option>
    ))}
    
    this will return an array of "options" with currency type, that is taken by select and will get displayed

    useId:
    ------
    The useId hook in React is used to generate unique IDs for components.
    It ensures that each instance of a component has a unique identifier, even if the component is rendered multiple times or across different parts of the application.

    Why Use useId?
    --------------
    1. Accessibility (a11y):
    - To link a <label> with its corresponding <input>, the htmlFor attribute of the <label> must match the id attribute of the <input>.
    - This improves accessibility by enabling screen readers to associate the label with the input field.
    
    2. Avoiding Collisions:
    - When rendering multiple instances of a component, manually specifying id values might lead to duplicate IDs, which can cause unexpected behavior.
    - useId ensures IDs are unique across all instances and prevent collisions.
    
    ** How It Works in Your Code:
    -----------------------------
    1. Generate the ID:
    - The amountInputId is generated using useId():
        const amountInputId = useId();
    -- This provides a unique ID for the <input> element in each InputBox component.
    
    2. Link the <label> to the <input>:
    - The htmlFor attribute of the <label> is set to match the id of the <input>:
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input id={amountInputId} className="outline-none w-full bg-transparent py-1.5" type="number" ... />
    -- This ensures the label is correctly associated with the input field.
    
    3. Result:
    - When a user clicks the label, the corresponding input field gains focus.
    - It avoids any ID conflicts if multiple InputBox components are rendered simultaneously.
*/