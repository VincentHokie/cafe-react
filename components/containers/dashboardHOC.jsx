import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../miscellaneous/header.jsx';
import SideBar from '../miscellaneous/sidebar.jsx';
import Base from './base.jsx';
import ErrorPage from '../miscellaneous/error.jsx';


function DashboardWrapper(Component, passedActions, passedState) {
  class BaseFilter extends Base {
    render() {
      return (
        <div>
          <Header />
          <div className="columns">
            <div className="column is-half-mobile is-two-thirds-tablet is-three-quarters-desktop is-four-fifths-widescreen is-four-fifths-fullhd">
              <div className="column is-fullwidth">
                { Component ? <Component {...this.props} /> : ''}
                {
                  this.props.errorCode ?
                    <ErrorPage
                      errorStatus={this.props.errorCode}
                      errorMessage={this.props.errorMessage}
                      userMessage={this.props.userMessage}
                    /> : ''}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    ...passedActions,
  }, dispatch);

  const mapStateToProps = state => ({
    errorMessage: state.errorReducer.errorMessage,
    errorCode: state.errorReducer.errorCode,
    userMessage: state.errorReducer.userMessage,
    ...passedState(state),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BaseFilter);
}

export default DashboardWrapper;
