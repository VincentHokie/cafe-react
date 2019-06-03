import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';


class DockerDaemonContainer extends Base {
  componentDidMount() { }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav searchWord="container" search={() => {}} />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }} />
      </Columns>
    );
  }
}

export default DashboardWrapper(
  DockerDaemonContainer,
  {},
  state => ({
    daemons: state.dockerDaemonReducer.daemons,
  }),
);
