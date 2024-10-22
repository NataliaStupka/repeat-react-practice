import Painting from "./Painting";
import PropTypes from "prop-types";

                      //props дестриктуризуємо
function PaintingList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Painting
                        imageUrl={item.url}
                        title={item.title}
                        author={item.author.tag}
                        profileUrl={item.author.url}
                        price={item.price}
                        quantity={item.quantity}/>
                </li>
            ))}
        </ul>
    )
}

            //propTypes для МАСИВА
// прописуємо тільки для id, все інше вже є в painting, не дублюємо
PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;