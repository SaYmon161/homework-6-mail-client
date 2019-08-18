// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import style from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    values: {
      email: '',
      password: ''
    }
  };

  handleChange = e => {
    const { values } = this.state;
    this.setState({
      values: { ...values, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    const {
      values: { email, password }
    } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  };

  render() {
    const { values } = this.state;
    const { isAuthorized, authError } = this.props;

    if (isAuthorized) return <Redirect to="/app" />;

    return (
      <div className={style.bg}>
        <div className={`${style.form} t-form`}>
          <p>
            <label htmlFor="email">
              <span className={`${style.labelText}`}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className={`${style.input} t-input-email`}
              value={values.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={`${style.labelText}`}>Пароль</span>
            </label>
            <input
              type="text"
              name="password"
              className={`${style.input} t-input-password`}
              value={values.password}
              onChange={this.handleChange}
            />
          </p>
          {authError && <p className={style.error}>{authError}</p>}
          <div className={style.buttons}>
            <button
              className={`${style.button} t-login`}
              onClick={this.handleSubmit}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
