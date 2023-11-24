[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / CachedManager

# Class: CachedManager\<T\>

[discloud.app](../modules/discloud_app.md).CachedManager

Manager of cache

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructable`](../modules/discloud_app.md#constructable)\<`T`\> |

## Hierarchy

- [`DataManager`](discloud_app.DataManager.md)\<`T`\>

  ↳ **`CachedManager`**

  ↳↳ [`AppManager`](discloud_app.AppManager.md)

  ↳↳ [`TeamAppManager`](discloud_app.TeamAppManager.md)

## Table of contents

### Constructors

- [constructor](discloud_app.CachedManager.md#constructor)

### Properties

- [\_cache](discloud_app.CachedManager.md#_cache)
- [discloudApp](discloud_app.CachedManager.md#discloudapp)
- [holds](discloud_app.CachedManager.md#holds)

### Accessors

- [cache](discloud_app.CachedManager.md#cache)

### Methods

- [\_add](discloud_app.CachedManager.md#_add)
- [\_addMany](discloud_app.CachedManager.md#_addmany)
- [\_clear](discloud_app.CachedManager.md#_clear)
- [\_delete](discloud_app.CachedManager.md#_delete)
- [\_deleteMany](discloud_app.CachedManager.md#_deletemany)
- [resolve](discloud_app.CachedManager.md#resolve)
- [resolveId](discloud_app.CachedManager.md#resolveid)
- [valueOf](discloud_app.CachedManager.md#valueof)

## Constructors

### constructor

• **new CachedManager**\<`T`\>(`discloudApp`, `holds`, `iterable?`): [`CachedManager`](discloud_app.CachedManager.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructable`](../modules/discloud_app.md#constructable)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `holds` | `T` |
| `iterable?` | `Iterable`\<`InstanceType`\<`T`\>\> |

#### Returns

[`CachedManager`](discloud_app.CachedManager.md)\<`T`\>

#### Overrides

[DataManager](discloud_app.DataManager.md).[constructor](discloud_app.DataManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/CachedManager.ts#L9)

## Properties

### \_cache

• `Protected` `Readonly` **\_cache**: `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[DataManager](discloud_app.DataManager.md).[_cache](discloud_app.DataManager.md#_cache)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/DataManager.ts#L9)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[DataManager](discloud_app.DataManager.md).[discloudApp](discloud_app.DataManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` `Readonly` **holds**: `T`

#### Inherited from

[DataManager](discloud_app.DataManager.md).[holds](discloud_app.DataManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

• `get` **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

DataManager.cache

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/DataManager.ts#L25)

## Methods

### \_add

▸ **_add**(`data`): `InstanceType`\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`InstanceType`\<`T`\>

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/CachedManager.ts#L19)

___

### \_addMany

▸ **_addMany**(`data`): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/CachedManager.ts#L33)

___

### \_clear

▸ **_clear**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | (`string` \| \{ `id`: `string`  })[] |

#### Returns

`void`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/CachedManager.ts#L45)

___

### \_delete

▸ **_delete**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/CachedManager.ts#L58)

___

### \_deleteMany

▸ **_deleteMany**(`ids`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`boolean`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/CachedManager.ts#L64)

___

### resolve

▸ **resolve**(`idOrInstance`): ``null`` \| `InstanceType`\<`T`\>

Resolves a data entry to a data Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idOrInstance` | `string` \| `InstanceType`\<`T`\> | The id or instance of something in this Manager |

#### Returns

``null`` \| `InstanceType`\<`T`\>

#### Inherited from

[DataManager](discloud_app.DataManager.md).[resolve](discloud_app.DataManager.md#resolve)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/DataManager.ts#L33)

___

### resolveId

▸ **resolveId**(`idOrInstance`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idOrInstance` | `string` \| `InstanceType`\<`T`\> |

#### Returns

`any`

#### Inherited from

[DataManager](discloud_app.DataManager.md).[resolveId](discloud_app.DataManager.md#resolveid)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/DataManager.ts#L39)

___

### valueOf

▸ **valueOf**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[DataManager](discloud_app.DataManager.md).[valueOf](discloud_app.DataManager.md#valueof)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/78281f4/packages/discloud.app/src/managers/DataManager.ts#L46)
