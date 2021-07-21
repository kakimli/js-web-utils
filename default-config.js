const defaultConfig = {
  apis: {
    auth: 'xxxx'
  },
  routers: {
    
  },
  formats: {
    phoneFormat: /^[1][3-8][0-9]{9}$/,
    passwordFormat: /^(?=.*[A-z])(?=.*\d)[^]{8,32}$/,
    smsCodeFormat: /^[0-9]{6}$/,
    emailFormat: /^[a-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+(?:\.[a-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i
  },
  displayFunction: (text) => console.log(text),
  processTextFunction: (text) => text
}