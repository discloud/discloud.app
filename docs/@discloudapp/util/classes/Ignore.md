[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / Ignore

# Class: Ignore

Defined in: [packages/util/src/glob/ignore.ts:9](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L9)

## Constructors

### Constructor

> **new Ignore**(`filename`): `Ignore`

Defined in: [packages/util/src/glob/ignore.ts:56](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L56)

#### Parameters

##### filename

`string`

#### Returns

`Ignore`

## Properties

### filename

> `readonly` **filename**: `string`

Defined in: [packages/util/src/glob/ignore.ts:57](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L57)

## Methods

### \_findIgnoreFiles()

> `protected` **\_findIgnoreFiles**(`ignore?`, `cwd?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`, `void`, `void`\>

Defined in: [packages/util/src/glob/ignore.ts:73](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L73)

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

Defined in: [packages/util/src/glob/ignore.ts:64](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L64)

#### Parameters

##### cwd?

`string`

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`[], `void`, `unknown`\>

***

### getIgnorePatterns()

> **getIgnorePatterns**(`cwd?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:60](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L60)

#### Parameters

##### cwd?

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### globify()

> `static` **globify**(`content`, `directory?`, `absolute?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:10](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L10)

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

Defined in: [packages/util/src/glob/ignore.ts:48](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L48)

#### Parameters

##### path

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### resolveIgnoreFiles()

> `static` **resolveIgnoreFiles**(`paths`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:52](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/ignore.ts#L52)

#### Parameters

##### paths

`string`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>
