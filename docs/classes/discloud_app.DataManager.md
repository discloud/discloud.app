[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / DataManager

# Class: DataManager\<T\>

[discloud.app](../modules/discloud_app.md).DataManager

Manager for data

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructable`](../modules/discloud_app.md#constructable)\<`T`\> |

## Hierarchy

- [`BaseManager`](discloud_app.BaseManager.md)

  ↳ **`DataManager`**

  ↳↳ [`CachedManager`](discloud_app.CachedManager.md)

## Table of contents

### Constructors

- [constructor](discloud_app.DataManager.md#constructor)

### Properties

- [\_cache](discloud_app.DataManager.md#_cache)
- [discloudApp](discloud_app.DataManager.md#discloudapp)
- [holds](discloud_app.DataManager.md#holds)

### Accessors

- [cache](discloud_app.DataManager.md#cache)

### Methods

- [resolve](discloud_app.DataManager.md#resolve)
- [resolveId](discloud_app.DataManager.md#resolveid)
- [valueOf](discloud_app.DataManager.md#valueof)

## Constructors

### constructor

• **new DataManager**\<`T`\>(`discloudApp`, `holds`): [`DataManager`](discloud_app.DataManager.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructable`](../modules/discloud_app.md#constructable)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `holds` | `T` |

#### Returns

[`DataManager`](discloud_app.DataManager.md)\<`T`\>

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:12](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/DataManager.ts#L12)

## Properties

### \_cache

• `Protected` `Readonly` **\_cache**: `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/DataManager.ts#L9)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` `Readonly` **holds**: `T`

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

• `get` **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/DataManager.ts#L25)

## Methods

### resolve

▸ **resolve**(`idOrInstance`): ``null`` \| `InstanceType`\<`T`\>

Resolves a data entry to a data Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idOrInstance` | `string` \| `InstanceType`\<`T`\> | The id or instance of something in this Manager |

#### Returns

``null`` \| `InstanceType`\<`T`\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/DataManager.ts#L33)

___

### resolveId

▸ **resolveId**(`idOrInstance`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idOrInstance` | `string` \| `InstanceType`\<`T`\> |

#### Returns

`any`

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/DataManager.ts#L39)

___

### valueOf

▸ **valueOf**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/managers/DataManager.ts#L46)
