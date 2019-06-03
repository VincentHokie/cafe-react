import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import ConfigTable from '../../subcomponents/tables/config.jsx';
import ConfigService from '../../../actions/config_service.jsx';


class ConfigContainer extends Base {
  componentDidMount() {
    this.props.getConfigs();
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav searchWord="configuration" search={() => {}} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {
            this.props.configs ?
              <ConfigTable configs={this.props.configs} push={this.pushNavigation} /> : ''
          }
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  ConfigContainer,
  { ...ConfigService },
  state => ({
    configs: state.configReducer.configs,
  }),
);
