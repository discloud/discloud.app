[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppBackup

# Class: AppBackup

[discloud.app](../modules/discloud_app.md).AppBackup

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`AppBackup`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppBackup.md#constructor)

### Properties

- [constructor](discloud_app.AppBackup.md#constructor-1)
- [data](discloud_app.AppBackup.md#data)
- [discloudApp](discloud_app.AppBackup.md#discloudapp)
- [id](discloud_app.AppBackup.md#id)
- [status](discloud_app.AppBackup.md#status)
- [url](discloud_app.AppBackup.md#url)

### Methods

- [\_clone](discloud_app.AppBackup.md#_clone)
- [\_patch](discloud_app.AppBackup.md#_patch)
- [\_update](discloud_app.AppBackup.md#_update)
- [download](discloud_app.AppBackup.md#download)

## Constructors

### constructor

• **new AppBackup**(`discloudApp`, `backup`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `backup` | [`ApiAppBackup`](../interfaces/discloud_app.ApiAppBackup.md) \| [`ApiAppBackupAll`](../interfaces/discloud_app.ApiAppBackupAll.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:27](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppBackup.ts#L27)

## Properties

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L5)

___

### data

• `Optional` **data**: `Buffer`

The backup Buffer

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:25](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppBackup.ts#L25)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:12](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppBackup.ts#L12)

___

### status

• `Optional` **status**: `string`

The backup status

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:21](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppBackup.ts#L21)

___

### url

• **url**: `string`

The backup url.
- You can access it `only once`.

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:17](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppBackup.ts#L17)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`AppBackup`](discloud_app.AppBackup.md)

#### Returns

[`AppBackup`](discloud_app.AppBackup.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`AppBackup`](discloud_app.AppBackup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppBackup`](discloud_app.AppBackup.md)

#### Inherited from

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_update

▸ `Protected` **_update**(`data`): [`AppBackup`](discloud_app.AppBackup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppBackup`](discloud_app.AppBackup.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L23)

___

### download

▸ **download**(`path?`, `fileName?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Make backup of your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | Backup path |
| `fileName` | `string` | Backup file name |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:43](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppBackup.ts#L43)
