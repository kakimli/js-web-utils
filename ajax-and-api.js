import axios from 'axios';
/*
import returnFormat from './standards.js';
*/

const sendReq = async (api, url, params = {}, method = 'GET', sendCookie = false) => {
  /* 
    api: string (eg. xxx.com),
    url: string (eg. /xx/xxx),
    params: object = {},
    method: 'GET' | 'POST' = 'GET',
    sendCookie: boolean = false (withCredential)
  */
  if (method === 'GET') {
    return await axios.get(`${api}${url}`, {
      params,
      withCredentials: sendCookie
    })
  }
  if (method ==='POST') {
    return await axios.post(`${api}${url}`, params, {
      withCredentials: sendCookie
    })
  }
}

/*
  example of failCallback:
  (e) => {
    console.log(`${method} ${api}${url} failed: ${e.toString()}`);
    message.error(e.toString());
  }
*/

const callApi = async (api, url, params, method, sendCookie, failCallback) => {
  /*
    failCallBack: (e) => {...}
    The callback function when calling api fails
  */
  try {
    const res = await sendReq(api, url, params, method, sendCookie);
    return res.data;
  } catch (e) {
    failCallback(e);
  }
}

/**
 * Convert to update time string (en-US)
 * @param {string} codeBtnId - the id of send code button e.g. code-button
 * @param {string} phoneInputId - the id of phone input e.g. register_phone
 * @param {function} display - the feedback function to user, e.g. message.error
 * @param {function} processText - the function to process the text, e.g. intl.get
 * @returns {string} update time string
 */
const fetchData = async (api, url, params, method, sendCookie, handleSuccess, handleError) => {
  /*
    handleSuccess: function (e.g. setResGraph),
    handleError: function (errMsg => { ... })
  /*
    Api return value format:
    { success: boolean, data: object | string }
    Success => data object, Failure => error message
  */
  const res = (await callApi(api, url, params, method, sendCookie)) || {};
  if (!res.success) {
    handleError(res.data);
    return returnFormat('failure', 'CALL_API_FAIL');
  }
  handleSuccess(res.data);
  return returnFormat('success', res.data);
}