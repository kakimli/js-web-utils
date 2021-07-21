/* *** Exported Functions *** */
/* *** handleSendSmsCodeError *** */
/* *** handleLoginByPasswordError *** */
/* *** handleLoginBySmsCodeError *** */
/* *** handleLoginBySmsCodeError *** */
/* *** handleRegisterBySmsCodeError *** */
/* *** handleSendEmailCodeError *** */

/**
 * A wrapper function of error handlers
 * @param {Array.<string>} errMsgArray - specific error messages
 * @param {string} errMsg - the given error message
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleErrorWrap = (errMsgArray, errMsg, display, getText) => {
  if (errMsgArray.includes(errMsg)) {
    return display(getText(errMsg));
  }
  display(getText('NETWORK_OR_INTERNAL_ERROR'));
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleSendSmsCodeError = (errMsg, display, getText) => {
  const errMsgArray = [
    'EXCEED_REQ_LIMIT', 
    'TOO_FREQUENT', 
    'PHONE_WRONG_FORMAT'
  ];
  handleErrorWrap(errMsgArray, errMsg, display, getText);
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleLoginByPasswordError = (errMsg, display, getText) => {
  const errMsgArray = [
    'EMAIL_OR_PHONE_NOT_EXIST', 
    'USERNAME_OR_PASSWORD_FAIL'
  ];
  handleErrorWrap(errMsgArray, errMsg, display, getText);
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleLoginBySmsCodeError = (errMsg, display, getText) => {
  const errMsgArray = ['PHONE_NOT_EXIST', 'SMS_CODE_FAIL'];
  handleErrorWrap(errMsgArray, errMsg, display, getText);
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleRegisterBySmsCodeError = (errMsg, display, getText) => {
  const errMsgArray = ['SMS_CODE_FAIL', 'PHONE_EXIST'];
  handleErrorWrap(errMsgArray, errMsg, display, getText);
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
 const handleRegisterBySmsCodeError = (errMsg, display, getText) => {
  const errMsgArray = ['SMS_CODE_FAIL', 'PHONE_EXIST'];
  handleErrorWrap(errMsgArray, errMsg, display, getText);
}

/**
 * Handle error when sending email code
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
 const handleSendEmailCodeError = (errMsg, display, getText) => {
  const errMsgArray = [
    'EXCEED_REQ_LIMIT', 
    'TOO_FREQUENT', 
    'EMAIL_WRONG_FORMAT'
  ];
  handleErrorWrap(errMsgArray, errMsg, display, getText);
}