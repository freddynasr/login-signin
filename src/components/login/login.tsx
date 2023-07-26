import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import eye from 'bootstrap-icons/icons/eye-fill.svg';
import eyeSlash from 'bootstrap-icons/icons/eye-slash-fill.svg';

@Component({
  tag: 'at-login',
  styleUrl: 'login.css',
  shadow: true,
})
export class Login {
  eyeIcon = atob(eye.split(',')[1]);
  eyeSlashIcon = atob(eyeSlash.split(',')[1]);
  @State() showPass = false;
  @State() usernameInputValid: boolean;
  @State() passwordInputValid: boolean;
  passInput: HTMLInputElement;
  userInput: HTMLInputElement;
  @State() Login = {
    username: '',
    password: '',
  };
  @Event({ bubbles: true, composed: true }) loginEvent: EventEmitter<any>;
  @Event({ bubbles: true, composed: true }) register: EventEmitter<any>;

  ToggleShowPass() {
    this.showPass = !this.showPass;
    alert;
  }

  onLogin(e: Event) {
    e.preventDefault();
    this.loginEvent.emit(this.Login);
    this.Login = {
      username: '',
      password: '',
    };
  }

  onRegister() {
    this.register.emit();
  }

  onUsernameInput(e: Event) {
    this.Login.username = (e.target as HTMLInputElement).value;
    if (this.Login.username.trim() !== '') {
      this.usernameInputValid = true;
    } else {
      this.usernameInputValid = false;
    }
  }
  onPasswordInput(e: Event) {
    this.Login.password = (e.target as HTMLInputElement).value;
    if (this.Login.password.trim() !== '') {
      this.passwordInputValid = true;
    } else {
      this.passwordInputValid = false;
    }
  }

  render() {
    let type = 'password';
    let icon = this.eyeIcon;
    if (this.showPass) {
      type = 'text';
      icon = this.eyeSlashIcon;
    }

    return [
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alphardex/aqua.css@master/dist/aqua.min.css" />,
      <form onSubmit={this.onLogin.bind(this)} class="login-form">
        <h1>Login</h1>
        <div class="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autocomplete="off"
            ref={el => (this.userInput = el)}
            value={this.Login.username}
            onInput={this.onUsernameInput.bind(this)}
            class="form-control-material username"
            required
          />
          <label htmlFor="username">Username</label>
        </div>
        <div class="form-input-material">
          <input
            type={type}
            name="password"
            id="password"
            placeholder=""
            autocomplete="off"
            class="form-control-material"
            ref={el => (this.passInput = el)}
            value={this.Login.password}
            onInput={this.onPasswordInput.bind(this)}
            required
          />
          <a class="icon" onClick={this.ToggleShowPass.bind(this)}>
            <span innerHTML={icon}></span>
          </a>
          <label htmlFor="password">Password</label>
        </div>
        <a class="anchor">Forget Passowrd</a>
        <button type="submit" class="login-btn">
          Login
        </button>
        <a class="anchor" onClick={this.onRegister.bind(this)}>
          Create Account
        </a>
      </form>,
    ];
  }
}
