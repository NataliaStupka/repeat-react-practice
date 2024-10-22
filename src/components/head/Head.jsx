import PropTypes from "prop-types"

          // props це об'єкт
export const Head = (props) => {
  return <p className={props.class} id={props.id}> "I am Head"</p>
}

// якщо є props, то прописати propTypes (встановити) 
//  npm i prop-types


Head.propTypes = {
    class: PropTypes.string,
    id: PropTypes.string,
}
