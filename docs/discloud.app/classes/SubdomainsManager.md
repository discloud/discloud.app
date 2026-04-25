[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / SubdomainsManager

# Class: SubdomainsManager

Defined in: [packages/discloud.app/src/managers/SubdomainsManager.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/SubdomainsManager.ts#L12)

Manager for subdomains on Discloud

## Extends

- [`BaseSubdomainsManager`](BaseSubdomainsManager.md)\<*typeof* [`Subdomain`](Subdomain.md)\>

## Constructors

### Constructor

> **new SubdomainsManager**(`discloudApp`): `SubdomainsManager`

Defined in: [packages/discloud.app/src/managers/SubdomainsManager.ts:13](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/SubdomainsManager.ts#L13)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`SubdomainsManager`

#### Overrides

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`constructor`](BaseSubdomainsManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Subdomain`](Subdomain.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:13](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L13)

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`_cache`](BaseSubdomainsManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`discloudApp`](BaseSubdomainsManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`Subdomain`](Subdomain.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`holds`](BaseSubdomainsManager.md#holds)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:15](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L15)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`cache`](BaseSubdomainsManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`Subdomain`](Subdomain.md)

Defined in: [packages/discloud.app/src/managers/BaseSubdomainsManager.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseSubdomainsManager.ts#L18)

#### Parameters

##### data

`PartialApiSubdomain`

#### Returns

[`Subdomain`](Subdomain.md)

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`_add`](BaseSubdomainsManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Subdomain`](Subdomain.md)\>

Defined in: [packages/discloud.app/src/managers/BaseSubdomainsManager.ts:29](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseSubdomainsManager.ts#L29)

#### Parameters

##### data

`PartialApiSubdomain`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Subdomain`](Subdomain.md)\>

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`_addMany`](BaseSubdomainsManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/BaseSubdomainsManager.ts:40](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseSubdomainsManager.ts#L40)

#### Parameters

##### data?

(`string` \| `PartialApiSubdomain`)[]

#### Returns

`void`

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`_clear`](BaseSubdomainsManager.md#_clear)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/BaseSubdomainsManager.ts:55](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseSubdomainsManager.ts#L55)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`_delete`](BaseSubdomainsManager.md#_delete)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `void`

Defined in: [packages/discloud.app/src/managers/BaseSubdomainsManager.ts:60](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseSubdomainsManager.ts#L60)

#### Parameters

##### ids

`string`[]

#### Returns

`void`

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`_deleteMany`](BaseSubdomainsManager.md#_deletemany)

***

### \_patch()

> `protected` **\_patch**(`id`, `data`): [`Subdomain`](Subdomain.md) \| `undefined`

Defined in: [packages/discloud.app/src/managers/BaseSubdomainsManager.ts:65](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseSubdomainsManager.ts#L65)

#### Parameters

##### id

`string`

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiSubdomain`](../interfaces/ApiSubdomain.md)\>

#### Returns

[`Subdomain`](Subdomain.md) \| `undefined`

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`_patch`](BaseSubdomainsManager.md#_patch)

***

### create()

> **create**(`id`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Subdomain`](Subdomain.md)\>

Defined in: [packages/discloud.app/src/managers/SubdomainsManager.ts:24](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/SubdomainsManager.ts#L24)

#### Parameters

##### id

`string`

You subdomain id.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Subdomain`](Subdomain.md)\>

#### Throws

`400`

#### Throws

`403`

#### Throws

`409` duplicate

***

### delete()

> **delete**(`id`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/SubdomainsManager.ts:40](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/SubdomainsManager.ts#L40)

#### Parameters

##### id

`string`

You subdomain id.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Throws

`400`

#### Throws

`403`

#### Throws

`404` not found

#### Throws

`409` duplicate

***

### fetch()

#### Call Signature

> **fetch**(`id`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Subdomain`](Subdomain.md)\>

Defined in: [packages/discloud.app/src/managers/SubdomainsManager.ts:53](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/SubdomainsManager.ts#L53)

Get information of your subdomain on Discloud.

##### Parameters

###### id

`string`

You subdomain id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Subdomain`](Subdomain.md)\>

##### Throws

`403`

#### Call Signature

> **fetch**(`id?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Subdomain`](Subdomain.md)\>\>

Defined in: [packages/discloud.app/src/managers/SubdomainsManager.ts:60](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/SubdomainsManager.ts#L60)

##### Parameters

###### id?

`"all"`

You subdomain id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Subdomain`](Subdomain.md)\>\>

##### Throws

`403`

##### Throws

`404` not found

***

### resolve()

> **resolve**(`keyOrInstance`): [`Subdomain`](Subdomain.md) \| `null`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:23](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L23)

Resolves a data entry to a data Object.

#### Parameters

##### keyOrInstance

`string` \| [`Subdomain`](Subdomain.md)

The id or instance of something in this Manager

#### Returns

[`Subdomain`](Subdomain.md) \| `null`

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`resolve`](BaseSubdomainsManager.md#resolve)

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Subdomain`](Subdomain.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:31](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L31)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Subdomain`](Subdomain.md)\>

#### Inherited from

[`BaseSubdomainsManager`](BaseSubdomainsManager.md).[`valueOf`](BaseSubdomainsManager.md#valueof)
