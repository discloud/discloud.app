[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DataManager

# Class: `abstract` DataManager\<T\>

Manager for data

## Extends

- [`BaseManager`](BaseManager.md)

## Extended by

- [`CachedManager`](CachedManager.md)

## Type Parameters

• **T** *extends* [`Constructable`](../type-aliases/Constructable.md)\<`T`\>

## Constructors

### new DataManager()

> **new DataManager**\<`T`\>(`discloudApp`, `holds`): [`DataManager`](DataManager.md)\<`T`\>

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **holds**: `T`

#### Returns

[`DataManager`](DataManager.md)\<`T`\>

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructors)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L12)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L9)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/BaseManager.ts#L7)

***

### holds

> `protected` `readonly` **holds**: `T`

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

> `get` **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L25)

## Methods

### resolve()

> **resolve**(`idOrInstance`): `null` \| `InstanceType`\<`T`\>

Resolves a data entry to a data Object.

#### Parameters

• **idOrInstance**: `string` \| `InstanceType`\<`T`\>

The id or instance of something in this Manager

#### Returns

`null` \| `InstanceType`\<`T`\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L33)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

#### Parameters

• **idOrInstance**: `string` \| `InstanceType`\<`T`\>

#### Returns

`any`

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L39)

***

### valueOf()

> **valueOf**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L46)
