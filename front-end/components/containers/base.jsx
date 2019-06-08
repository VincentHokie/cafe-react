import { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-bulma-components/src/index.sass';

class Base extends Component {
  pushNavigation = (event) => {
    event.preventDefault();
    this.props.history.push(event.target.getAttribute('href'));
  }
}

Base.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Base.defaultProps = {
  history: {
    push: () => {},
  },
};

export default Base;
