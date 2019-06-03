import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import NetworkService from '../../../actions/network_service.jsx';
import NetworkTable from '../../subcomponents/tables/network.jsx';


class NetworkContainer extends Base {
  componentDidMount() {
    this.props.getNetworks();
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav
            searchWord="network"
            search={this.props.networkSearch}
          />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {
            this.props.networks ?
              <NetworkTable
                networks={this.props.networks}
                push={this.pushNavigation}
                searchString={this.props.searchString}
              /> : ''
          }
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  NetworkContainer,
  { ...NetworkService },
  state => ({
    networks: state.networkReducer.networks,
    searchString: state.networkReducer.searchString,
  }),
);
