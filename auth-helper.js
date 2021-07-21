/* *** Exported Functions *** */
/* *** validateInput *** */
/* *** validateInputGroup *** */
/* *** sendSmsCode *** */
/* *** loginBySmsCode *** */
/* *** loginByPassword *** */
/* *** registerLoginBySmsCode *** */
/* *** sendEmailCode *** */

/**
 * validate the input of the given type
 * @param {string | boolean} input - the input
 * @param {string} inputType - the type of the input
 * @returns {boolean} test result
 */
const validateInput = (input, inputType) => {
  if (inputType === 'agreement') return input;
  if (inputType === 'phone_or_email') {
    return validateInput(input, 'phone') || validateInput(input, 'email');
  }
  const typeArray = ['phone', 'email', 'password', 'smsCode'];
  if (typeArray.includes(inputType)) {
    const format = defaultConfig.formats[`${inputType}Format`];
    return format.test(input);
  }
  return true;
}

/**
 * validate the a group of inputs
 * @param {string} inputArray - the array of inputs
 * @param {string} typeArray - the array of corresponding types
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} processText - the function to process the text, e.g. intl.get
 * @returns {boolean} test result
 */
 const validateInputGroup = (inputArray, typeArray, display, processText) => {
  const len = inputArray.length;
  for (let i = 0; i < len; i++) {
    const input = inputArray[i];
    const type = typeArray[i];
    if (!input) {
      const errCode = `NO_${type.toUpperCase()}_INPUT`;
      display(processText(errCode));
      return formatReturn('failure', errCode);
    }
    if (!validateInput(input, type)) {
      const errCode = `${type.toUpperCase()}_WRONG_FORMAT`;
      display(processText(errCode));
      return formatReturn('failure', errCode);
    }
  }
  return formatReturn('success', {});
}

/**
 * Request to send SMS Code
 * @param {string} codeBtnId - the id of send code button e.g. code-button
 * @param {string} phoneInputId - the id of phone input e.g. register_phone
 * @param {number} type - the type code
 * @param {string} api - the api
 * @param {string} url - the router name
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} processText - the function to process the text, e.g. intl.get
 * @returns {StandardReturn} return value
 */
const sendSmsCode = async (
  codeBtnId, 
  phoneInputId, 
  type,
  api = defaultConfig.apis.auth,
  url = defaultConfig.routers.sendSmsCode,
  sendCookie = true,
  display = defaultConfig.displayFunction,
  processText = defaultConfig.processTextFunction
) => {
  const codeButton = document.getElementById(codeBtnId);
  // 立即 disable 防止连按
  codeButton.disabled = true;
  const phoneInput = document.getElementById(phoneInputId);
  const phone = phoneInput.value;
  
  const valid = validateInputGroup([phone], ['phone']);
  if (!valid.success) {
    codeButton.disabled = false;
    return formatReturn('failure', valid.data);
  }

  display(processText('SMS_CODE_SENDING'));
  const handleSuccess = () => display(processText('SMS_CODE_SENT'));
  const ret = await fetchData(
    api, 
    url, 
    { phone, type }, 
    'POST', 
    sendCookie, 
    handleSuccess, 
    handleSendSmsCodeError
  );
  if (!ret.success) { 
    codeButton.disabled = false;
    return formatReturn('failure', ret.data);
  }

  let seconds = 60;
  const timer = setInterval(() => {
    seconds--;
    codeButton.innerText = seconds + `秒后重试`;
    codeButton.disabled = true;
    if (!seconds) {
      clearInterval(timer);
      codeButton.innerText = '获取验证码';
      codeButton.disabled = false;
    }
  }, 1000);
  return formatReturn('success', {});
}

/**
 * Sample Handle Login Success:
 * () => { memoryUtils.isLogin = 'login'; history.push('/home'); }
 */

/**
 * Implement login by sms code function
 * @param {string} phone - the id of send code button e.g. code-button
 * @param {string} smsCode - the id of phone input e.g. register_phone
 * @param {number} loginType - the type code of LOGIN
 * @param {function} handleLoginSuccess - what to do after login success
 * @param {string} api - the api
 * @param {string} url - the router name
 * @param {boolean} sendCookie - set withCredential
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} processText - the function to process the text, e.g. intl.get
 * @returns {StandardReturn} - the return value
 */
