import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import MenuCard from '../../miscellaneous/menuCard.jsx';
import MenuService from '../../../actions/menu_service.jsx';


class MenuList extends Base {
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    return (
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <Columns>
          {
            this.props.menu.map((item, index) =>
            (
              <MenuCard
                key={index}
                index={index}
                name={item.name}
                type={item.type_id}
                price={item.price}
              />
            ))
          }
        </Columns>
      </div>
    );
  }
}

export default DashboardWrapper(
  MenuList,
  { ...MenuService },
  state => ({
    menu: state.menuReducer.menu,
  }),
);
