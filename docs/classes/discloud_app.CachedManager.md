[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / CachedManager

# Class: CachedManager<T\>

[discloud.app](../modules/discloud_app.md).CachedManager

Manager of cache

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DataManager`](discloud_app.DataManager.md)<`T`\>

  ↳ **`CachedManager`**

  ↳↳ [`AppManager`](discloud_app.AppManager.md)

## Table of contents

### Constructors

- [constructor](discloud_app.CachedManager.md#constructor)

### Properties

- [#cache](discloud_app.CachedManager.md##cache)
- [discloudApp](discloud_app.CachedManager.md#discloudapp)
- [holds](discloud_app.CachedManager.md#holds)

### Accessors

- [cache](discloud_app.CachedManager.md#cache)

### Methods

- [\_add](discloud_app.CachedManager.md#_add)
- [\_addMany](discloud_app.CachedManager.md#_addmany)
- [\_remove](discloud_app.CachedManager.md#_remove)
- [\_removeMany](discloud_app.CachedManager.md#_removemany)

## Constructors

### constructor

• **new CachedManager**<`T`\>(`discloudApp`, `holds`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `holds` | [`Constructor`](../interfaces/discloud_app.Constructor.md)<`T`\> |

#### Overrides

[DataManager](discloud_app.DataManager.md).[constructor](discloud_app.DataManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:11](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/CachedManager.ts#L11)

## Properties

### #cache

• `Private` **#cache**: [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/CachedManager.ts#L9)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[DataManager](discloud_app.DataManager.md).[discloudApp](discloud_app.DataManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` **holds**: [`Constructor`](../interfaces/discloud_app.Constructor.md)<`T`\>

#### Inherited from

[DataManager](discloud_app.DataManager.md).[holds](discloud_app.DataManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/DataManager.ts#L9)

## Accessors

### cache

• `get` **cache**(): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Overrides

DataManager.cache

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:15](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/CachedManager.ts#L15)

## Methods

### \_add

▸ `Protected` **_add**(`data`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`T`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/CachedManager.ts#L19)

___

### \_addMany

▸ `Protected` **_addMany**(`data`): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/CachedManager.ts#L33)

___

### \_remove

▸ `Protected` **_remove**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:47](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/CachedManager.ts#L47)

___

### \_removeMany

▸ `Protected` **_removeMany**(`ids`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`boolean`

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:51](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/CachedManager.ts#L51)
