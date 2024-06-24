[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / CachedManager

# Class: `abstract` CachedManager\<T\>

Manager of cache

## Extends

- [`DataManager`](DataManager.md)\<`T`\>

## Extended by

- [`AppManager`](AppManager.md)
- [`TeamAppManager`](TeamAppManager.md)

## Type Parameters

• **T** *extends* [`Constructable`](../type-aliases/Constructable.md)\<`T`\>

## Constructors

### new CachedManager()

> **new CachedManager**\<`T`\>(`discloudApp`, `holds`, `iterable`?): [`CachedManager`](CachedManager.md)\<`T`\>

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **holds**: `T`

• **iterable?**: `Iterable`\<`InstanceType`\<`T`\>\>

#### Returns

[`CachedManager`](CachedManager.md)\<`T`\>

#### Overrides

[`DataManager`](DataManager.md).[`constructor`](DataManager.md#constructors)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L9)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`_cache`](DataManager.md#_cache)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L9)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`DataManager`](DataManager.md).[`discloudApp`](DataManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/BaseManager.ts#L7)

***

### holds

> `protected` `readonly` **holds**: `T`

#### Inherited from

[`DataManager`](DataManager.md).[`holds`](DataManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

> `get` **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`cache`](DataManager.md#cache)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L25)

## Methods

### \_add()

> `protected` **\_add**(`data`): `InstanceType`\<`T`\>

#### Parameters

• **data**: `any`

#### Returns

`InstanceType`\<`T`\>

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L19)

***

### \_addMany()

> `protected` **\_addMany**(`data`): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Parameters

• **data**: `any`[]

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L33)

***

### \_clear()

> `protected` **\_clear**(`data`?): `void`

#### Parameters

• **data?**: (`string` \| `object`)[]

#### Returns

`void`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L45)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

#### Parameters

• **id**: `string`

#### Returns

`boolean`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L58)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `boolean`

#### Parameters

• **ids**: `string`[]

#### Returns

`boolean`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L64)

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| `InstanceType`\<`T`\>

Resolves a data entry to a data Object.

#### Parameters

• **idOrInstance**: `string` \| `InstanceType`\<`T`\>

The id or instance of something in this Manager

#### Returns

`null` \| `InstanceType`\<`T`\>

#### Inherited from

[`DataManager`](DataManager.md).[`resolve`](DataManager.md#resolve)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L33)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

#### Parameters

• **idOrInstance**: `string` \| `InstanceType`\<`T`\>

#### Returns

`any`

#### Inherited from

[`DataManager`](DataManager.md).[`resolveId`](DataManager.md#resolveid)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L39)

***

### valueOf()

> **valueOf**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`valueOf`](DataManager.md#valueof)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L46)
