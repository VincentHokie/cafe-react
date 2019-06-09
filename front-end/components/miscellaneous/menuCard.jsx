import React from 'react';
import PropTypes from 'prop-types';
import Content from 'react-bulma-components/lib/components/content';
import Card from 'react-bulma-components/lib/components/card';
import Columns from 'react-bulma-components/lib/components/columns';


const MenuCard = ({ index, name, type, price }) => (
  <Columns.Column size={4} key={index}>
    <Card renderAs="div" style={{ padding: 0, margin: '10px' }}>
      <Card.Image style={{ height: '200px', backgroundColor: 'rgb(66, 67, 91)' }} />
      <Card.Content>
        <Content>
          <p className="title is-4">{ name }</p>
          <p className="subtitle is-5">{ type }</p>
          <p className="subtitle is-6">
            <span className="icon is-small is-left">
              <i className="fas fa-pound-sign" />
            </span>
            { price }
          </p>
        </Content>
      </Card.Content>
    </Card>
  </Columns.Column>
);

MenuCard.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MenuCard;
