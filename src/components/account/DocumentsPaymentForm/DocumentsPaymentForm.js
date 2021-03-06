import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import { Button, Col, Collapse, Form, Row } from 'react-bootstrap';
import { renderInput } from '../../ReduxFormFields';

export default class DocumentsPaymentForm extends Component {
  static propTypes = {
    receiveDocumentPayment: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleSubmitPayment = (values) => {
    const { receiveDocumentPayment } = this.props;
    receiveDocumentPayment();
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  renderFooter() {
    const { submitting, errors, submitSucceeded } = this.props;
    return (
      <div className="text-right">
        <div className="documents-payment-submit-wrap">
          <Button
            className="submit-button"
            bsStyle="success"
            disabled={submitting}
            type="submit">
            {submitting && <div className="spinner"><ButtonSpinner /></div>}
            <div className="text">Submit Payment</div>
          </Button>
        </div>
        <p className="payment-agreement-text">
          By submitting this form you agree to our Terms of Service. 
        </p>
      </div>
    );
  }

  renderForm(){
    const { handleSubmit, newPwd } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.handleSubmitPayment)}>
        <div className="section">
          Change Password
        </div>
        <Row>
          <Col xs={6}>
            <div className="documents-payment-form-heading">Name on Card</div>
            <Field name="firstName"
              placeholder="First Name"
              type="text"
              component={renderInput} />

            <Field name="lastName"
              placeholder="Last Name"
              type="text"
              component={renderInput} />
            <hr />

            <div className="documents-payment-form-heading">Billing Method</div>
            <div className="documents-payment-methods">
              <span className="payment-method-radio">
                <img src="/images/documents/americanexpress.png" alt="AmericanExpress" />
                <label><Field name="billingMethod" component="input" type="radio" value="AmericanExpress" /></label>
              </span>
              <span className="payment-method-radio">
                <img src="/images/documents/mastercard.png" alt="Mastercard" />
                <label><Field name="billingMethod" component="input" type="radio" value="Mastercard" /></label>
              </span>
              <span className="payment-method-radio">
                <img src="/images/documents/visa.png" alt="VISA" />
                <label><Field name="billingMethod" component="input" type="radio" value="VISA" /></label>
              </span>
              <span className="payment-method-radio">
                <img src="/images/documents/discover.png" alt="DISCOVER" />
                <label><Field name="billingMethod" component="input" type="radio" value="DISCOVER" /></label>
              </span>
            </div>

            <Field name="cardNumber"
              placeholder="Card Number"
              type="text"
              component={renderInput} />

            <Row className="row-narrow">
              <Col sm={6}>
                <Field name="cardExpirationDate"
                  placeholder="Card Expiration Date"
                  type="text"
                  component={renderInput} />
              </Col>
              <Col sm={6}>
                <Field name="cardVerificationCode"
                  placeholder="Card Verification Code"
                  type="text"
                  component={renderInput} />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <div className="documents-payment-form-heading">Billing Address</div>
            <Field name="streetAddress"
              placeholder="Street Address"
              type="text"
              component={renderInput} />

            <Field name="city"
              placeholder="City"
              type="text"
              component={renderInput} />

            <Row className="row-narrow">
              <Col sm={6}>
                <Field name="state"
                  placeholder="State"
                  type="text"
                  component={renderInput} />
              </Col>
              <Col sm={6}>
                <Field name="zipcode"
                  placeholder="Zip Code"
                  type="text"
                  component={renderInput} />
              </Col>
            </Row>

            <hr />

            <div className="documents-payment-form-heading">
              Document Storage
              <span className="pull-right">$2.99 per month</span>
            </div>

            <Row className="center-aligned row-narrow">
              <Col xs={10} className="payment-agreement-text">
                We’ll keep this payment method on file for you subscriptions,{' '}
                but if you want to save this card for future F2R services, check this box.
              </Col>
              <Col xs={2}>
                <label><Field name="agree" component="input" type="checkbox" /></label>
              </Col>
            </Row>

            <hr />

          </Col>
        </Row>
        {this.renderFooter()}
      </Form>
    );
  }

  render(){
    return (
      <div className="documents-payment-form">
      <div className="storage-invite">
        <b>
          Our Server Storage Costs require that we $2.99 per month to use this feature.
          <br/>
          Would you like to sign up?
        </b>
        <Button bsStyle="primary" onClick={this.toggleOpen}>Heck Yeah!</Button>
      </div>
      <Collapse in={this.state.open}>
        {this.renderForm()}
      </Collapse>
      </div>
    );
  }
}
