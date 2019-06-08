import React from 'react';
import PropTypes from 'prop-types';
import Content from 'react-bulma-components/lib/components/content';
import Card from 'react-bulma-components/lib/components/card';
import Columns from 'react-bulma-components/lib/components/columns';


const MenuCard = ({ index }) => (
  <Columns.Column size={4}>
    <Card renderAs="div" key={index} style={{ padding: 0, margin: '10px' }}>
      <Card.Image style={{ height: '200px', backgroundColor: 'rgb(66, 67, 91)' }} />
      <Card.Content>
        <Content>
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </Content>
      </Card.Content>
    </Card>
  </Columns.Column>
);

MenuCard.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MenuCard;
