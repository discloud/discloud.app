[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / MissingMainError

# Class: MissingMainError

Defined in: packages/util/dist/config/errors.d.ts:1

## Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Constructors

### Constructor

> **new MissingMainError**(`message?`): `MissingMainError`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1082

#### Parameters

##### message?

`string`

#### Returns

`MissingMainError`

#### Inherited from

`Error.constructor`

### Constructor

> **new MissingMainError**(`message?`, `options?`): `MissingMainError`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1082

#### Parameters

##### message?

`string`

##### options?

`ErrorOptions`

#### Returns

`MissingMainError`

#### Inherited from

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> `readonly` **name**: `"MissingMain"` = `"MissingMain"`

Defined in: packages/util/dist/config/errors.d.ts:2

#### Overrides

`Error.name`

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
