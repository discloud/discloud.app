[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DataManager

# Class: `abstract` DataManager\<T\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:8](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L8)

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

Defined in: [packages/discloud.app/src/managers/DataManager.ts:12](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L12)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### holds

`T`

#### Returns

[`DataManager`](DataManager.md)\<`T`\>

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructors)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L9)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp-1)

***

### holds

> `protected` `readonly` **holds**: `T`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

## Methods

### resolve()

> **resolve**(`idOrInstance`): `null` \| `InstanceType`\<`T`\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L33)

Resolves a data entry to a data Object.

#### Parameters

##### idOrInstance

The id or instance of something in this Manager

`string` | `InstanceType`\<`T`\>

#### Returns

`null` \| `InstanceType`\<`T`\>

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L39)

#### Parameters

##### idOrInstance

`string` | `InstanceType`\<`T`\>

#### Returns

`any`

***

### valueOf()

> **valueOf**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>
