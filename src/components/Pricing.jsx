import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { features, pricingOptions } from '../constants'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='my-8 text-3xl tracking-wider text-center sm:text-5xl lg:text-6xl'>
            Pricing
        </h2>
        <div className='flex flex-wrap'>
            {pricingOptions.map((option, index)=>(
                <div key={index} className='w-full p-2 sm:-1/2 lg:w-1/3'>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='mb-8 text-4xl'>
                            {option.title}
                            {option.title === "Pro" && <span className='mb-4 ml-2 text-xl text-transparent bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text'>(Most Popular)</span>}
                        </p>
                        <p className='mb-8'>
                            <span className='mt-6 mr-2 text-5xl'>{option.price}</span>
                            <span className='tracking-tight text-neutral-400'>/Month</span>
                        </p>
                        <ul>
                            {option.features.map((features, index) => (
                                <li key={index} className='flex mt-8 item-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{features}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className='inline-flex items-center justify-center w-full h-12 mt-20 text-xl tracking-tight text-center transition duration-300 border border-orange-900 rounded-lg hover:bg-orange-900'>
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing