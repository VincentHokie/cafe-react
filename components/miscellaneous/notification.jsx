import React from 'react';
import PropTypes from 'prop-types';

const Notification = props => (
  <div style={{ marginTop: '10px' }} className="columns is-mobile is-centered">
    <div className={`notification column is-half-mobile is-two-thirds-tablet is-three-quarters-desktop is-three-fifths-widescreen is-three-fifths-fullhd ${(props.notificationType && props.notificationType === 'success' ? 'is-success' : 'is-danger')}`}>
      <button className="delete" onClick={props.close} />
      {props.notification}
    </div>
  </div>
);

Notification.propTypes = {
  notificationType: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  notification: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};

export default Notification;
