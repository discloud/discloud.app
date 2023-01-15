[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppTeamManager

# Class: AppTeamManager<T\>

[discloud.app](../modules/discloud_app.md).AppTeamManager

Manager for Team on your application on Discloud

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseApp`](discloud_app.BaseApp.md) |

## Hierarchy

- [`BaseManager`](discloud_app.BaseManager.md)

  ↳ **`AppTeamManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppTeamManager.md#constructor)

### Properties

- [app](discloud_app.AppTeamManager.md#app)
- [discloudApp](discloud_app.AppTeamManager.md#discloudapp)

### Methods

- [create](discloud_app.AppTeamManager.md#create)
- [delete](discloud_app.AppTeamManager.md#delete)
- [edit](discloud_app.AppTeamManager.md#edit)
- [fetch](discloud_app.AppTeamManager.md#fetch)

## Constructors

### constructor

• **new AppTeamManager**<`T`\>(`discloudApp`, `app`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseApp`](discloud_app.BaseApp.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `app` | `T` |

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:11](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/AppTeamManager.ts#L11)

## Properties

### app

• `Readonly` **app**: `T`

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:11](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/AppTeamManager.ts#L11)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

### create

▸ **create**(`modID`, `perms`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Add a mod for you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modID` | `string` | The mod id |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) | The permissions for the mod. See [ModPermissionsResolvable](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Promise [ApiAppTeamManager](../interfaces/discloud_app.ApiAppTeamManager.md)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:22](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/AppTeamManager.ts#L22)

___

### delete

▸ **delete**(`modID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Remove a mod from you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modID` | `string` | The mod id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Promise [RESTDeleteApiAppTeamResult](../modules/discloud_app.md#restdeleteapiappteamresult)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:58](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/AppTeamManager.ts#L58)

___

### edit

▸ **edit**(`modID`, `perms`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Edit permissions of a mod for you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modID` | `string` | The mod id |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) | The permissions for the mod. See [ModPermissionsResolvable](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Promise [ApiAppTeamManager](../interfaces/discloud_app.ApiAppTeamManager.md)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:40](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/AppTeamManager.ts#L40)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

Get mods information for your app on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

Promise [RESTGetApiAppTeamResult](../interfaces/discloud_app.RESTGetApiAppTeamResult.md)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:71](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/managers/AppTeamManager.ts#L71)
