[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / DiscloudConfig

# Class: DiscloudConfig

Defined in: [packages/util/src/config/config.ts:16](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L16)

## Constructors

### Constructor

> **new DiscloudConfig**(`path`): `DiscloudConfig`

Defined in: [packages/util/src/config/config.ts:52](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L52)

#### Parameters

##### path

`string`

#### Returns

`DiscloudConfig`

### Constructor

> **new DiscloudConfig**(`path`, `content`): `DiscloudConfig`

Defined in: [packages/util/src/config/config.ts:53](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L53)

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

Defined in: [packages/util/src/config/config.ts:68](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L68)

***

### path

> `readonly` **path**: `string`

Defined in: [packages/util/src/config/config.ts:54](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L54)

***

### filename

> `readonly` `static` **filename**: `"discloud.config"` = `"discloud.config"`

Defined in: [packages/util/src/config/config.ts:17](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L17)

## Accessors

### data

#### Get Signature

> **get** **data**(): `ParsedDiscloudConfigData`

Defined in: [packages/util/src/config/config.ts:71](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L71)

##### Returns

`ParsedDiscloudConfigData`

***

### exists

#### Get Signature

> **get** **exists**(): `boolean`

Defined in: [packages/util/src/config/config.ts:75](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L75)

##### Returns

`boolean`

***

### mainFileExt

#### Get Signature

> **get** **mainFileExt**(): `undefined` \| `string`

Defined in: [packages/util/src/config/config.ts:79](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L79)

##### Returns

`undefined` \| `string`

***

### missingProps

#### Get Signature

> **get** **missingProps**(): ([`ID`](../../api-types/enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../../api-types/enumerations/DiscloudConfigScopes.md#main) \| [`RAM`](../../api-types/enumerations/DiscloudConfigScopes.md#ram) \| [`TYPE`](../../api-types/enumerations/DiscloudConfigScopes.md#type))[]

Defined in: [packages/util/src/config/config.ts:84](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L84)

##### Returns

([`ID`](../../api-types/enumerations/DiscloudConfigScopes.md#id) \| [`MAIN`](../../api-types/enumerations/DiscloudConfigScopes.md#main) \| [`RAM`](../../api-types/enumerations/DiscloudConfigScopes.md#ram) \| [`TYPE`](../../api-types/enumerations/DiscloudConfigScopes.md#type))[]

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: [packages/util/src/config/config.ts:169](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L169)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/util/src/config/config.ts:93](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L93)

#### Returns

`void`

***

### existsMain()

> **existsMain**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/util/src/config/config.ts:102](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L102)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

***

### get()

> **get**\<`K`\>(`key`): `ParsedDiscloudConfigData`\[`K`\]

Defined in: [packages/util/src/config/config.ts:108](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L108)

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

Defined in: [packages/util/src/config/config.ts:112](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L112)

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

Defined in: [packages/util/src/config/config.ts:116](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L116)

#### Parameters

##### config

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`ParsedDiscloudConfigData`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### validate()

#### Call Signature

> **validate**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/util/src/config/config.ts:124](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L124)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **validate**(`doNotThrowIfInvalid`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/util/src/config/config.ts:125](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L125)

##### Parameters

###### doNotThrowIfInvalid

`true`

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

***

### watch()

> **watch**(): `DiscloudConfig`

Defined in: [packages/util/src/config/config.ts:140](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L140)

#### Returns

`DiscloudConfig`

***

### fromPath()

> `static` **fromPath**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`DiscloudConfig`\>

Defined in: [packages/util/src/config/config.ts:19](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L19)

#### Parameters

##### path

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`DiscloudConfig`\>

***

### validade()

> `static` **validade**(`data`): `void`

Defined in: [packages/util/src/config/config.ts:47](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/config/config.ts#L47)

#### Parameters

##### data

`ParsedDiscloudConfigData`

#### Returns

`void`
