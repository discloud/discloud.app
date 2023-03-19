[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppTeam

# Class: AppTeam

[discloud.app](../modules/discloud_app.md).AppTeam

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`AppTeam`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppTeam.md#constructor)

### Properties

- [appId](discloud_app.AppTeam.md#appid)
- [constructor](discloud_app.AppTeam.md#constructor-1)
- [discloudApp](discloud_app.AppTeam.md#discloudapp)

### Methods

- [\_clone](discloud_app.AppTeam.md#_clone)
- [\_patch](discloud_app.AppTeam.md#_patch)
- [\_update](discloud_app.AppTeam.md#_update)
- [create](discloud_app.AppTeam.md#create)
- [delete](discloud_app.AppTeam.md#delete)
- [edit](discloud_app.AppTeam.md#edit)
- [fetch](discloud_app.AppTeam.md#fetch)

## Constructors

### constructor

• **new AppTeam**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:9](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/AppTeam.ts#L9)

## Properties

### appId

• **appId**: `string`

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:7](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/AppTeam.ts#L7)

___

### constructor

• **constructor**: [`Constructor`](../modules/discloud_app.md#constructor)<[`AppTeam`](discloud_app.AppTeam.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L12)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`AppTeam`](discloud_app.AppTeam.md)

#### Returns

[`AppTeam`](discloud_app.AppTeam.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`AppTeam`](discloud_app.AppTeam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`AppTeam`](discloud_app.AppTeam.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:31](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/AppTeam.ts#L31)

___

### \_update

▸ `Protected` **_update**(`data`): [`AppTeam`](discloud_app.AppTeam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppTeam`](discloud_app.AppTeam.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L22)

___

### create

▸ **create**(`modID`, `perms`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modID` | `string` |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:15](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/AppTeam.ts#L15)

___

### delete

▸ **delete**(`modID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modID` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:23](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/AppTeam.ts#L23)

___

### edit

▸ **edit**(`modID`, `perms`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modID` | `string` |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:19](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/AppTeam.ts#L19)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:27](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/AppTeam.ts#L27)
