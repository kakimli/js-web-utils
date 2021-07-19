/*
api 是 /xxxx
ajax 中函数名是 xxxx
调用 try catch 是 xxxxWrap
数据存储是 resYyyy
进行校验与更新存储叫 getResYyyy
*/
import axios from 'axios';

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

const getData = async (api, url, params, method, sendCookie, handleSuccess, handleError) => {
  /*
    handleSuccess: function (e.g. setResGraph),
    handleError: function (errMsg => { ... })
  /*
    Api return value format:
    { success: boolean, data: object | string }
    Success => data object, Failure => error message
  */
  const res = (await callApi(api, url, params, method, sendCookie)) || {};
  if (!res.success) return handleError(res.data);
  handleSuccess(res.data);
}