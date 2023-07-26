import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'at-container',
  styleUrl: 'container.css',
  shadow: true,
})
export class container {
  @State() component: string;

  @Listen('register')
  onRegister() {
    this.component = 'signup';
  }

  @Listen('login')
  onLogin() {
    this.component = 'login';
  }

  render() {
    let content = null;

    if (this.component === 'login') {
      content = <at-login></at-login>;
    } else if (this.component === 'signup') {
      content = <jji-signup-comp titl="Sign Up"></jji-signup-comp>;
    }
    return [
      <header>
        <div class="container">
          <a
            onClick={() => {
              this.component = 'signup';
            }}
          >
            Sign up
          </a>
          <a
            onClick={() => {
              this.component = 'login';
            }}
          >
            Log in
          </a>
        </div>
      </header>,
      <div class="">{content}</div>,
    ];
  }
}
