[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / DiscloudAPIError

# Class: DiscloudAPIError

[@discloudapp/rest](../modules/discloudapp_rest.md).DiscloudAPIError

## Hierarchy

- `Error`

  ↳ **`DiscloudAPIError`**

## Table of contents

### Constructors

- [constructor](discloudapp_rest.DiscloudAPIError.md#constructor)

### Properties

- [body](discloudapp_rest.DiscloudAPIError.md#body)
- [cause](discloudapp_rest.DiscloudAPIError.md#cause)
- [code](discloudapp_rest.DiscloudAPIError.md#code)
- [message](discloudapp_rest.DiscloudAPIError.md#message)
- [method](discloudapp_rest.DiscloudAPIError.md#method)
- [name](discloudapp_rest.DiscloudAPIError.md#name)
- [path](discloudapp_rest.DiscloudAPIError.md#path)
- [stack](discloudapp_rest.DiscloudAPIError.md#stack)
- [prepareStackTrace](discloudapp_rest.DiscloudAPIError.md#preparestacktrace)
- [stackTraceLimit](discloudapp_rest.DiscloudAPIError.md#stacktracelimit)

### Methods

- [captureStackTrace](discloudapp_rest.DiscloudAPIError.md#capturestacktrace)

## Constructors

### constructor

• **new DiscloudAPIError**(`message`, `code`, `method`, `path`, `body`): [`DiscloudAPIError`](discloudapp_rest.DiscloudAPIError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | `string` \| `number` |
| `method` | `string` |
| `path` | `string` |
| `body` | `any` |

#### Returns

[`DiscloudAPIError`](discloudapp_rest.DiscloudAPIError.md)

#### Overrides

Error.constructor

#### Defined in

[packages/rest/src/errors/DiscloudAPIError.ts:2](https://github.com/discloud/discloud.app/blob/62751fe/packages/rest/src/errors/DiscloudAPIError.ts#L2)

## Properties

### body

• **body**: `any`

#### Defined in

[packages/rest/src/errors/DiscloudAPIError.ts:7](https://github.com/discloud/discloud.app/blob/62751fe/packages/rest/src/errors/DiscloudAPIError.ts#L7)

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

[packages/rest/src/errors/DiscloudAPIError.ts:4](https://github.com/discloud/discloud.app/blob/62751fe/packages/rest/src/errors/DiscloudAPIError.ts#L4)

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

[packages/rest/src/errors/DiscloudAPIError.ts:5](https://github.com/discloud/discloud.app/blob/62751fe/packages/rest/src/errors/DiscloudAPIError.ts#L5)

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

[packages/rest/src/errors/DiscloudAPIError.ts:6](https://github.com/discloud/discloud.app/blob/62751fe/packages/rest/src/errors/DiscloudAPIError.ts#L6)

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
