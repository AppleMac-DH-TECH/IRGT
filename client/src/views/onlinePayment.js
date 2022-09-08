import * as React from "react"
import { Text } from '../components/languages/Text/Text' 


const OnlinePayment = () => { 
    return (
        <div class="container  p-10 md:p-0 m-auto pt-10 pb-10 relative ">
            <div className="container overflow-x-auto max-w-sm shadow-2xl bg-transparent rounded-3xl m-auto text-center hover:scale-105 duration-700 ease-in-out">
                <table class="w-full text-xl  text-[#0E2144] font-mono text-center ">
                    <thead class="text-xl bg-transparent text-[#0E2144] uppercase ">
                        <tr>
                            <th scope="col" class="py-3 px-6 flex item-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <p><Text tid={'onlinepayment'}/></p>
                            </th>
                            <th scope="col" class="py-3 px-6  text-center">
                                <p><Text tid={'action'}/></p> 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class=" border-b bg-transparent ">
                            <td class="py-4 px-6">
                                <Text tid={'clickpayment'}/>
                            </td>
                            <td class="py-4 px-6">
                                8600- 0329-0605-1859
                            </td>
                        
                        </tr>

                        <tr class=" border-b bg-transparent ">
                            <td class="py-4 px-6">
                                <Text tid={'payme'}/>
                            </td>
                            <td class="py-4 px-6">
                            
                            </td>
                        
                        </tr>

                        <tr class=" border-b bg-transparent ">
                            <td class="py-4 px-6">
                            <Text tid={'qivi'}/>
                            </td>
                            <td class="py-4 px-6">
                        
                            </td>
                        
                        </tr>

                        <tr class=" border-b bg-transparent ">
                            <td class="py-4 px-6">
                            <Text tid={'sberbank'}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OnlinePayment;