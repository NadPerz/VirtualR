import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-10 mt-20 border-t border-neutral-700'>
        <div className='grid grid-cols-3 gap-6 lg:grid-cols-3 '>
            <div>
                <h3 className='mb-4 font-semibold text-md'>Resources</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link, index) =>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href} >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='mb-4 font-semibold text-md'>Platform</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link, index) =>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href} >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            <div>
                <h3 className='mb-4 font-semibold text-md'>Community</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link, index) =>(
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white' href={link.href} >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>        
    </footer>  
)
}

export default Footer