const loginBySmsCode = (
  phone, 
  smsCode, 
  loginType, 
  handleLoginSuccess,
  api = defaultConfig.apis.auth,
  url = defaultConfig.routers.loginBySmsCode,
  sendCookie = true,
  display = defaultConfig.displayFunction,
  processText = defaultConfig.processTextFunction,
) => {
  const inputArray = [phone, smsCode];
  const typeArray = ['phone', 'smsCode'];
  const valid = validateInputGroup(inputArray, typeArray);
  if (!valid.success) return formatReturn('failure', valid.data);

  const handleSuccess = (data) => display(processText('LOGIN_SUCCESS'));
  const ret = await fetchData(
    api, 
    url, 
    { phone, smsCode, type: loginType }, 
    'POST', 
    sendCookie, 
    handleSuccess, 
    handleLoginBySmsCodeError
  );
  if (!ret.success) return formatReturn('failure', ret.data);
  handleLoginSuccess();
}

/**
 * Implement login by password function
 * @param {string} username - email or phone 
 * @param {string} password - password
 * @param {function} handleLoginSuccess - what to do after login success
 * @param {string} api - the api
 * @param {string} url - the router name
 * @param {boolean} sendCookie - set withCredential
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} processText - the function to process the text, e.g. intl.get
 * @returns {StandardReturn} - the return value
 */
const loginByPassword = (
  username, 
  password,
  handleLoginSuccess,
  api = defaultConfig.apis.auth,
  url = defaultConfig.routers.loginByPassword,
  sendCookie = true,
  display = defaultConfig.displayFunction,
  processText = defaultConfig.processTextFunction,
) => {
  const inputArray = [username, password];
  const typeArray = ['phone_or_email', 'password'];
  const valid = validateInputGroup(inputArray, typeArray);
  if (!valid.success) return formatReturn('failure', valid.data);

  const handleSuccess = () => display(processText('LOGIN_SUCCESS'));
  const ret = await fetchData(
    api, 
    url, 
    { username, password }, 
    'POST', 
    sendCookie, 
    handleSuccess, 
    handleLoginByPasswordError
  );
  if (!ret.success) return formatReturn('failure', ret.data);
  handleLoginSuccess();
}

/**
 * Register login by SMS code
 * @param {boolean} agreement - if the user toggles the agreement
 * @param {string} smsCode - SMS code
 * @param {string} password - password
 * @param {string} phone - phone
 * @param {function} handleLoginSuccess - what to do after login success
 * @param {string} api - the api
 * @param {string} url - the router name
 * @param {boolean} sendCookie - set withCredential
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} processText - the function to process the text, e.g. intl.get
 * @returns {StandardReturn} - the return value
 */
const registerLoginBySmsCode = (
  agreement,
  smsCode,
  password,
  phone,
  handleLoginSuccess,
  api = defaultConfig.apis.auth,
  url = defaultConfig.routers.registerLoginBySmsCode,
  sendCookie = true,
  display = defaultConfig.displayFunction,
  processText = defaultConfig.processTextFunction,
) => {
  const inputArray = [agreement, smsCode, password, phone];
  const typeArray = ['agreement', 'smsCode', 'password', 'phone'];
  const valid = validateInputGroup(inputArray, typeArray);
  if (!valid.success) return formatReturn('failure', valid.data);

  const handleSuccess = () => display(processText('REGISTER_SUCCESS'));
  const ret = await fetchData(
    api, 
    url, 
    { phone, smsCode, password }, 
    'POST', 
    sendCookie, 
    handleSuccess, 
    handleRegisterBySmsCodeError
  );
  if (!ret.success) return formatReturn('failure', ret.data);
  handleLoginSuccess();
}


const sendEmailCode = async (
  emailInputId, 
  codeBtnId,   
  type,
  api = defaultConfig.apis.auth,
  url = defaultConfig.routers.sendSmsCode,
  sendCookie = true,
  display = defaultConfig.displayFunction,
  processText = defaultConfig.processTextFunction,
) => {
  const emailInput = document.getElementById(emailInputId);
  const codeButton = document.getElementById(codeBtnId);
  codeButton.disabled = true;
  const email = emailInput.value;
  
  const valid = validateInputGroup([email], ['email']);
  if (!valid.success) {
    codeButton.disabled = false;
    return formatReturn('failure', valid.data);
  }

  display(processText('EMAIL_CODE_SENDING'));
  const handleSuccess = () => display(processText('EMAIL_CODE_SENT'));
  const ret = await fetchData(
    api, 
    url, 
    { email, type }, 
    'POST', 
    sendCookie, 
    handleSuccess, 
    handleSendEmailCodeError
  );
  if (!ret.success) { 
    codeButton.disabled = false;
    return formatReturn('failure', ret.data);
  }

  let seconds = 60;
  const timer = setInterval(() => {
    seconds--;
    codeButton.innerText = seconds + `后重试`;
    codeButton.disabled = true;
    if (!seconds) {
      clearInterval(timer);
      codeButton.innerText = '获取验证码';
      codeButton.disabled = false;
    }
  }, 1000);
}