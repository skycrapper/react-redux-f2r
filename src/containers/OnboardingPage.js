import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';

import smoothScroll from 'smooth-scroll';

import * as BS from 'react-bootstrap';
import _ from 'underscore';

import SidebarContainer from '../containers/SidebarContainer';
import StatusBar from '../components/StatusBar';

import StepOneForm from '../components/onboarding/StepOneForm';
import StepTwoForm from '../components/onboarding/StepTwoForm';
import StepThreeForm from '../components/onboarding/StepThreeForm';
import StepFourForm from '../components/onboarding/StepFourForm';
import StepFiveForm from '../components/onboarding/StepFiveForm';
import StepSixForm from '../components/onboarding/StepSixForm';

import * as actions from '../actions/onboardingLandlordActions';

import * as api from '../actions/api';

const startTooltip = (
  <span>
    <h7><b>Start Here</b></h7>
    <p>Complete these six simple steps to create your profile and explain your rental requirements. Tell your story with a personal description and harness the value of your network by connecting your social media accounts.</p>
  </span>
);

const endTooltip = (
  <span>
    <h7><b>The Rent Mandate</b></h7>
    <p>You’re almost finished! Your F2R score is climbing and it is time to complete your Rent Mandate. Use this section to tell us your rental requirements and make sure you find the place of your dreams.</p>
  </span>
);

const headerData = [
  {title: 'Step 1 of 6', subtitle: 'Tell us about yourself', tooltip: '', icon: 'user', extraTooltip: startTooltip },
  {title: 'Step 2 of 6', subtitle: 'Tell us about what you do', tooltip: 'Here is where you give us your employment information and HR contact so we can verify how awesome you are.', icon: 'briefcase' },
  {title: 'Step 3 of 6', subtitle: 'Tell us about where you\'ve been', tooltip: 'Let your rental history help tell your story! Improve your F2R score by sharing past landlord contact information. We’ll collect referrals on your behalf.', icon: 'globe' },
  {title: 'Step 4 of 6', subtitle: 'Gain your advantage', tooltip: 'Money talks! Stand out to future landlords by posting a security deposit or including a guarantor to show off your ability to pay.', icon: 'check' },
  {title: 'Step 5 of 6', subtitle: 'Show your credibility', tooltip: 'We\'ll help you get a free credit report so you can show you are a responsible, financially ready renter.', icon: 'lock' },
  {title: 'Step 6 of 6', subtitle: 'Create your rent mandate', tooltip: '', icon: 'flag', extraTooltip: endTooltip }
];

const stepTips = [
  {heading: 'Do you have social status?', text: 'The power of your network is one of the best predictors of future success. Linking your social media accounts can help give you a leg up on the tenant competition.'},
  {heading: 'More than anything...', text: 'Telling us what you do and who you work for is the biggest assurance you can provide to your future landlord. We verify this information directly with your employer and the benefit you receive is being viewed as a sure thing for all the properties to which you apply.'},
  {heading: 'Landlords want to know', text: 'Nothing says more about your renting dependability than the endorsements of those whom you’ve rented from previously. Ask for their feedback and when their submissions are received, your score will take off. Don’t let them forget to complete their reviews though...your score depends on it!'},
  {heading: 'Show you’re ready to move', text: 'We recommend posting a deposit that equates to the size of the monthly rent you’re looking to pay. Why? Because it gives landlords a clear indication that you’re capable of acting fast. Without it they have no assurance that you have the means to rent from them.'},
  {heading: 'The importance of credit reports', text: 'Credit reports give landlords a view into your financial condition and your ability to afford their rent.  We incorporate aspects of your report into your score as well as our recommendations on the rent amount you should be targeting.'},
  {heading: 'Selecting your criteria', text: 'A wide range of desired characteristics helps us expand your search and increase the number of potential properties. We are happy to be your matchmaker in the rental world!'}
];

const STEP_IDS = ['stepOneForm', 'stepTwoForm', 'stepThreeForm', 'stepFourForm', 'stepFiveForm'];


class OnboardingPage extends Component {

  state = {
    activeKey: '0',

    // onboarding status
    hasNotCheckedOut: true,
    canSkipStep6: false,

    // statusbar
    showStatusBarMargin: true
  }

