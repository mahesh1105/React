import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-500 text-center my-5'>Currency Convertor</h1>

      <div 
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form 
              onSubmit={(e) => { 
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox 
                  label="From"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  currencyOptions={options}
                  selectCurrency={from}
                />
              </div>

              <div className="relative w-full h-0.5">
                  <button 
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer" 
                    onClick={swap}
                  >
                      swap
                  </button>
              </div>

              <div className="w-full mt-1 mb-4">
                  <InputBox 
                    label="To" 
                    amount={convertedAmount} 
                    onAmountChange={(amount) => setAmount(amount)} 
                    onCurrencyChange={(currency) => setTo(currency)} 
                    currencyOptions={options} 
                    selectCurrency={to} 
                    amountDisable
                  />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

/*
  import { InputBox } from './components' --> by writing folder name only
  index.js will be called by default, no need to add index.js explicitly and each file again and again
*/

/*
  Whenever form is submitted, it will go to some address or url, to prevent it we will use preventDefault() method
*/