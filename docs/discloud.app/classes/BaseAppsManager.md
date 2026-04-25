[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BaseAppsManager

# Abstract Class: BaseAppsManager\<T\>

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L12)

Apps cache manager

## Extends

- [`CachedManager`](CachedManager.md)\<`string`, `T`\>

## Extended by

- [`AppManager`](AppManager.md)

## Type Parameters

### T

`T` *extends* [`Instanciable`](../type-aliases/Instanciable.md)\<*typeof* [`BaseApp`](BaseApp.md)\>

## Constructors

### Constructor

> **new BaseAppsManager**\<`T`\>(`discloudApp`, `holds`): `BaseAppsManager`\<`T`\>

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:14](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L14)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### holds

`T`

#### Returns

`BaseAppsManager`\<`T`\>

#### Overrides

[`CachedManager`](CachedManager.md).[`constructor`](CachedManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:13](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L13)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_cache`](CachedManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`CachedManager`](CachedManager.md).[`discloudApp`](CachedManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: `T`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`CachedManager`](CachedManager.md).[`holds`](CachedManager.md#holds)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:15](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L15)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`cache`](CachedManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L18)

#### Parameters

##### data

`PartialApiApp`

#### Returns

[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

#### Overrides

[`CachedManager`](CachedManager.md).[`_add`](CachedManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:29](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L29)

#### Parameters

##### data

`PartialApiApp`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

#### Overrides

[`CachedManager`](CachedManager.md).[`_addMany`](CachedManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:40](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L40)

#### Parameters

##### data?

(`string` \| `PartialApiApp`)[]

#### Returns

`void`

#### Overrides

[`CachedManager`](CachedManager.md).[`_clear`](CachedManager.md#_clear)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:55](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L55)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Overrides

[`CachedManager`](CachedManager.md).[`_delete`](CachedManager.md#_delete)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:60](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L60)

#### Parameters

##### ids

`string`[]

#### Returns

`void`

#### Overrides

[`CachedManager`](CachedManager.md).[`_deleteMany`](CachedManager.md#_deletemany)

***

### \_patch()

> `protected` **\_patch**(`id`, `data`): [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `undefined`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:65](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L65)

#### Parameters

##### id

`string`

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiApp`](../interfaces/ApiApp.md)\>

#### Returns

[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `undefined`

#### Overrides

[`CachedManager`](CachedManager.md).[`_patch`](CachedManager.md#_patch)

***

### resolve()

> **resolve**(`keyOrInstance`): [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `null`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:23](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L23)

Resolves a data entry to a data Object.

#### Parameters

##### keyOrInstance

`string` \| [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

The id or instance of something in this Manager

#### Returns

[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `null`

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolve`](CachedManager.md#resolve)

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:31](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L31)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`valueOf`](CachedManager.md#valueof)
