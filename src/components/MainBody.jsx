import React,{useState} from 'react'
import Input from './Input';
import useCurrencyInfo from '../hooks/useCurrencyInfo';


const MainBody = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo  = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
          <div
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/18954748/pexels-photo-18954748/free-photo-of-people-crossing-a-street-under-a-viaduct.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              }}
          >
              <div className="w-full">
                  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                          
                          onSubmit={(e) => {
                              e.preventDefault();
                              convert()  
                          }}
                      >
                          <div className="w-full mb-1">
                              <Input
                                  label="From"
                                  amount={amount}
                                  amountChange={(currency) => setAmount(currency)}
                                  currencyChange={(currency) => setFrom(currency)}
                                  currentCurrency={from}
                                  currencyOptions={options}
                                  
                              />
                          </div>
                          <div className="relative w-full h-0.5">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-orange-600 text-white px-3 py-1 hover:bg-orange-500 active:bg-orange-700 "
                                  onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full mt-1 mb-4">
                              <Input
                                  label="To"
                                  amount={convertedAmount}
                                  currencyOptions={options}
                                  currentCurrency={to}
                                  currencyChange={(currency) =>
                                  setTo(currency)}
                                  amountDisabled
                                  
                              />
                          </div>
                          <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 active:bg-orange-700  text-white px-4 py-3 rounded-lg">
                              Convert {from.toUpperCase()} To {to.toUpperCase()}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      );
}

export default MainBody