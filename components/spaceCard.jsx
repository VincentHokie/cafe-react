import React from 'react';
import PropTypes from 'prop-types';
import Content from 'react-bulma-components/lib/components/content';
import Card from 'react-bulma-components/lib/components/card';
import Icon from 'react-bulma-components/lib/components/icon';


const ContainerCard = ({ index, container }) => (
  <Card renderAs="a" href={`/containers${container.Names[0]}/details`} key={index} className="column is-3" style={{ padding: 0, margin: '10px', flexWrap: 'wrap' }}>
    <Card.Header>
      <Card.Header.Title>
        {container.Names[0]}
      </Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Content>
        Uptime: {container.Status}
      </Content>
    </Card.Content>
    <Card.Footer>
      <Card.Footer.Item>
        {container.State}
      </Card.Footer.Item>
      <Card.Footer.Item>
        <Icon>
          <span className="fas fa-bell" />
        </Icon>
      </Card.Footer.Item>
    </Card.Footer>
  </Card>
);

ContainerCard.propTypes = {
  index: PropTypes.number.isRequired,
  container: PropTypes.shape({}).isRequired,
};

export default ContainerCard;
