
/* authentication */

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


/* status */

export const STATUS_UPDATE = 'STATUS_UPDATE';

/* cities */

export const CITIES_UPDATE = 'CITIES_UPDATE';


/* Login Form */

export const LOGIN_FORM_UPDATE = 'LOGIN_FORM_UPDATE';
export const LOGIN_FORM_CLEAR = 'LOGIN_FORM_CLEAR';

// user primary info is saved upon login in loginAppState
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';


/* Signup Form */

export const SIGNUP_FORM_UPDATE = 'SIGNUP_FORM_UPDATE';
export const SIGNUP_FORM_CLEAR = 'SIGNUP_FORM_CLEAR';

export const SIGNUP_FORM_SUCCESS = 'SIGNUP_FORM_SUCCESS';


/* Forgot Form */

export const FORGOT_FORM_UPDATE = 'FORGOT_FORM_UPDATE';
export const FORGOT_FORM_CLEAR = 'FORGOT_FORM_CLEAR';

export const FORGOT_FORM_SUCCESS = 'FORGOT_FORM_SUCCESS';


/* Reset Form */

export const RESET_FORM_UPDATE = 'RESET_FORM_UPDATE';
export const RESET_FORM_CLEAR = 'RESET_FORM_CLEAR';

export const RESET_FORM_SUCCESS = 'RESET_FORM_SUCCESS';


export const ONBOARDING_CLEAR_MODIFIED = 'ONBOARDING_CLEAR_MODIFIED';



// Onboarding Score

export const ONBOARDING_UPDATE_SCORE = 'ONBOARDING_UPDATE_SCORE';


// Step One

export const ONBOARDING_STEPONE_FORM_UPDATE = 'ONBOARDING_STEPONE_FORM_UPDATE';
export const ONBOARDING_STEPONE_FORM_LOAD = 'ONBOARDING_STEPONE_FORM_LOAD';
export const ONBOARDING_STEPONE_FORM_SAVE = 'ONBOARDING_STEPONE_FORM_SAVE';



// Step Two

export const ONBOARDING_STEPTWO_FORM_UPDATE = 'ONBOARDING_STEPTWO_FORM_UPDATE';
export const ONBOARDING_STEPTWO_FORM_LOAD = 'ONBOARDING_STEPTWO_FORM_LOAD';
export const ONBOARDING_STEPTWO_FORM_SAVE = 'ONBOARDING_STEPTWO_FORM_SAVE';
export const GET_PROPERTY_LIST = 'GET_PROPERTY_LIST';

export const ONBOARDING_STEPTWO_UPDATE_INCOME_SOURCES = 'ONBOARDING_STEPTWO_UPDATE_INCOME_SOURCES';


// Step Three

export const ONBOARDING_STEPTHREE_FORM_UPDATE = 'ONBOARDING_STEPTHREE_FORM_UPDATE';
export const ONBOARDING_STEPTHREE_FORM_LOAD = 'ONBOARDING_STEPTHREE_FORM_LOAD';
export const ONBOARDING_STEPTHREE_FORM_SAVE = 'ONBOARDING_STEPTHREE_FORM_SAVE';
export const ONBOARDING_STEPTHREE_UPDATE_INCOME_SOURCES = 'ONBOARDING_STEPTHREE_UPDATE_INCOME_SOURCES';
export const ONBOARDING_STEPTHREE_UPDATE_LANDLORDS = 'ONBOARDING_STEPTHREE_UPDATE_LANDLORDS';



// Step Four


export const ONBOARDING_STEPFOUR_FORM_LOAD = 'ONBOARDING_STEPFOUR_FORM_LOAD';
export const ONBOARDING_STEPFOUR_FORM_UPDATE = 'ONBOARDING_STEPFOUR_FORM_UPDATE';
export const ONBOARDING_STEPFOUR_FORM_SAVE = 'ONBOARDING_STEPFOUR_FORM_SAVE';
export const ONBOARDING_STEPFOUR_FORM_CLEAR = 'ONBOARDING_STEPFOUR_FORM_CLEAR';

export const ONBOARDING_STRIPE_TRANSACTION_STATUS = 'ONBOARDING_STRIPE_TRANSACTION_STATUS';
export const ONBOARDING_DWOLLA_TRANSACTION_STATUS = 'ONBOARDING_DWOLLA_TRANSACTION_STATUS';
export const DWOLLA_VERIFIED_STATUS = 'DWOLLA_VERIFIED_STATUS';
export const DWOLLA_TOKEN = 'DWOLLA_TOKEN';
export const DWOLLA_LOAD_ACCOUNT_LIST = 'DWOLLA_LOAD_ACCOUNT_LIST';

// Step Five

