[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DiscloudConfig

# Class: DiscloudConfig

Defined in: packages/util/dist/config/config.d.ts:3

## Constructors

### Constructor

> **new DiscloudConfig**(`path`): `DiscloudConfig`

Defined in: packages/util/dist/config/config.d.ts:9

#### Parameters

##### path

`string`

#### Returns

`DiscloudConfig`

### Constructor

> **new DiscloudConfig**(`path`, `content`): `DiscloudConfig`

Defined in: packages/util/dist/config/config.d.ts:10

#### Parameters

##### path

`string`

##### content

`string`

#### Returns

`DiscloudConfig`

## Properties

### \_watcher?

> `protected` `optional` **\_watcher**: `FSWatcher`

Defined in: packages/util/dist/config/config.d.ts:11

***

### path

> `readonly` **path**: `string`

Defined in: packages/util/dist/config/config.d.ts:5

***

### filename

> `readonly` `static` **filename**: `"discloud.config"` = `"discloud.config"`

Defined in: packages/util/dist/config/config.d.ts:6

## Accessors

### data

#### Get Signature

> **get** **data**(): `ParsedDiscloudConfigData`

Defined in: packages/util/dist/config/config.d.ts:13

##### Returns

`ParsedDiscloudConfigData`

***

### exists

#### Get Signature

> **get** **exists**(): `boolean`

Defined in: packages/util/dist/config/config.d.ts:14

##### Returns

`boolean`

***

### mainFileExt

#### Get Signature

> **get** **mainFileExt**(): `string` \| `undefined`

Defined in: packages/util/dist/config/config.d.ts:15

##### Returns

`string` \| `undefined`

***

### missingProps

#### Get Signature

> **get** **missingProps**(): ([`ID`](../enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../enumerations/DiscloudConfigScopes.md#main) \| [`TYPE`](../enumerations/DiscloudConfigScopes.md#type))[]

Defined in: packages/util/dist/config/config.d.ts:16

##### Returns

([`ID`](../enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../enumerations/DiscloudConfigScopes.md#main) \| [`TYPE`](../enumerations/DiscloudConfigScopes.md#type))[]

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: packages/util/dist/config/config.d.ts:25

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: packages/util/dist/config/config.d.ts:17

#### Returns

`void`

***

### existsMain()

> **existsMain**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: packages/util/dist/config/config.d.ts:18

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

***

### get()

> **get**\<`K`\>(`key`): `ParsedDiscloudConfigData`\[`K`\]

Defined in: packages/util/dist/config/config.d.ts:19

#### Type Parameters

##### K

`K` *extends* keyof `ParsedDiscloudConfigData`

#### Parameters

##### key

`K`

#### Returns

`ParsedDiscloudConfigData`\[`K`\]

***

### set()

> **set**\<`K`\>(`key`, `value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: packages/util/dist/config/config.d.ts:20

#### Type Parameters

##### K

`K` *extends* keyof `ParsedDiscloudConfigData`

#### Parameters

##### key

`K`

##### value

`ParsedDiscloudConfigData`\[`K`\]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### update()

> **update**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: packages/util/dist/config/config.d.ts:21

#### Parameters

##### config

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`ParsedDiscloudConfigData`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### validate()

#### Call Signature

> **validate**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: packages/util/dist/config/config.d.ts:22

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **validate**(`doNotThrowIfInvalid`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: packages/util/dist/config/config.d.ts:23

##### Parameters

###### doNotThrowIfInvalid

`true`

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

***

### watch()

> **watch**(): `this`

Defined in: packages/util/dist/config/config.d.ts:24

#### Returns

`this`

***

### fromPath()

> `static` **fromPath**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`DiscloudConfig`\>

Defined in: packages/util/dist/config/config.d.ts:7

#### Parameters

##### path

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`DiscloudConfig`\>

***

### validade()

> `static` **validade**(`data`): `void`

Defined in: packages/util/dist/config/config.d.ts:8

#### Parameters

##### data

`ParsedDiscloudConfigData`

#### Returns

`void`
