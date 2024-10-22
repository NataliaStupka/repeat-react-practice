//import React from 'react';
import PropTypes from 'prop-types';

//рендерим по умові title (якщо є, то рендерим)
function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;