import * as React from "react"
import { Text } from '../components/languages/Text/Text' 


const OnlinePayment = () => { 
    return (
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-auto text-xl">
            <table class="w-full text-xl  text-white font-mono text-center hover:shadow-2xl hover:bg-[rgba(255,152,9,0.6)] ">
                <thead class="text-xl bg-transparent text-white uppercase ">
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
                        <td class="py-4 px-6">
                        
                        </td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OnlinePayment;