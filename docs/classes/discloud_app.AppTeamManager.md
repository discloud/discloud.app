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

• **new AppTeamManager**(`discloudApp`): [`AppTeamManager`](discloud_app.AppTeamManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Returns

[`AppTeamManager`](discloud_app.AppTeamManager.md)

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:11](https://github.com/discloud/discloud.app/blob/62751fe/packages/discloud.app/src/managers/AppTeamManager.ts#L11)

## Properties

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/62751fe/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

### create

▸ **create**(`appID`, `modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Add a mod for you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `modID` | `string` | The mod id |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) | The permissions for the mod. See [ModPermissionsResolvable](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:22](https://github.com/discloud/discloud.app/blob/62751fe/packages/discloud.app/src/managers/AppTeamManager.ts#L22)

___

### delete

▸ **delete**(`appID`, `modID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Remove a mod from you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `modID` | `string` | The mod id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:64](https://github.com/discloud/discloud.app/blob/62751fe/packages/discloud.app/src/managers/AppTeamManager.ts#L64)

___

### edit

▸ **edit**(`appID`, `modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

Edit permissions of a mod for you application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `modID` | `string` | The mod id |
| `perms` | [`ModPermissionsResolvable`](../modules/discloud_app.md#modpermissionsresolvable) | The permissions for the mod. See [ModPermissionsResolvable](../modules/discloud_app.md#modpermissionsresolvable) |

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/discloud_app.ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:43](https://github.com/discloud/discloud.app/blob/62751fe/packages/discloud.app/src/managers/AppTeamManager.ts#L43)

___

### fetch

▸ **fetch**(`appID`): `Promise`\<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

Get mods information for your app on Discloud

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `string` |

#### Returns

`Promise`\<[`ApiAppTeam`](../interfaces/discloud_app.ApiAppTeam.md)[]\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:78](https://github.com/discloud/discloud.app/blob/62751fe/packages/discloud.app/src/managers/AppTeamManager.ts#L78)
