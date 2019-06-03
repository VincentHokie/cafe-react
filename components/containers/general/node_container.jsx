import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';
import GeneralSubnav from '../../subcomponents/subnavs/general/general_subnav.jsx';
import NodeService from '../../../actions/node_service.jsx';
import NodeTable from '../../subcomponents/tables/node.jsx';


class NodeContainer extends Base {
  componentDidMount() {
    this.props.getNodes();
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          <GeneralSubnav
            searchWord="node"
            search={this.props.nodeSearch}
          />
        </Columns.Column>
        <Columns.Column className="tile is-ancestor is-12" style={{ flexWrap: 'wrap' }}>
          <NodeTable
            secrets={this.props.nodes}
            push={this.pushNavigation}
            searchString={this.props.searchString}
          />
        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  NodeContainer,
  { ...NodeService },
  state => ({
    nodes: state.nodeReducer.nodes,
    searchString: state.nodeReducer.searchString,
  }),
);
