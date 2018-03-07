import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/accountActions';
import PageTitle from '../components/account/PageTitle';
import TabEditablePanel from '../components/account/TabEditablePanel';
import ProfileInfo from '../components/account/ProfileInfo';
import DocumentsInfo from '../components/account/DocumentsInfo';
import PasswordInfo from '../components/account/PasswordInfo';

class AccountSummaryPage extends Component {
  render() {
    let {accountState, actions} = this.props;
    return (
      <div>
        <PageTitle>My Account > Summary</PageTitle>

        <TabEditablePanel title="Profile"
                          editMode={accountState.editMode.profile}
                          onClick={(value) => actions.editModeUpdate('profile', value)}
        >
          <ProfileInfo accountState={accountState}
                       actions={actions}
                       editMode={accountState.editMode.profile}
          />
        </TabEditablePanel>

        <TabEditablePanel title="Documents"
                          editMode={accountState.editMode.documents}
                          onClick={(value) => actions.editModeUpdate('documents', value)}
        >
          <DocumentsInfo accountState={accountState}
                         actions={actions}
                         editMode={accountState.editMode.documents}
          />
        </TabEditablePanel>

        <TabEditablePanel title="Login/Password"
                          editMode={accountState.editMode.password}
                          onClick={(value) => actions.editModeUpdate('password', value)}
        >
          <PasswordInfo  accountState={accountState}
                         actions={actions}
                         editMode={accountState.editMode.password}
          />
        </TabEditablePanel>

      </div>
    );
  }
}

AccountSummaryPage.propTypes = {
  actions: PropTypes.object.isRequired,
  accountState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    accountState: state.accountAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSummaryPage);
