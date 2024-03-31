"use client"
import { cn } from '@/lib/utils'
import { CreditCard } from 'lucide-react'
import React from 'react'

const options = [
    {
        name: "Investment"
    },
    {
        name: "House"
    },
    {
        name: "Car"
    },
    {
        name: "Loan"
    },
]

const CardPage = () => {
  

   const [optionsArray, setOptionsArray] = React.useState<any>([]); // Manage selected items with state

   const onClick = (itemName: string) => {
     setOptionsArray((prevArray: any) => [...prevArray, itemName]); // Update state with new selection
   };


//   const onClick = (item: string) => {
//     optionsArray.push(item);
//     console.log(optionsArray);
//     console.log(optionsArray.includes(item))
//   };


  return (
    <div className="min-h-full p-24 flex flex-row gap-6">
      {options.map((item) => (
        <div
          typeof="button"
          className={cn(
            "border border-dashed hover:border-sky-500 transition w-[200px] h-[200px] flex flex-col items-center justify-center gap-4 rounded-md cursor-pointer",
            optionsArray.includes(item.name) && "border-sky-500 bg-sky-50"
          )}
          onClick={() => onClick(item.name)}
        >
          <CreditCard className="h-12 w-12" />
          <h2 className="text-md">{item.name}</h2>
          <p className="text-muted-foreground">{optionsArray.includes(item.name)}</p>
        </div>
      ))}
    </div>
  );
}

export default CardPage