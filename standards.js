/**
 * StandardReturn:
 * The return value format of functions
 * @member {boolean} success - success or failure
 * @member {any} data - data object or error message
 */

/**
 * Return a formatted return value
 * @param {string} success - 'success', 'failure', easy to understand in the code
 * @param {any} data - the return data or error message
 * @returns {StandardReturn} formatted return value
 */
const formatReturn = (success, data) => {
  return { success, data };
}

/**
 * GENERAL:
 * CALL_API_FAIL: 调用 API 失败
 * LOGIN:
 * LOGIN_SUCCESS: 登录成功
 */