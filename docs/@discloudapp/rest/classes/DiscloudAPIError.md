[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / DiscloudAPIError

# Class: DiscloudAPIError

Defined in: [packages/rest/src/errors/DiscloudAPIError.ts:1](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/rest/src/errors/DiscloudAPIError.ts#L1)

## Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Constructors

### Constructor

> **new DiscloudAPIError**(`message`, `code`, `method`, `path`, `body`): `DiscloudAPIError`

Defined in: [packages/rest/src/errors/DiscloudAPIError.ts:2](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/rest/src/errors/DiscloudAPIError.ts#L2)

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

`DiscloudAPIError`

#### Overrides

`Error.constructor`

## Properties

### body

> **body**: `any`

Defined in: [packages/rest/src/errors/DiscloudAPIError.ts:7](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/rest/src/errors/DiscloudAPIError.ts#L7)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### code

> **code**: `number`

Defined in: [packages/rest/src/errors/DiscloudAPIError.ts:4](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/rest/src/errors/DiscloudAPIError.ts#L4)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### method

> **method**: `string`

Defined in: [packages/rest/src/errors/DiscloudAPIError.ts:5](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/rest/src/errors/DiscloudAPIError.ts#L5)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### path

> **path**: `string`

Defined in: [packages/rest/src/errors/DiscloudAPIError.ts:6](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/rest/src/errors/DiscloudAPIError.ts#L6)

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

[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

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

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

[`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
