[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / DataManager

# Class: DataManager<T\>

[discloud.app](../modules/discloud_app.md).DataManager

Manager for data

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BaseManager`](discloud_app.BaseManager.md)

  ↳ **`DataManager`**

  ↳↳ [`CachedManager`](discloud_app.CachedManager.md)

  ↳↳ [`CachedManager`](discloud_app.CachedManager.md)

## Table of contents

### Constructors

- [constructor](discloud_app.DataManager.md#constructor)

### Properties

- [discloudApp](discloud_app.DataManager.md#discloudapp)
- [holds](discloud_app.DataManager.md#holds)

### Accessors

- [cache](discloud_app.DataManager.md#cache)

## Constructors

### constructor

• **new DataManager**<`T`\>(`discloudApp`, `holds`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `holds` | [`Constructor`](../modules/discloud_app.md#constructor)<`T`\> |

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/9141dfb/packages/discloud.app/src/managers/DataManager.ts#L9)

## Properties

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/9141dfb/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` **holds**: [`Constructor`](../modules/discloud_app.md#constructor)<`T`\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/9141dfb/packages/discloud.app/src/managers/DataManager.ts#L9)

## Accessors

### cache

• `Abstract` `get` **cache**(): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:13](https://github.com/discloud/discloud.app/blob/9141dfb/packages/discloud.app/src/managers/DataManager.ts#L13)
