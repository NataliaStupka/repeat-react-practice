import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';


//було раніше так:
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,
//   document.getElementById('root'),
// );



// оборачиваем в строгий режим React.StrictMode
ReactDOM.createRoot(document.getElementById('root'))
  .render(<React.StrictMode><App /></React.StrictMode>);















// //// --------  ОЗНАКОМЛЕНИЕ --------================================================
//       // 2 - добавим в element еще два элемента (span)
//             // const elem1 = React.createElement('span', {children: 'Первый спан'});
//             // const elem2 = React.createElement('span', {children: 'Второй спан'});

//       // 1.1 - создаем елемент, указываем тип элемента (интересны свойства props-настройки элемента, key, type и ref)
//             // const element = React.createElement('div', {
//             //   a: 5,
//             //   b: 10,
//             //   children: ['в {} - настройки элемента, ', '', 'массив', elem1, elem2]
//             // }); //все, что в children - будет между закр. и откр. тегом; остальное - атрибуты.
//             // console.log(element);

//       // 1.2 - рендерим элемент, для этого импорт, а потом метод; (что рендерим, куда рендерим)
//             // ReactDOM.render(element, document.querySelector('#root'));

//       // 3------------JSX-----(если есть jsx то импортировать React не нужно)---------------------
//       // для удобства написания используенм jsx. Перепишем 1.1 и 2
//       // все что с маленькой буквы будет тегом, с большой - имя переменой;

//         // const elem1 = React.createElement('span', {children: 'Первый спан'});   
//       const elem1 = <span>Первый спан</span>;
//         // const elem2 = React.createElement('span', {children: 'Второй спан'});
//       const elem2 = <span>Второй спан</span>;

//       const jsxElement = (<div>{elem1}{elem2}{2 + 2}</div>);
          
//       // ReactDOM.render(jsxElement, document.querySelector('#root'));

