import React from 'react';
import PropTypes from 'prop-types';

const CustomToast = props => (
  <div>
    { props.message }
  </div>
);

CustomToast.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomToast;

