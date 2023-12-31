/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AtContainer {
    }
    interface AtLogin {
    }
    interface JjiSignupComp {
        "openSignUpComp": () => Promise<void>;
        "opened": boolean;
        "titl": string;
    }
}
export interface AtLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtLoginElement;
}
export interface JjiSignupCompCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJjiSignupCompElement;
}
declare global {
    interface HTMLAtContainerElement extends Components.AtContainer, HTMLStencilElement {
    }
    var HTMLAtContainerElement: {
        prototype: HTMLAtContainerElement;
        new (): HTMLAtContainerElement;
    };
    interface HTMLAtLoginElement extends Components.AtLogin, HTMLStencilElement {
    }
    var HTMLAtLoginElement: {
        prototype: HTMLAtLoginElement;
        new (): HTMLAtLoginElement;
    };
    interface HTMLJjiSignupCompElement extends Components.JjiSignupComp, HTMLStencilElement {
    }
    var HTMLJjiSignupCompElement: {
        prototype: HTMLJjiSignupCompElement;
        new (): HTMLJjiSignupCompElement;
    };
    interface HTMLElementTagNameMap {
        "at-container": HTMLAtContainerElement;
        "at-login": HTMLAtLoginElement;
        "jji-signup-comp": HTMLJjiSignupCompElement;
    }
}
declare namespace LocalJSX {
    interface AtContainer {
    }
    interface AtLogin {
        "onLoginEvent"?: (event: AtLoginCustomEvent<any>) => void;
        "onRegister"?: (event: AtLoginCustomEvent<any>) => void;
    }
    interface JjiSignupComp {
        "onFormDataSubmitted"?: (event: JjiSignupCompCustomEvent<{ username: string; email: string; password: string; confirmPassword: string }>) => void;
        "onToLogin"?: (event: JjiSignupCompCustomEvent<any>) => void;
        "opened"?: boolean;
        "titl"?: string;
    }
    interface IntrinsicElements {
        "at-container": AtContainer;
        "at-login": AtLogin;
        "jji-signup-comp": JjiSignupComp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "at-container": LocalJSX.AtContainer & JSXBase.HTMLAttributes<HTMLAtContainerElement>;
            "at-login": LocalJSX.AtLogin & JSXBase.HTMLAttributes<HTMLAtLoginElement>;
            "jji-signup-comp": LocalJSX.JjiSignupComp & JSXBase.HTMLAttributes<HTMLJjiSignupCompElement>;
        }
    }
}
