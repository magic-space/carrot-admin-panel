import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import CreateProfile from '../components/CreateProfile';
import ProfilesTable from '../components/ProfilesTable';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CreateProfile
          createProfile={this.props.actions.createProfile}
        />
        <ProfilesTable
          profiles={this.props.profiles}
          deleteCarrots={this.props.actions.deleteCarrots}
          addCarrots={this.props.actions.addCarrots}
          deleteProfile={this.props.actions.deleteProfile}
        />
      </div>
    );
  }
}

App.propTypes = {
  profiles: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { profiles: state.profiles };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);