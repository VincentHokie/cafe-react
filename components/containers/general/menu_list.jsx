import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import MenuCard from '../../miscellaneous/menuCard.jsx';

class MenuList extends Base {

  render() {
    const items = ["hello", "world", "up", "here"];
    return (
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <Columns>
          { items.map(item => <MenuCard />) }
        </Columns>
      </div>
    );
  }
}

export default DashboardWrapper(
  MenuList,
  {},
  state => ({}),
);
