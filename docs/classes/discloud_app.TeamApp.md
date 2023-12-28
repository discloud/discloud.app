[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / TeamApp

# Class: TeamApp

[discloud.app](../modules/discloud_app.md).TeamApp

Base for app structures

## Hierarchy

- [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

  ↳ **`TeamApp`**

## Table of contents

### Constructors

- [constructor](discloud_app.TeamApp.md#constructor)

### Properties

- [constructor](discloud_app.TeamApp.md#constructor-1)
- [discloudApp](discloud_app.TeamApp.md#discloudapp)
- [exitCode](discloud_app.TeamApp.md#exitcode)
- [id](discloud_app.TeamApp.md#id)
- [lang](discloud_app.TeamApp.md#lang)
- [name](discloud_app.TeamApp.md#name)
- [online](discloud_app.TeamApp.md#online)
- [perms](discloud_app.TeamApp.md#perms)
- [ramKilled](discloud_app.TeamApp.md#ramkilled)
- [status](discloud_app.TeamApp.md#status)

### Methods

- [\_clone](discloud_app.TeamApp.md#_clone)
- [\_patch](discloud_app.TeamApp.md#_patch)
- [\_update](discloud_app.TeamApp.md#_update)
- [backup](discloud_app.TeamApp.md#backup)
- [restart](discloud_app.TeamApp.md#restart)
- [setRam](discloud_app.TeamApp.md#setram)
- [start](discloud_app.TeamApp.md#start)
- [stop](discloud_app.TeamApp.md#stop)
- [terminal](discloud_app.TeamApp.md#terminal)
- [toString](discloud_app.TeamApp.md#tostring)
- [update](discloud_app.TeamApp.md#update)

## Constructors

### constructor

• **new TeamApp**(`discloudApp`, `data`): [`TeamApp`](discloud_app.TeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Overrides

[BaseTeamApp](discloud_app.BaseTeamApp.md).[constructor](discloud_app.BaseTeamApp.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:35](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L35)

## Properties

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)\<[`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

BaseTeamApp.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[discloudApp](discloud_app.BaseTeamApp.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L12)

___

### exitCode

• **exitCode**: `number`

Your team's app exit code on stop

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:11](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L11)

___

### id

• `Readonly` **id**: `string`

Your app id

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[id](discloud_app.BaseTeamApp.md#id)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

___

### lang

• **lang**: `string`

Your team's app programming language

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:15](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L15)

___

### name

• **name**: `string`

Your team application name

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:19](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L19)

___

### online

• **online**: `boolean`

If your team application is online

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:23](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L23)

___

### perms

• `Readonly` **perms**: `Set`\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``\>

Your permissions to manage this application.

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:27](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L27)

___

### ramKilled

• **ramKilled**: `boolean`

If your team's app stopped due to low RAM

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:31](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L31)

___

### status

• `Readonly` **status**: [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:33](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L33)

## Methods

### \_clone

▸ **_clone**(): [`TeamApp`](discloud_app.TeamApp.md)

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[_clone](discloud_app.BaseTeamApp.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_patch

▸ **_patch**(`data`): [`TeamApp`](discloud_app.TeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md) \| [`ApiTeamApps`](../interfaces/discloud_app.ApiTeamApps.md)\> |

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Overrides

[BaseTeamApp](discloud_app.BaseTeamApp.md).[_patch](discloud_app.BaseTeamApp.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:43](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/TeamApp.ts#L43)

___

### \_update

▸ **_update**(`data`): [`TeamApp`](discloud_app.TeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[_update](discloud_app.BaseTeamApp.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L26)

___

### backup

▸ **backup**(): `Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Returns

`Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[backup](discloud_app.BaseTeamApp.md#backup)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:31](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L31)

___

### restart

▸ **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[restart](discloud_app.BaseTeamApp.md#restart)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:63](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L63)

___

### setRam

▸ **setRam**(`quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to application of your team

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[setRam](discloud_app.BaseTeamApp.md#setram)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:40](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L40)

___

### start

▸ **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[start](discloud_app.BaseTeamApp.md#start)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:70](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L70)

___

### stop

▸ **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[stop](discloud_app.BaseTeamApp.md#stop)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:77](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L77)

___

### terminal

▸ **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[terminal](discloud_app.BaseTeamApp.md#terminal)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:47](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L47)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[toString](discloud_app.BaseTeamApp.md#tostring)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:83](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L83)

___

### update

▸ **update**(`options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your team apps on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[update](discloud_app.BaseTeamApp.md#update)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:56](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L56)
