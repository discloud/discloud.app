[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DiscloudConfig

# Class: DiscloudConfig

Defined in: packages/util/dist/config/index.d.ts:3

## Constructors

### Constructor

> **new DiscloudConfig**(`path`): `DiscloudConfig`

Defined in: packages/util/dist/config/index.d.ts:8

#### Parameters

##### path

`string`

#### Returns

`DiscloudConfig`

## Properties

### path

> `readonly` **path**: `string`

Defined in: packages/util/dist/config/index.d.ts:5

***

### filename

> `readonly` `static` **filename**: `"discloud.config"` = `"discloud.config"`

Defined in: packages/util/dist/config/index.d.ts:6

## Accessors

### data

#### Get Signature

> **get** **data**(): [`DiscloudConfigType`](../type-aliases/DiscloudConfigType.md)

Defined in: packages/util/dist/config/index.d.ts:9

##### Returns

[`DiscloudConfigType`](../type-aliases/DiscloudConfigType.md)

***

### exists

#### Get Signature

> **get** **exists**(): `boolean`

Defined in: packages/util/dist/config/index.d.ts:10

##### Returns

`boolean`

***

### existsMain

#### Get Signature

> **get** **existsMain**(): `boolean`

Defined in: packages/util/dist/config/index.d.ts:11

##### Returns

`boolean`

***

### mainFileExt

#### Get Signature

> **get** **mainFileExt**(): `undefined` \| `string`

Defined in: packages/util/dist/config/index.d.ts:12

##### Returns

`undefined` \| `string`

***

### missingProps

#### Get Signature

> **get** **missingProps**(): ([`ID`](../enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../enumerations/DiscloudConfigScopes.md#main) \| [`NAME`](../enumerations/DiscloudConfigScopes.md#name) \| [`RAM`](../enumerations/DiscloudConfigScopes.md#ram) \| [`TYPE`](../enumerations/DiscloudConfigScopes.md#type) \| [`VERSION`](../enumerations/DiscloudConfigScopes.md#version))[]

Defined in: packages/util/dist/config/index.d.ts:13

##### Returns

([`ID`](../enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../enumerations/DiscloudConfigScopes.md#main) \| [`NAME`](../enumerations/DiscloudConfigScopes.md#name) \| [`RAM`](../enumerations/DiscloudConfigScopes.md#ram) \| [`TYPE`](../enumerations/DiscloudConfigScopes.md#type) \| [`VERSION`](../enumerations/DiscloudConfigScopes.md#version))[]

## Methods

### dispose()

> **dispose**(): `void`

Defined in: packages/util/dist/config/index.d.ts:14

#### Returns

`void`

***

### get()

> **get**\<`K`\>(`key`): [`DiscloudConfigType`](../type-aliases/DiscloudConfigType.md)\[`K`\]

Defined in: packages/util/dist/config/index.d.ts:18

#### Type Parameters

##### K

`K` *extends* `"APT"` \| `"AUTORESTART"` \| `"BUILD"` \| `"ID"` \| `"MAIN"` \| `"RAM"` \| `"START"` \| `"TYPE"` \| `"VERSION"`

#### Parameters

##### key

`K`

#### Returns

[`DiscloudConfigType`](../type-aliases/DiscloudConfigType.md)\[`K`\]

***

### set()

> **set**\<`K`\>(`key`, `value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: packages/util/dist/config/index.d.ts:19

#### Type Parameters

##### K

`K` *extends* `"APT"` \| `"AUTORESTART"` \| `"BUILD"` \| `"ID"` \| `"MAIN"` \| `"RAM"` \| `"START"` \| `"TYPE"` \| `"VERSION"`

#### Parameters

##### key

`K`

##### value

[`DiscloudConfigType`](../type-aliases/DiscloudConfigType.md)\[`K`\]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### update()

> **update**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: packages/util/dist/config/index.d.ts:20

#### Parameters

##### config

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`DiscloudConfigType`](../type-aliases/DiscloudConfigType.md)\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### validate()

#### Call Signature

> **validate**(): `void`

Defined in: packages/util/dist/config/index.d.ts:15

##### Returns

`void`

#### Call Signature

> **validate**(`doNotThrowIfInvalid`): `boolean`

Defined in: packages/util/dist/config/index.d.ts:16

##### Parameters

###### doNotThrowIfInvalid

`true`

##### Returns

`boolean`

***

### watch()

> **watch**(): `this`

Defined in: packages/util/dist/config/index.d.ts:17

#### Returns

`this`

***

### validade()

> `static` **validade**(`data`): `void`

Defined in: packages/util/dist/config/index.d.ts:7

#### Parameters

##### data

[`DiscloudConfigType`](../type-aliases/DiscloudConfigType.md)

#### Returns

`void`
