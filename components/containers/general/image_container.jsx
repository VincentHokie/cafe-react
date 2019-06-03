import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import ImageService from '../../../actions/image_service.jsx';
import ImageTable from '../../subcomponents/tables/image.jsx';


class ImageContainer extends Base {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav
            searchWord="image"
            search={this.props.imageSearch}
          />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          {
            this.props.images ?
              <ImageTable
                images={this.props.images}
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
  ImageContainer,
  { ...ImageService },
  state => ({
    images: state.imageReducer.images,
    searchString: state.imageReducer.searchString,
  }),
);
