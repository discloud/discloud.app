[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / DiscloudConfig

# Class: DiscloudConfig

Defined in: [packages/util/src/config/index.ts:13](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L13)

## Constructors

### Constructor

> **new DiscloudConfig**(`path`): `DiscloudConfig`

Defined in: [packages/util/src/config/index.ts:21](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L21)

#### Parameters

##### path

`string`

#### Returns

`DiscloudConfig`

## Properties

### path

> `readonly` **path**: `string`

Defined in: [packages/util/src/config/index.ts:21](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L21)

***

### filename

> `readonly` `static` **filename**: `"discloud.config"` = `"discloud.config"`

Defined in: [packages/util/src/config/index.ts:14](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L14)

## Accessors

### data

#### Get Signature

> **get** **data**(): [`DiscloudConfigType`](../../api-types/type-aliases/DiscloudConfigType.md)

Defined in: [packages/util/src/config/index.ts:41](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L41)

##### Returns

[`DiscloudConfigType`](../../api-types/type-aliases/DiscloudConfigType.md)

***

### exists

#### Get Signature

> **get** **exists**(): `boolean`

Defined in: [packages/util/src/config/index.ts:45](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L45)

##### Returns

`boolean`

***

### existsMain

#### Get Signature

> **get** **existsMain**(): `boolean`

Defined in: [packages/util/src/config/index.ts:49](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L49)

##### Returns

`boolean`

***

### mainFileExt

#### Get Signature

> **get** **mainFileExt**(): `undefined` \| `string`

Defined in: [packages/util/src/config/index.ts:54](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L54)

##### Returns

`undefined` \| `string`

***

### missingProps

#### Get Signature

> **get** **missingProps**(): ([`ID`](../../api-types/enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../../api-types/enumerations/DiscloudConfigScopes.md#main) \| [`NAME`](../../api-types/enumerations/DiscloudConfigScopes.md#name) \| [`RAM`](../../api-types/enumerations/DiscloudConfigScopes.md#ram) \| [`TYPE`](../../api-types/enumerations/DiscloudConfigScopes.md#type) \| [`VERSION`](../../api-types/enumerations/DiscloudConfigScopes.md#version))[]

Defined in: [packages/util/src/config/index.ts:58](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L58)

##### Returns

([`ID`](../../api-types/enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../../api-types/enumerations/DiscloudConfigScopes.md#main) \| [`NAME`](../../api-types/enumerations/DiscloudConfigScopes.md#name) \| [`RAM`](../../api-types/enumerations/DiscloudConfigScopes.md#ram) \| [`TYPE`](../../api-types/enumerations/DiscloudConfigScopes.md#type) \| [`VERSION`](../../api-types/enumerations/DiscloudConfigScopes.md#version))[]

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/util/src/config/index.ts:63](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L63)

#### Returns

`void`

***

### get()

> **get**\<`K`\>(`key`): [`DiscloudConfigType`](../../api-types/type-aliases/DiscloudConfigType.md)\[`K`\]

Defined in: [packages/util/src/config/index.ts:93](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L93)

#### Type Parameters

##### K

`K` *extends* `"APT"` \| `"AUTORESTART"` \| `"BUILD"` \| `"ID"` \| `"MAIN"` \| `"RAM"` \| `"START"` \| `"TYPE"` \| `"VERSION"`

#### Parameters

##### key

`K`

#### Returns

[`DiscloudConfigType`](../../api-types/type-aliases/DiscloudConfigType.md)\[`K`\]

***

### set()

> **set**\<`K`\>(`key`, `value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/util/src/config/index.ts:97](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L97)

#### Type Parameters

##### K

`K` *extends* `"APT"` \| `"AUTORESTART"` \| `"BUILD"` \| `"ID"` \| `"MAIN"` \| `"RAM"` \| `"START"` \| `"TYPE"` \| `"VERSION"`

#### Parameters

##### key

`K`

##### value

[`DiscloudConfigType`](../../api-types/type-aliases/DiscloudConfigType.md)\[`K`\]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### update()

> **update**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/util/src/config/index.ts:101](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L101)

#### Parameters

##### config

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`DiscloudConfigType`](../../api-types/type-aliases/DiscloudConfigType.md)\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### validate()

#### Call Signature

> **validate**(): `void`

Defined in: [packages/util/src/config/index.ts:68](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L68)

##### Returns

`void`

#### Call Signature

> **validate**(`doNotThrowIfInvalid`): `boolean`

Defined in: [packages/util/src/config/index.ts:69](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L69)

##### Parameters

###### doNotThrowIfInvalid

`true`

##### Returns

`boolean`

***

### watch()

> **watch**(): `DiscloudConfig`

Defined in: [packages/util/src/config/index.ts:84](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L84)

#### Returns

`DiscloudConfig`

***

### validade()

> `static` **validade**(`data`): `void`

Defined in: [packages/util/src/config/index.ts:16](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/config/index.ts#L16)

#### Parameters

##### data

[`DiscloudConfigType`](../../api-types/type-aliases/DiscloudConfigType.md)

#### Returns

`void`
