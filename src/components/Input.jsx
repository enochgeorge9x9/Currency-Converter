import { useId } from 'react';
/* eslint-disable react/prop-types */
const Input = ({ label, amount, amountChange, currentCurrency = 'usd', currencyChange, currencyOptions = [], currencyDisabled = false, amountDisabled = false }) => {
	const amountInputID = useId();
	return (
		<div className='bg-white p-3 rounded-lg text-sm flex '>
			<div className='w-1/2'>
				<label htmlFor={amountInputID} className='text-black mb-2 inline-block'>
					{label}
				</label>
				<input id={amountInputID} className='outline-none w-full bg-transparent py-1.5 ' type='number' placeholder='Amount' value={amount} disabled={amountDisabled} onChange={(e) => amountChange && amountChange(Number(e.target.value))} />
			</div>
			<div className='w-1/2 flex flex-wrap justify-end text-right pr-1'>
				<p className='text-black mb-2 w-full'>Currency Type</p>
				<select className='rounded-lg px-1 py-1 text-white bg-orange-600 cursor-pointer outline-none' value={currentCurrency} disabled={currencyDisabled} onChange={(e) => currencyChange && currencyChange(e.target.value)}>
					{currencyOptions.map((currency) => (
						<option key={currency} value={currency}>
							{currency.toUpperCase()}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Input;
