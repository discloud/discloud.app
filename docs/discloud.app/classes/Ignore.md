[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / Ignore

# Class: Ignore

Defined in: packages/util/dist/glob/ignore.d.ts:1

## Constructors

### Constructor

> **new Ignore**(`filename`): `Ignore`

Defined in: packages/util/dist/glob/ignore.d.ts:7

#### Parameters

##### filename

`string`

#### Returns

`Ignore`

## Properties

### filename

> `readonly` **filename**: `string`

Defined in: packages/util/dist/glob/ignore.d.ts:3

## Methods

### \_findIgnoreFiles()

> `protected` **\_findIgnoreFiles**(`ignore?`, `cwd?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`, `void`, `void`\>

Defined in: packages/util/dist/glob/ignore.d.ts:10

#### Parameters

##### ignore?

`string` | `string`[]

##### cwd?

`string`

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`, `void`, `void`\>

***

### \_getIgnoreIterate()

> `protected` **\_getIgnoreIterate**(`cwd?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`[], `void`, `unknown`\>

Defined in: packages/util/dist/glob/ignore.d.ts:9

#### Parameters

##### cwd?

`string`

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`[], `void`, `unknown`\>

***

### getIgnorePatterns()

> **getIgnorePatterns**(`cwd?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: packages/util/dist/glob/ignore.d.ts:8

#### Parameters

##### cwd?

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### globify()

> `static` **globify**(`content`, `directory?`, `absolute?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: packages/util/dist/glob/ignore.d.ts:4

#### Parameters

##### content

`string`

##### directory?

`string`

##### absolute?

`boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### resolveIgnoreFile()

> `static` **resolveIgnoreFile**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: packages/util/dist/glob/ignore.d.ts:5

#### Parameters

##### path

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### resolveIgnoreFiles()

> `static` **resolveIgnoreFiles**(`paths`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: packages/util/dist/glob/ignore.d.ts:6

#### Parameters

##### paths

`string`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>
