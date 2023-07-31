# jji-signup-comp



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `opened` | `opened`  |             | `boolean` | `true`      |
| `titl`   | `titl`    |             | `string`  | `undefined` |


## Events

| Event               | Description | Type                                                                                           |
| ------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `formDataSubmitted` |             | `CustomEvent<{ username: string; email: string; password: string; confirmPassword: string; }>` |
| `toLogin`           |             | `CustomEvent<any>`                                                                             |


## Methods

### `openSignUpComp() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [at-container](../container)

### Graph
```mermaid
graph TD;
  at-container --> jji-signup-comp
  style jji-signup-comp fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
