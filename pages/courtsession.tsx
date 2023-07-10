import React from 'react';
import NavBar from '../components/NavBar'
import Cases from '@/components/Cases';
import Chat from '../components/Chat';

function CourtSession() {
    return ( 

        <div className='flex h-screen w-screen'>
            <div className='flex w-[15%] bg-[#C3CBF2]'>
                <NavBar/>
            </div>
             <div className='flex w-[30%] overflow-y-hidden overflow-x-hidden bg-[#C3CBF2]'>
                <Cases/>
             </div>
             <div className='flex w-[56%] bg-white'>
                <Chat />
             </div>
        </div>
     );
}
 export default CourtSession