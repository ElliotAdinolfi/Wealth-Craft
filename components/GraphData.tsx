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

  const { initialInvestment, startingAge, annualReturn, yearsToRetirement, additionalContribution, contributionFrequency } = data
  const [dataArray, setDataArray] = useState<[] | {
      age: number;
      value: string;
      }[]>([])

  useEffect(() => {
    const dataPoints = [];
    let currentVal = initialInvestment
    for (let i = 0; i < yearsToRetirement; i++) {
      dataPoints.push({
        age: startingAge + i,
        value: currentVal.toFixed(2)
      })
      currentVal = ((currentVal + (additionalContribution * contributionFrequency)) * (1 + (annualReturn / 100)))
    }
    setDataArray(dataPoints)
  }, [additionalContribution, annualReturn, contributionFrequency, initialInvestment, startingAge, yearsToRetirement])

  return (
    <div className="mt-32 w-screen flex justify-center">
      <ResponsiveContainer width="90%" aspect={2.2}>
        <BarChart
        width={830} 
        height={750} 
        data={dataArray}
        margin={{
          top: 15,
          right: 30,
          left: 30,
          bottom: 5,
        }}>
          <CartesianGrid opacity={0.2} vertical={false}/>
          <XAxis dataKey="age" />
          <YAxis domain={[0, 1_000_000]}/>
          <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip/>}/>
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
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
    yearsToRetirement: number;
    additionalContribution: number;
    contributionFrequency: number;
  }
}