export const ONBOARDING_STEPFIVE_FORM_LOAD = 'ONBOARDING_STEPFIVE_FORM_LOAD';
export const ONBOARDING_STEPFIVE_FORM_UPDATE = 'ONBOARDING_STEPFIVE_FORM_UPDATE';


// Step Six

export const ONBOARDING_STEPSIX_FORM_UPDATE = 'ONBOARDING_STEPSIX_FORM_UPDATE';
export const ONBOARDING_STEPSIX_FORM_LOAD = 'ONBOARDING_STEPSIX_FORM_LOAD';


export const ONBOARDING_STEPSIX_UPDATE_ROOMMATES = 'ONBOARDING_STEPSIX_UPDATE_ROOMMATES';
export const ONBOARDING_STEPSIX_UPDATE_MANDATE_TYPE = 'ONBOARDING_STEPSIX_UPDATE_MANDATE_TYPE';

export const ONBOARDING_INVITE_STATUS = 'ONBOARDING_INVITE_STATUS';

export const ONBOARDING_COMPLETE = 'ONBOARDING_COMPLETE';

// Feedback

export const FEEDBACK_DECRYPT_TOKEN = 'FEEDBACK_DECRYPT_TOKEN';
export const FEEDBACK_SET_STATES_LIST = 'FEEDBACK_SET_STATES_LIST';
export const FEEDBACK_SET_CITIES_LIST = 'FEEDBACK_SET_CITIES_LIST';
export const FEEDBACK_FORM_UPDATE = 'FEEDBACK_FORM_UPDATE';
export const FEEDBACK_FORM_CLEAR = 'FEEDBACK_FORM_CLEAR';
export const FEEDBACK_FORM_SUBMIT = 'FEEDBACK_FORM_SUBMIT';

export const FEEDBACK_FORM_HIDE_SUBMIT_BUTTON = 'FEEDBACK_FORM_HIDE_SUBMIT_BUTTON';
export const FEEDBACK_FORM_HIDE_SUBMIT_AND_SIGNUP_BUTTON = 'FEEDBACK_FORM_HIDE_SUBMIT_AND_SIGNUP_BUTTON';



// Checkout

export const CHECKOUT_LOAD = 'CHECKOUT_LOAD';
export const CHECKOUT_FORM_UPDATE = 'CHECKOUT_FORM_UPDATE';
export const CHECKOUT_FORM_CLEAR = 'CHECKOUT_FORM_CLEAR';
export const CHECKOUT_APPLY_DISCOUNT = 'CHECKOUT_APPLY_DISCOUNT';
export const CHECKOUT_REMOVE_SERVICE = 'CHECKOUT_REMOVE_SERVICE';
export const CHECKOUT_FINISH = 'CHECKOUT_FINISH';

// Verify

export const VERIFY_DECRYPT_TOKEN = 'VERIFY_DECRYPT_TOKEN';
export const VERIFY_FORM_UPDATE = 'VERIFY_FORM_UPDATE';
export const VERIFY_FORM_CLEAR = 'VERIFY_FORM_CLEAR';
export const VERIFY_FORM_SUBMIT = 'VERIFY_FORM_SUBMIT';

export const ACCOUNT_LOAD = 'ACCOUNT_LOAD';
export const ACCOUNT_UPDATE = 'ACCOUNT_LOAD';
export const ACCOUNT_EDIT_MODE = 'ACCOUNT_EDIT_MODE';

export const SIDEBAR_MENU_UPDATE = 'SIDEBAR_MENU_UPDATE';
export const SIDEBAR_MENU_HIDE = 'SIDEBAR_MENU_HIDE';

export const PROFILE_LOAD = 'PROFILE_LOAD';
export const DASHBOARD_PROFILEPIC_SAVE = 'DASHBOARD_PROFILEPIC_SAVE';
export const DASHBOARD_USER_SAVE = 'DASHBOARD_USER_SAVE';
export const DASHBOARD_F2R_SCORE_UPDATE = 'DASHBOARD_F2R_SCORE_UPDATE';

// Action type to simulate payment received.
export const RECEIVE_DOCUMENT_PAYMENT = 'RECEIVE_DOCUMENT_PAYMENT';

export const ACCOUNT_DOCUMENTS_LOAD = 'ACCOUNT_DOCUMENTS_LOAD';
export const ACCOUNT_DOCUMENTS_UPDATE = 'ACCOUNT_DOCUMENTS_UPDATE';
export const ACCOUNT_DOCUMENTS_FORM_LOAD = 'ACCOUNT_DOCUMENTS_FORM_LOAD';
export const ACCOUNT_DOCUMENTS_FORM_UPDATE = 'ACCOUNT_DOCUMENTS_FORM_UPDATE';
export const ACCOUNT_DOCUMENTS_SAVE = 'ACCOUNT_DOCUMENTS_SAVE';

export const PROPERTIES_LIST_LOAD = 'PROPERTIES_LIST_LOAD';
