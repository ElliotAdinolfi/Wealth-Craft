"use client"

import { useState } from "react"
import GraphData from "./GraphData"

const InputForm = () => {

  const [data, setData] = useState({
    initialInvestment: 10000,
    startingAge: 25,
    annualReturn: 10,
    yearsToRetirement: 45,
    additionalContribution: 0,
    contributionFrequency: 1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleFrequency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {

      case 'Annually':
        setData({
          ...data,
          contributionFrequency: 1
        })
        break;

      case 'Monthly':
        setData({
          ...data,
          contributionFrequency: 12
        })
        break;

      case 'Bi-Weekly':
        setData({
          ...data,
          contributionFrequency: 26
        })
        break;

      case 'Weekly':
        setData({
          ...data,
          contributionFrequency: 52
        })
        break;

      case 'Daily':
        setData({
          ...data,
          contributionFrequency: 365
        })
        break;

      default: 
        setData({
          ...data,
          contributionFrequency: 1
        })
    }
  }

  return (
    <div className="flex items-center flex-col">

      <div className="w-fit">
        <label htmlFor="initialInvestment" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Initial Investment</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input onChange={handleChange} type="text" name="initialInvestment" id="initialInvestment" className="text-black block w-full rounded-md border-gray-200 pl-9 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="10,000.00" aria-describedby="price-currency" />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">USD</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="startingAge" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Starting Age</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input onChange={handleChange} type="text" name="startingAge" id="startingAge" className="text-black block w-full rounded-md border-gray-200 pl-9 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="25" aria-describedby="price-currency" />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">Years</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="annualReturn" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Anticipated Annual Return</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input onChange={handleChange} type="text" name="annualReturn" id="annualReturn" className="text-black block w-full rounded-md border-gray-200 pl-9 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="10" aria-describedby="price-currency" />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">%</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="additionalContribution" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Additional Contribution</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input onChange={handleChange} type="text" name="additionalContribution" id="additionalContribution" className="text-black block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="0.00"/>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="time-frame" className="sr-only">Time Frame</label>
            <select onChange={handleFrequency} id="time-frame" name="time-frame" className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-teal-500 focus:ring-teal-500 sm:text-m">
              <option>Annually</option>
              <option>Monthly</option>
              <option>Bi-Weekly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
        </div>
      </div>

      <GraphData data={data} />
    </div>
  )
}

export default InputForm