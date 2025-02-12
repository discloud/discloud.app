[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / CachedManager

# Class: `abstract` CachedManager\<T\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:8](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/CachedManager.ts#L8)

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

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/CachedManager.ts#L9)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### holds

`T`

##### iterable?

`Iterable`\<`InstanceType`\<`T`\>, `any`, `any`\>

#### Returns

[`CachedManager`](CachedManager.md)\<`T`\>

#### Overrides

[`DataManager`](DataManager.md).[`constructor`](DataManager.md#constructors)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`DataManager`](DataManager.md).[`_cache`](DataManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`DataManager`](DataManager.md).[`discloudApp`](DataManager.md#discloudapp-1)

***

### holds

> `protected` `readonly` **holds**: `T`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/DataManager.ts#L10)

#### Inherited from

[`DataManager`](DataManager.md).[`holds`](DataManager.md#holds-1)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`cache`](DataManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): `InstanceType`\<`T`\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/CachedManager.ts#L19)

#### Parameters

##### data

`any`

#### Returns

`InstanceType`\<`T`\>

***

### \_addMany()

> `protected` **\_addMany**(`data`): `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/CachedManager.ts#L33)

#### Parameters

##### data

`any`[]

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

***

### \_clear()

> `protected` **\_clear**(`data`?): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/CachedManager.ts#L45)

#### Parameters

##### data?

(`string` \| \{ `id`: `string`; \})[]

#### Returns

`void`

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/CachedManager.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `boolean`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/CachedManager.ts#L64)

#### Parameters

##### ids

`string`[]

#### Returns

`boolean`

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| `InstanceType`\<`T`\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/DataManager.ts#L33)

Resolves a data entry to a data Object.

#### Parameters

##### idOrInstance

The id or instance of something in this Manager

`string` | `InstanceType`\<`T`\>

#### Returns

`null` \| `InstanceType`\<`T`\>

#### Inherited from

[`DataManager`](DataManager.md).[`resolve`](DataManager.md#resolve)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/DataManager.ts#L39)

#### Parameters

##### idOrInstance

`string` | `InstanceType`\<`T`\>

#### Returns

`any`

#### Inherited from

[`DataManager`](DataManager.md).[`resolveId`](DataManager.md#resolveid)

***

### valueOf()

> **valueOf**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`valueOf`](DataManager.md#valueof)
