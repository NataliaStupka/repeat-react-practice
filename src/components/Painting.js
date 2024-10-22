import defaultImage from './default.jpg'; //якщо не завантажиться картинкаб по дефолту
import PropTypes from 'prop-types'; 

// приходить завжди один, props (об'єкт), як атрибут
const Painting = ({
 imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не известно',
  price,
  quantity,
}) => {
    return (
        <div>
            <img src={imageUrl} alt={title} width="480" />
            <h2>{title}</h2>
            <p> Автор: <a href={profileUrl}>{author}</a></p>
            <p>Ціна: {price} кредитів</p>
            <p>Доступність: {quantity < 10 ? 'Закінчується' : 'Є в наявності'}</p>
            <button type="button">Додати в корзину</button>
        </div>
    )
} 

// npm i prop-types
// isRequired - обов'язковий чи ні
Painting.prototypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}


export default Painting;