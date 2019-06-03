import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import ServiceService from '../../../actions/service_service.jsx';
import ServiceTable from '../../subcomponents/tables/service.jsx';


class ServiceContainer extends Base {
  componentDidMount() {
    this.props.getServices();
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav
            searchWord="service"
            search={this.props.serviceSearch}
          />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          <ServiceTable
            secrets={this.props.services}
            push={this.pushNavigation}
            searchString={this.props.searchString}
          />
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  ServiceContainer,
  { ...ServiceService },
  state => ({
    services: state.serviceReducer.services,
    searchString: state.serviceReducer.searchString,
  }),
);
