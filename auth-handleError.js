/*
  TOO_FREQUENT: 操作过于频繁，请稍后重试,
  NETWORK_OR_INTERNAL_ERROR: 网络或服务器内部错误,
  USERNAME_NOT_EXIST: 邮箱或手机号未注册,
  INCORRECT_USERNAME_OR_PASSWORD: 用户名或密码不正确,
  PHONE_NOT_EXIST: 手机号未注册,
  CODE_FAIL: 验证码不正确,
  EXCEED_REQ_LIMIT: 您今天发了太多次请求了，请明天再试,
  PHONE_ALREADY_EXIST: 手机号已注册
*/

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleSendSmsCodeError = (errMsg, display, getText) => {
  if (errMsg === 'EXCEED_REQ_LIMIT') return display(getText('EXCEED_REQ_LIMIT'));
  if (errMsg === 'TOO_FREQUENT') return display(getText('TOO_FREQUENT'));
  display(getText('NETWORK_OR_INTERNAL_ERROR'));
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleLoginByPasswordError = (errMsg, display, getText) => {
  if (errMsg === 'USERNAME_NOT_EXIST') return display(getText('USERNAME_NOT_EXIST'));
  if (errMsg === 'INCORRECT_USERNAME_OR_PASSWORD') 
    return display(getText('INCORRECT_USERNAME_OR_PASSWORD'));
  display(getText('NETWORK_OR_INTERNAL_ERROR'));
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleLoginBySmsCodeError = (errMsg, display, getText) => {
  if (errMsg === 'PHONE_NOT_EXIST') return display(getText('PHONE_NOT_EXIST'));
  if (errMsg === 'CODE_FAIL') return display(getText('CODE_FAIL'));
  display(getText('NETWORK_OR_INTERNAL_ERROR'));
}

/**
 * Handle error when signing in by password
 * @param {string} errMsg - error message code
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} getText - the function to process the text, e.g. intl.get
 */
const handleRegisterBySmsCodeError = (errMsg, display, getText) => {
  if (errMsg === 'CODE_FAIL') return display(getText('CODE_FAIL'));
  if (errMsg === 'PHONE_ALREADY_EXIST') return display(getText('PHONE_ALREADY_EXIST'));
  display(getText('NETWORK_OR_INTERNAL_ERROR'));
}