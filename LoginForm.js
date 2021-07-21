import { Form, Input, Button, Row, Col, message } from 'antd';
import { useState } from 'react';
import { loginByPassword, reqSmsCode, loginByPhone } from '../../../api/auth';
import './LoginForm.less';
import { withRouter } from 'react-router-dom';
import memoryUtils from '../../../utils/memoryUtils';

function LoginForm ({ history }) {

  const [ type, setType ] = useState('email');

  // 发送 SMS 验证码
  const sendCode = sendCode('code-button', 'phoneForm_phone', 3);

  // 使用密码方式登录

  const onFinishPassword = async (values) => {
    const res = await loginByPasswordWrap(values.username, values.password);
    if (!res.success && res.data === 'username not exist') return message.warning('邮箱或手机号未注册');
    if (!res.success && res.data === 'password incorrect') return message.warning('用户名或密码不正确');
    if (!res.success) return message.warning('服务器内部错误');
    message.success('登录成功');
    memoryUtils.isLogin = 'login';
    history.push('/home');
  }

  const onFinishPhone = async (values) => {
    const res = await loginByPhoneWrap(values.phone, 3, values.code);
    if (!res.success && res.data === 'phone not exist') return message.warning('手机号未注册');
    if (!res.success && res.data === 'code fail') return message.warning('验证码不正确');
    if (!res.success) return message.warning('服务器内部错误');
    message.success('登录成功');
    memoryUtils.isLogin = 'login'; 
    history.push('/home');
  }

  /* eslint-disable */
  return (
    <div className='loginForm'>
      <div className='title'>
        登录
      </div>
      { type === 'email' &&
        <Form
          name="emailForm"
          onFinish={onFinishPassword}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入邮箱或者手机号码!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  // eslint-disable-next-line
                  if (!value || /^[1][3-8][0-9]{9}$/.test(value) || /^[a-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+(?:\.[a-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('格式不正确!'));
                },
              }),
            ]}
          >
            <Input placeholder='请输入邮箱或者手机号码' className='common-input' />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
              {
                pattern: /^(?=.*[A-z])(?=.*\d)[^]{8,32}$/,
                message: '密码由8-32位字母数字组合而成'
              }
            ]}
          >
            <Input.Password placeholder='请输入密码' className='common-input' />
          </Form.Item>
          <Form.Item>
            <a onClick={() => setType('phone')}>使用短信验证码登录</a>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' className='form-btn' type='primary'>
              登录
            </Button>
          </Form.Item>
        </Form>
      }
      { type === 'phone' &&
        <Form
          name="phoneForm"
          onFinish={onFinishPhone}
        >
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: '请输入手机号码!',
              },
              {
                pattern: /^[1][3-8][0-9]{9}$/,
                message: '手机号码格式不正确!'
              }
            ]}
          >
            <Input placeholder='请输入手机号码' className='common-input' />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]}
          >
            <Row>
              <Col span={12}>
                <Input className='common-input' placeholder='请输入验证码' />
              </Col>
              <Col span={12}>
                <Button 
                  onClick={sendCode}
                  id='code-button' 
                  className='send-btn'
                >获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <a onClick={() => setType('email')}>使用邮箱密码登录</a>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' className='form-btn' type='primary'>
              登录
            </Button>
          </Form.Item>
        </Form>
      }
    </div>
  )
}

export default withRouter(LoginForm);