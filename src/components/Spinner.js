// // import React, { Component } from 'react'
// import loading from './loading.gif'

// const Spinner=()=> {
//     return (
//       <div className='text-center'>
//         <img src={loading} alt="loading" />
//       </div>
//     ) 
// }
 
// export default Spinner

import React from 'react';
import loading from './loading.gif';
import loading2 from './loading2.gif';
import './Spinner.css'

const Spinner = ({ mode }) => {
    return (
        <div className={`spinner-wrapper ${mode}`}>
            <img src={mode === 'dark' ? loading2 : loading} alt="loading" />
        </div>
    );
}

export default Spinner;
