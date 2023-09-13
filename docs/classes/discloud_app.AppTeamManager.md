[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppTeamManager

# Class: AppTeamManager

[discloud.app](../modules/discloud_app.md).AppTeamManager

Manager for Team on your application on Discloud

## Hierarchy

- [`BaseManager`](discloud_app.BaseManager.md)

  ↳ **`AppTeamManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppTeamManager.md#constructor)

### Properties

- [discloudApp](discloud_app.AppTeamManager.md#discloudapp)

### Methods

- [create](discloud_app.AppTeamManager.md#create)
- [delete](discloud_app.AppTeamManager.md#delete)
- [edit](discloud_app.AppTeamManager.md#edit)
- [fetch](discloud_app.AppTeamManager.md#fetch)

## Constructors

### constructor

• **new AppTeamManager**(`discloudApp`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:10](https://github.com/discloud/discloud.app/blob/bf097cb/packages/discloud.app/src/managers/AppTeamManager.ts#L10)

## Properties

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/bf097cb/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

### create

▸ **create**(`appID`, `modID`, `perms`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Add a mod for you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `modID` | `string` | The mod id |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) | The permissions for the mod. See [ModPermissionsResolvable](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:21](https://github.com/discloud/discloud.app/blob/bf097cb/packages/discloud.app/src/managers/AppTeamManager.ts#L21)

___

### delete

▸ **delete**(`appID`, `modID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Remove a mod from you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `modID` | `string` | The mod id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:57](https://github.com/discloud/discloud.app/blob/bf097cb/packages/discloud.app/src/managers/AppTeamManager.ts#L57)

___

### edit

▸ **edit**(`appID`, `modID`, `perms`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Edit permissions of a mod for you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `modID` | `string` | The mod id |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) | The permissions for the mod. See [ModPermissionsResolvable](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:39](https://github.com/discloud/discloud.app/blob/bf097cb/packages/discloud.app/src/managers/AppTeamManager.ts#L39)

___

### fetch

▸ **fetch**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

Get mods information for your app on Discloud

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:69](https://github.com/discloud/discloud.app/blob/bf097cb/packages/discloud.app/src/managers/AppTeamManager.ts#L69)
