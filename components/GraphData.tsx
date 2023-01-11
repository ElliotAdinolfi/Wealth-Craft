"use client"

import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const GraphData = ({ data }: GraphProps) => {

  const { initialInvestment, startingAge, annualReturn, endingAge, additionalContribution, contributionFrequency } = data
  const [dataArray, setDataArray] = useState<[] | {
      age: number;
      value: string;
      }[]>([])
  const [ maxVal, setMaxVal ] = useState(290_000)
  const [ totalContributions, setTotalContributions ] = useState(0)

  useEffect(() => {
    
    const dataPoints = [];
    let currentVal = Number(initialInvestment.toString().replace(/[^0-9.]/g, ''))
    let end = endingAge - startingAge;
    let contributions = initialInvestment;
    for (let i = 0; i < end + 1; i++) {
      contributions += additionalContribution * contributionFrequency
      dataPoints.push({
        age: Number(startingAge) + i,
        value: currentVal.toFixed(2)
      })
      currentVal = ((currentVal + (additionalContribution * contributionFrequency)) * (1 + (annualReturn / 100)))
    }
    setTotalContributions(contributions)
    console.log(totalContributions)
    setDataArray(dataPoints)
    setMaxVal(Math.round(currentVal))
  }, [additionalContribution, annualReturn, contributionFrequency, endingAge, initialInvestment, startingAge])

  let nf = new Intl.NumberFormat('en-US');

  return (
    <>
      <h1 className="mt-16 text-3xl font-bold text-gray-900 dark:text-gray-300">Final Value</h1>
      <h1 className="mt-8 text-3xl font-bold text-gray-900 dark:text-gray-500">
        Your Contributions: ${nf.format(totalContributions)}
      </h1>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-500">
        {/* @ts-ignore */}
        Pre-Tax Value: ${dataArray.length > 1 ? nf.format(dataArray[dataArray.length - 1].value) : 0}
      </h1>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-500">
        {/* @ts-ignore */}
        Post-Tax Value: ${dataArray.length > 1 ? nf.format(dataArray[dataArray.length - 1].value * 0.8) : 0}
      </h1>
      <h1 className="mt-16 text-3xl font-bold text-gray-900 dark:text-gray-300">Investment Growth</h1>
      <div className="max-w-7xl mt-8 w-screen flex justify-center">
        <ResponsiveContainer width="90%" aspect={2.2}>
          <BarChart
          width={830} 
          height={750} 
          data={dataArray}
          margin={{
            top: 15,
            right: 10,
            left: 50,
            bottom: 5,
          }}>
            <CartesianGrid opacity={0.2} vertical={false}/>
            <XAxis dataKey="age" />
            <YAxis 
              domain={[0, maxVal]}
              tickFormatter={(tick) => {
                let nf = new Intl.NumberFormat('en-US');
                return `$${nf.format(tick)}` 
              }}
            />
            <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip/>}/>
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

function CustomTooltip ({active, payload, label}: any) {
  if (active && payload) {
    let nf = new Intl.NumberFormat('en-US');
    return (
      <div className="bg-white shadow-lg rounded-lg p-4" style={{outline: "none"}}>
        <p className="text-gray-900 font-bold text-xl mb-2">Age: {label}</p>
        <p className="text-gray-700">Value: ${nf.format(payload[0].value)}</p>
      </div>
    )
  }
  return null;
}

export default GraphData

interface GraphProps {
  data: {
    initialInvestment: number;
    startingAge: number;
    annualReturn: number;
    endingAge: number;
    additionalContribution: number;
    contributionFrequency: number;
  }
}