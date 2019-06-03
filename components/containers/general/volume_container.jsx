import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import VolumeService from '../../../actions/volume_service.jsx';
import VolumeTable from '../../subcomponents/tables/volume.jsx';


class VolumeContainer extends Base {
  componentDidMount() {
    this.props.getVolumes();
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav
            searchWord="volume"
            search={this.props.volumeSearch}
          />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {
            this.props.volumes ?
              <VolumeTable
                volumes={this.props.volumes}
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
  VolumeContainer,
  { ...VolumeService },
  state => ({
    volumes: state.volumeReducer.volumes,
    searchString: state.volumeReducer.searchString,
  }),
);
