import React from 'react';
import ReactDOM from 'react-dom/client';


//import './index.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.StrictMode></React.StrictMode>);

// // --==--  0.приклад-пояснення jsx --==--
// // const paragraphy   = React.createElement('p', {id: 'test-p-id', children: ['I am p']})
// const p = <p id='test-p-id'>I am p</p> //jsx

// // const div = React.createElement(
// //   'div', //тим елементу;
// //   { //запише як атрибути;
// //     name: 'main',
// //     id: 'test-Id',
// //     className: 'test-class',
// //     children: p  //children (запише між div);
// //   },
// // );
// const div = <div  name='main' id='test-Id' className='test-class'>{p}</div>

// console.log('DIV:', div)
// // --==-- END 0.приклад-пояснення  --==--

//===== 2 ======

import App from './components/App';
 
ReactDOM.createRoot(document.getElementById('root')).render(<App />);