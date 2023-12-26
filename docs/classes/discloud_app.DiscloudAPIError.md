[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / DiscloudAPIError

# Class: DiscloudAPIError

[discloud.app](../modules/discloud_app.md).DiscloudAPIError

## Hierarchy

- `Error`

  ↳ **`DiscloudAPIError`**

## Table of contents

### Constructors

- [constructor](discloud_app.DiscloudAPIError.md#constructor)

### Properties

- [body](discloud_app.DiscloudAPIError.md#body)
- [cause](discloud_app.DiscloudAPIError.md#cause)
- [code](discloud_app.DiscloudAPIError.md#code)
- [message](discloud_app.DiscloudAPIError.md#message)
- [method](discloud_app.DiscloudAPIError.md#method)
- [name](discloud_app.DiscloudAPIError.md#name)
- [path](discloud_app.DiscloudAPIError.md#path)
- [stack](discloud_app.DiscloudAPIError.md#stack)
- [prepareStackTrace](discloud_app.DiscloudAPIError.md#preparestacktrace)
- [stackTraceLimit](discloud_app.DiscloudAPIError.md#stacktracelimit)

### Methods

- [captureStackTrace](discloud_app.DiscloudAPIError.md#capturestacktrace)

## Constructors

### constructor

• **new DiscloudAPIError**(`message`, `code`, `method`, `path`, `body`): [`DiscloudAPIError`](discloud_app.DiscloudAPIError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | `string` \| `number` |
| `method` | `string` |
| `path` | `string` |
| `body` | `any` |

#### Returns

[`DiscloudAPIError`](discloud_app.DiscloudAPIError.md)

#### Overrides

Error.constructor

#### Defined in

packages/discloud.app/node_modules/@discloudapp/rest/out/errors/DiscloudAPIError.d.ts:6

## Properties

### body

• **body**: `any`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/rest/out/errors/DiscloudAPIError.d.ts:5

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: `string` \| `number`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/rest/out/errors/DiscloudAPIError.d.ts:2

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### method

• **method**: `string`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/rest/out/errors/DiscloudAPIError.d.ts:3

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

___

### path

• **path**: `string`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/rest/out/errors/DiscloudAPIError.d.ts:4

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
