//замість class використовуємо className
//непарні теги теж закриті; {} - перші(включили можливість писати JS, другі {} - анонімний об'єкт)
//використали бібліотеку bootstrap

import data from '../../data.json'
import { Head } from '../head/Head'

export const Card = () => {
  return  data.map((photo) => {
  return (
    <div className="card mx-auto my-2" style={{ width: '18rem' }} key={photo.id}>
      <img src={photo.url} className="card-img-top" alt={photo.title} />
      <div className="card-body">
        <h5 className="card-title">Card title: {photo.title}</h5>

        {/* передамо в компонент аргументи (props) */}
        <Head id='id-123' class='card-title'/> 
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>)
})
}

