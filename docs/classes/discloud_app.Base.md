[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / Base

# Class: Base

[discloud.app](../modules/discloud_app.md).Base

Base for all structures

## Hierarchy

- **`Base`**

  ↳ [`AppApt`](discloud_app.AppApt.md)

  ↳ [`AppBackup`](discloud_app.AppBackup.md)

  ↳ [`AppStatus`](discloud_app.AppStatus.md)

  ↳ [`AppTeam`](discloud_app.AppTeam.md)

  ↳ [`AppUploaded`](discloud_app.AppUploaded.md)

  ↳ [`BaseApp`](discloud_app.BaseApp.md)

  ↳ [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

  ↳ [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

  ↳ [`User`](discloud_app.User.md)

## Table of contents

### Constructors

- [constructor](discloud_app.Base.md#constructor)

### Properties

- [constructor](discloud_app.Base.md#constructor-1)
- [discloudApp](discloud_app.Base.md#discloudapp)

### Methods

- [\_clone](discloud_app.Base.md#_clone)
- [\_patch](discloud_app.Base.md#_patch)
- [\_update](discloud_app.Base.md#_update)

## Constructors

### constructor

• **new Base**(`discloudApp`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L12)

## Properties

### constructor

• **constructor**: [`Constructor`](../modules/discloud_app.md#constructor)<[`Base`](discloud_app.Base.md)\>

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L12)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`Base`](discloud_app.Base.md)

#### Returns

[`Base`](discloud_app.Base.md)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`Base`](discloud_app.Base.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`Base`](discloud_app.Base.md)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_update

▸ `Protected` **_update**(`data`): [`Base`](discloud_app.Base.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`Base`](discloud_app.Base.md)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L22)
