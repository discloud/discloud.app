[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DiscloudAPIError

# Class: DiscloudAPIError

## Extends

- `Error`

## Constructors

### new DiscloudAPIError()

> **new DiscloudAPIError**(`message`, `code`, `method`, `path`, `body`): [`DiscloudAPIError`](DiscloudAPIError.md)

#### Parameters

• **message**: `string`

• **code**: `number`

• **method**: `string`

• **path**: `string`

• **body**: `any`

#### Returns

[`DiscloudAPIError`](DiscloudAPIError.md)

#### Overrides

`Error.constructor`

#### Defined in

packages/rest/out/errors/DiscloudAPIError.d.ts:6

## Properties

### body

> **body**: `any`

#### Defined in

packages/rest/out/errors/DiscloudAPIError.d.ts:5

***

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### code

> **code**: `number`

#### Defined in

packages/rest/out/errors/DiscloudAPIError.d.ts:2

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### method

> **method**: `string`

#### Defined in

packages/rest/out/errors/DiscloudAPIError.d.ts:3

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### path

> **path**: `string`

#### Defined in

packages/rest/out/errors/DiscloudAPIError.d.ts:4

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:21
