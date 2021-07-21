/* **** GENERAL **** */
const TOO_FREQUENT = "操作过于频繁，请稍后重试";
const NETWORK_OR_INTERNAL_ERROR = "网络或服务器内部错误";
const EXCEED_REQ_LIMIT = "您今天发了太多次请求了，请明天再试";
const SEND_SUCCESS = "发送成功";

/* **** LOGIN **** */
const REQUEST_LOGIN_FAIL = "发送登录请求失败";
const EMAIL_OR_PHONE_NOT_EXIST = "邮箱或手机号未注册";
const USERNAME_OR_PASSWORD_FAIL = "用户名或密码不正确";
const PHONE_NOT_EXIST = "手机号未注册";
const LOGIN_SUCCESS = "登录成功!";

/* **** REGISTER **** */
const REQUEST_REGISTER_FAIL = "发送注册请求失败";
const NOT_TOGGLE_AGREEMENT = "请勾选用户协议";
const PHONE_EXIST = "手机号已注册!";
const REGISTER_SUCCESS = "注册成功!"

/* **** SMS CODE **** */
const SEND_SMS_CODE_FAIL = "验证码发送失败";
const SMS_CODE_SENDING = "正在发送中...";
const SMS_CODE_FAIL = "验证码不正确!";
const SMS_CODE_SENT = "发送成功!";

/* **** EMAIL CODE **** */
const SEND_EMAIL_CODE_FAIL = "发送邮箱验证码失败";
const EMAIL_CODE_SENDING = "正在发送中...";
const EMAIL_CODE_SENT = "发送成功!";

/* **** BIND EMAIL **** */
const BIND_EMAIL_FAIL = "绑定邮箱失败";
const NO_EMAIL_CODE = "请输入邮箱验证码";
const NO_SMS_CODE_EMAIL = "请输入短信验证码";
const EMAIL_CODE_FAIL = "邮箱验证码错误";
const SMS_CODE_FAIL_EMAIL = "短信验证码错误";
const BIND_EMAIL_SUCCESS = "绑定成功!";

/* **** BIND NEW PHONE **** */
const BIND_NEW_PHONE_FAIL = "换绑手机失败";
const NO_NEW_PHONE_INPUT = "请输入新手机号";
const NO_NEW_PHONE_SMS_CODE = "请输入新手机号的验证码";
const NO_CURR_PHONE_SMS_CODE = "请输入当前手机号的短信验证码";
const NEW_PHONE_SMS_CODE_FAIL = "新手机号短信验证码错误";
const CURR_PHONE_SMS_CODE_FAIL = "当前手机号短信验证码错误";
const BIND_NEW_PHONE_SUCCESS = "换绑成功!";

/* **** AUTHENTICATION **** */
const SESSION_FAIL = "您的身份信息已失效";

/* **** CHANGE PASSWORD **** */
const NO_NEW_PASSWORD = "请输入新密码";
const NO_CONFIRM_PASSWORD = "请确认新密码";
const NEW_PASSWORD_WRONG_FORMAT = "新密码格式有误";
const TWO_PASSWORD_NOT_MATCH = "两次输入的密码不匹配";
const CHANGE_PASSWORD_SUCCESS = "修改密码成功";

/* **** VALIDATION **** */
const NO_PHONE_INPUT = "请输入手机号码";
const NO_SMSCODE_INPUT = "请输入验证码";
const NO_PASSWORD_INPUT = "请输入密码";
const NO_EMAIL_INPUT = "请输入邮箱地址";
const NO_PHONE_OR_EMAIL_INPUT = "请输入邮箱或手机号";
const NO_AGREEMENT_INPUT = "请勾选用户协议";
const PHONE_WRONG_FORMAT = "手机号码格式有误";
const SMSCODE_WRONG_FORMAT = "短信验证码格式有误";
const PASSWORD_WRONG_FORMAT = "密码需由8-32位数字字母组合而成";
const EMAIL_WRONG_FORMAT = "邮箱地址格式有误";
const PHONE_OR_EMAIL_WRONG_FORMAT = "邮箱或手机号格式有误";