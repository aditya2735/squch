import React from 'react'
import { BarLoader } from 'react-spinners'

const Loader = () => {
    return (
        // <div className="loading">
        //     <BarLoader />
        // </div>

        <div className='loader'>
          <div className="progress"></div>
       </div>
    )
}
    
export default Loader