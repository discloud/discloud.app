[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / Ignore

# Class: Ignore

Defined in: [packages/util/src/glob/ignore.ts:8](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L8)

## Constructors

### Constructor

> **new Ignore**(`filename`): `Ignore`

Defined in: [packages/util/src/glob/ignore.ts:55](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L55)

#### Parameters

##### filename

`string`

#### Returns

`Ignore`

## Properties

### filename

> `readonly` **filename**: `string`

Defined in: [packages/util/src/glob/ignore.ts:56](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L56)

## Methods

### \_findIgnoreFiles()

> `protected` **\_findIgnoreFiles**(`ignore?`, `cwd?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`, `void`, `void`\>

Defined in: [packages/util/src/glob/ignore.ts:72](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L72)

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

Defined in: [packages/util/src/glob/ignore.ts:63](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L63)

#### Parameters

##### cwd?

`string`

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`[], `void`, `unknown`\>

***

### getIgnorePatterns()

> **getIgnorePatterns**(`cwd?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:59](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L59)

#### Parameters

##### cwd?

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### globify()

> `static` **globify**(`content`, `directory?`, `absolute?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:9](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L9)

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

Defined in: [packages/util/src/glob/ignore.ts:47](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L47)

#### Parameters

##### path

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### resolveIgnoreFiles()

> `static` **resolveIgnoreFiles**(`paths`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:51](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/ignore.ts#L51)

#### Parameters

##### paths

`string`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>
