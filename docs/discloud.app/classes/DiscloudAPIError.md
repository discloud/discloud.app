[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DiscloudAPIError

# Class: DiscloudAPIError

Defined in: packages/rest/out/errors/DiscloudAPIError.d.ts:1

## Extends

- `Error`

## Constructors

### new DiscloudAPIError()

> **new DiscloudAPIError**(`message`, `code`, `method`, `path`, `body`): [`DiscloudAPIError`](DiscloudAPIError.md)

Defined in: packages/rest/out/errors/DiscloudAPIError.d.ts:6

#### Parameters

##### message

`string`

##### code

`number`

##### method

`string`

##### path

`string`

##### body

`any`

#### Returns

[`DiscloudAPIError`](DiscloudAPIError.md)

#### Overrides

`Error.constructor`

## Properties

### body

> **body**: `any`

Defined in: packages/rest/out/errors/DiscloudAPIError.d.ts:5

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### code

> **code**: `number`

Defined in: packages/rest/out/errors/DiscloudAPIError.d.ts:2

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### method

> **method**: `string`

Defined in: packages/rest/out/errors/DiscloudAPIError.d.ts:3

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### path

> **path**: `string`

Defined in: packages/rest/out/errors/DiscloudAPIError.d.ts:4

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
