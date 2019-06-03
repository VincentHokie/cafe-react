import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import ContainerService from '../../../actions/container_service.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import ContainerTable from '../../subcomponents/tables/container.jsx';

class ContainerContainer extends Base {
  componentDidMount() {
    this.props.getContainers();
  }

  render() {
    return (
      <Columns>
        <Columns.Column size={12}>
          <GeneralSubnav
            searchWord="container"
            search={this.props.containerSearch}
          />
        </Columns.Column>
        <Columns.Column size={12} style={{ display: 'contents' }}>
          <ContainerTable
            containers={this.props.containers}
            push={this.pushNavigation}
            searchString={this.props.searchString}
          />
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  ContainerContainer,
  { ...ContainerService },
  state => ({
    containers: state.containerReducer.containers,
    searchString: state.containerReducer.searchString,
  }),
);