  constructor(){
    super();

    // fixes function reference in add/removeEventListener
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount(){
    this.props.actions.updateOnboardingScore();
  }

  componentDidMount(){
    this.context.router.setRouteLeaveHook(this.props.route, this.confirmNavigation.bind(this));

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    this.clearModified();
    this.props.actions.undoComplete();
    this.setState({
      activeKey: '0',
      hasNotCheckedOut: true,
      canSkipStep6: false
    });

    window.removeEventListener('scroll', this.handleScroll);
  }

  // track scrolling to show/hide the margin on the statusbar
  handleScroll(e){
    let scrollTop = e.srcElement.body.scrollTop;
    let showStatusBarMargin = this.state.showStatusBarMargin;

    if (scrollTop > 65 && showStatusBarMargin) {
      this.setState({
        showStatusBarMargin: false
      });
    } else if (scrollTop < 65 && !showStatusBarMargin) {
      this.setState({
        showStatusBarMargin: true
      });
    }
  }

  confirmNavigation(callback){
    if (this.isModified()){
      if(confirm(this.confirmMessage('page'))){
        return true;
      }else{
        return false;
      }
    }
  }


  handleSelect(activeKey) {
    if(this.isModified() && activeKey != this.state.activeKey){
      if (confirm(this.confirmMessage('step'))){
        this.clearModified();
        this.setState({ activeKey });
        this.checkoutReady();
      }else{
        return false;
      }
    }else{
      this.setState({ activeKey });
      // this.props.actions.updateOnboardingScore();
      this.checkoutReady();
    }
  }

  openNextStep() {
  
    let nextStep = parseInt(this.state.activeKey) + 1;
    this.handleSelect(nextStep.toString());
  }

  showConnectAccount() {
    this.state.showConnectAccount=true;
  }

  scrollToPanel(e){
    smoothScroll.animateScroll(e.offsetTop);
  }

  isModified() {
    return _.contains(this.props.appState.status['modified'], true);
  }

  clearModified(){
    api.clearModified(this.context.store.dispatch);
  }

  confirmMessage(term){
    return `You have unsaved changes.  Are you sure you want to leave this ${term}?`;
  }

  checkoutReady() {
    this.props.actions.getCheckoutReady((status) => {
      this.setState({
        hasNotCheckedOut: status.hasNotCheckedOut,
        canSkipStep6: status.canSkipStep6
      });
    });
  }

  handleBackToOnboarding() {
    let reviewingProfile = true;
    this.props.actions.undoComplete(reviewingProfile);
  }

  renderHeader(data) {
    let tooltip = (<BS.Tooltip id="onboarding-header-tooltip"><span>{data.extraTooltip ? data.extraTooltip : null}{data.tooltip}</span></BS.Tooltip>);
    return (
      <div className="panel-header">
        <div className="icon">
          <BS.Glyphicon glyph={data.icon} />
        </div>
        <div className="description">
          <span>{data.title}</span>
          <span>{data.subtitle}</span>
        </div>
        <BS.OverlayTrigger onClick={(e) => {e.stopPropagation(); e.preventDefault()}} placement="left" overlay={tooltip}>
          <div className="help">
            <BS.Glyphicon glyph="info-sign" />
          </div>
        </BS.OverlayTrigger>
      </div>
    );
  }

  renderTip(tip){
    return tip[this.state.activeKey]
  }


  render() {

    const userInfo = this.context.store.getState().loginAppState.userInfo;



    const stepOne =
    (
      <StepOneForm
      load={this.props.actions.loadStepOne}
      save={this.props.actions.saveStepOne}
      update={this.props.actions.updateStepOneForm}
      upload={this.props.actions.uploadProfilePic}
      appState={this.props.appState}
      openNextStep={this.openNextStep.bind(this)}
      updateOnboardingScore={this.props.actions.updateOnboardingScore}
      showProceed={this.state.hasNotCheckedOut}
      userInfo={userInfo} />
    );
    const stepTwo =
    (
      <StepTwoForm
      load={this.props.actions.loadStepTwo}
      save={this.props.actions.saveStepTwo}
      update={this.props.actions.updateStepTwoForm}
      upload={this.props.actions.uploadIncomeDoc}
      appState={this.props.appState}
      openNextStep={this.openNextStep.bind(this)}
      updateOnboardingScore={this.props.actions.updateOnboardingScore}
      showProceed={this.state.hasNotCheckedOut } />
    );
    const stepThree =
    (
      <StepThreeForm
      load={this.props.actions.loadStepThree}
      save={this.props.actions.saveStepThree}
      update={this.props.actions.updateStepThreeForm}
      appState={this.props.appState}
      openNextStep={this.openNextStep.bind(this)}
      updateOnboardingScore={this.props.actions.updateOnboardingScore}
      showProceed={this.state.hasNotCheckedOut} />
    );
    const stepFour =
    (
      <StepFourForm
      appState={this.props.appState}
      loadDwolla={this.props.actions.loadDwolla}
      saveDwolla={this.props.actions.saveDwolla}
      saveGuarantor={this.props.actions.saveGuarantor}
      saveStripe={this.props.actions.saveStripe}
      update={this.props.actions.updateStepFourForm}
      clear={this.props.actions.clearStepFourForm}
      openNextStep={this.openNextStep.bind(this)}
      load={this.props.actions.loadStepFour}
      updateOnboardingScore={this.props.actions.updateOnboardingScore}
      showProceed={this.state.hasNotCheckedOut} />
    );
    const stepFive =
    (
      <StepFiveForm
      load={this.props.actions.loadStepFive}
      uploadCreditReport={this.props.actions.uploadCreditReport}
      uploadSupportingDoc={this.props.actions.uploadSupportingDoc}
      appState={this.props.appState}
      openNextStep={this.openNextStep.bind(this)}
      updateOnboardingScore={this.props.actions.updateOnboardingScore}
      showProceed={this.state.hasNotCheckedOut && !this.state.canSkipStep6} />
    );
    const stepSix =
    (
      <StepSixForm
      load={this.props.actions.loadStepSix}
      save={this.props.actions.saveStepSix}
      update={this.props.actions.updateStepSixForm}
      appState={this.props.appState}
      updateOnboardingScore={this.props.actions.updateOnboardingScore} />
    );

    const steps = [stepOne,stepTwo,stepThree,stepFour,stepFive];
    const panel = [];
    panel[this.state.activeKey] = steps[this.state.activeKey];

    const stepPanels =
    (
      <BS.PanelGroup
      activeKey={this.state.activeKey}
      onSelect={this.handleSelect.bind(this)} accordion>

        <BS.Panel
        onEntered={this.scrollToPanel.bind(this)}
        header={this.renderHeader(headerData[0])}
        eventKey="0">
          {panel[0]}
        </BS.Panel>
        <BS.Panel
        onEntered={this.scrollToPanel.bind(this)}
        header={this.renderHeader(headerData[1])}
        eventKey="1">
          {panel[1]}
        </BS.Panel>
        <BS.Panel
        onEntered={this.scrollToPanel.bind(this)}
        header={this.renderHeader(headerData[2])}
        eventKey="2">
          {panel[2]}
        </BS.Panel>
        <BS.Panel
        onEntered={this.scrollToPanel.bind(this)}
        header={this.renderHeader(headerData[3])}
        eventKey="3">
          {panel[3]}
        </BS.Panel>
        <BS.Panel
        onEntered={this.scrollToPanel.bind(this)}
        header={this.renderHeader(headerData[4])}
        eventKey="4">
          {panel[4]}
        </BS.Panel>
        <BS.Panel
        onEntered={this.scrollToPanel.bind(this)}
        header={this.renderHeader(headerData[5])}
        eventKey="5">
          {panel[5]}
        </BS.Panel>

      </BS.PanelGroup>
    );

    const completePanelTitle =
    (
      <h2>Great Work!</h2>
    );
    const completePanel =
    (
      <BS.Panel header={completePanelTitle} className="ready-checkout-panel" bsStyle="success">
        <div className="complete-content">
          <p className="text-success complete-content-lead">Congrats! You've just filled out your best rental application ever!</p>
          {this.state.hasNotCheckedOut ? (
            <div className="complete-content-container">
              <div className="complete-content-image" style={{backgroundImage: 'url("/onboarding/dog_ready_checkout_resized.jpg")'}} />
              <p className="complete-content-text">You've completed your end of the bargain; now let us do our part.<br />Submit your payment information to complete your purchase, and we’ll get started generating your report.</p>
              <p className="complete-content-text">Thank you for becoming an empowered renter!</p>
              <div className="complete-checkout">
                <Link to="/checkout">
                  <BS.Button
                    bsStyle="success"
                    bsSize="lg">
                    Proceed to Checkout
                  </BS.Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p>You've already submitted your payment information and we are in the process of generating your report.</p>
              <p>Should you have any questions while we’re busy confirming your entries, please email us at <a href="mailto:customersupport@fittorent.com" target="_blank">customersupport@fittorent.com</a>.</p>
            </div>
          )}
        </div>
        <div className="complete-footer">
          <BS.Button
            bsStyle="default"
            onClick={this.handleBackToOnboarding.bind(this)}>
            Review Your Profile
          </BS.Button>
        </div>
      </BS.Panel>
    );

    // conditions for showing checkout button in sidebar
    const showSidebarCheckoutButton = (
      // user is on step 5 or 6,
      // user is invited (can skip step 6),
      // user has not checked out yet
      parseInt(this.state.activeKey) >= 4 &&
      this.state.canSkipStep6 &&
      this.state.hasNotCheckedOut
    ) || (
      // user is not viewing "proceed to checkout" screen
      // user already went through onboarding,
      // user has not checked out
      !this.props.appState.complete &&
      this.props.appState.reviewingProfile &&
      this.state.hasNotCheckedOut
    );

    const welcomeText = (
      <div  className="welcome-text">
        <BS.Panel>
          <p>Let’s build your reputation and generate your F2R Score!</p>
          <p>It’s <i>your</i> home, <i>your</i> life. . . start taking control</p>
        </BS.Panel>
      </div>
    );

    return (
      <div className="onboarding-page">
        <BS.Col xsHidden sm={3} md={3}>
          <SidebarContainer showCheckout={showSidebarCheckoutButton} />
        </BS.Col>

        <BS.Col xs={12} sm={9} md={6} className="panels">

          {this.props.appState.complete ? null : welcomeText}

          {this.props.appState.complete ? completePanel : stepPanels}

        </BS.Col>

        <BS.Col xsHidden smHidden md={3}>
          <StatusBar
          tip={this.renderTip(stepTips)}
          showMargin={this.state.showStatusBarMargin}
          appState={this.props.appState}
          store={this.context.store.getState()} />
        </BS.Col>

      </div>
    );
  }
}

OnboardingPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

OnboardingPage.contextTypes = {
  store: PropTypes.object,
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.onboardingAppState,
    userState: state.loginAppState
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
)(OnboardingPage);
