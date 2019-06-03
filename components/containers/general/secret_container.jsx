import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import SecretsService from '../../../actions/secret_service.jsx';
import SecretTable from '../../subcomponents/tables/secret.jsx';


class SecretContainer extends Base {
  componentDidMount() {
    this.props.getSecrets();
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav
            searchWord="secret"
            search={this.props.secretSearch}
          />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          <SecretTable
            secrets={this.props.secrets}
            push={this.pushNavigation}
            searchString={this.props.searchString}
          />
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  SecretContainer,
  { ...SecretsService },
  state => ({
    secrets: state.secretReducer.secrets,
    searchString: state.secretReducer.searchString,
  }),
);
