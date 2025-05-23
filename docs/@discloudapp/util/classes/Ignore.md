[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / Ignore

# Class: Ignore

Defined in: [packages/util/src/glob/ignore.ts:7](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/util/src/glob/ignore.ts#L7)

## Constructors

### Constructor

> **new Ignore**(`filename`): `Ignore`

Defined in: [packages/util/src/glob/ignore.ts:44](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/util/src/glob/ignore.ts#L44)

#### Parameters

##### filename

`string`

#### Returns

`Ignore`

## Properties

### filename

> `readonly` **filename**: `string`

Defined in: [packages/util/src/glob/ignore.ts:45](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/util/src/glob/ignore.ts#L45)

## Methods

### findIgnoreFiles()

> **findIgnoreFiles**(`ignore?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:48](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/util/src/glob/ignore.ts#L48)

#### Parameters

##### ignore?

`string` | `string`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### resolveIgnoreFile()

> **resolveIgnoreFile**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:58](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/util/src/glob/ignore.ts#L58)

#### Parameters

##### path

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### resolveIgnoreFiles()

> **resolveIgnoreFiles**(`paths`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:62](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/util/src/glob/ignore.ts#L62)

#### Parameters

##### paths

`string`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### globify()

> `static` **globify**(`content`, `directory?`, `absolute?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/ignore.ts:8](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/util/src/glob/ignore.ts#L8)

#### Parameters

##### content

`string`

##### directory?

`string`

##### absolute?

`boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>
