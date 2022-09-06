import React from 'react';
import { Text } from '../../components/languages/Text/Text';


const LearnMore = () => { 
    return (
        <div className="p-5 relative">
                <h1 className="text-white text-5xl text-center font-mono "><Text tid={"learnmore"} /></h1>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT3'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT4'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT5'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT6'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT7'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT8'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT9'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT10'} /></p>
                <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT11'}/></p>
            </div>
    )
}

export default LearnMore;