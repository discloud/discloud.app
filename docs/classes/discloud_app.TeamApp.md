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

• **new TeamApp**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md) \| [`ApiTeamApps`](../interfaces/discloud_app.ApiTeamApps.md) |

#### Overrides

[BaseTeamApp](discloud_app.BaseTeamApp.md).[constructor](discloud_app.BaseTeamApp.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:35](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L35)

## Properties

### constructor

• **constructor**: [`Constructor`](../modules/discloud_app.md#constructor)<[`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

BaseTeamApp.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[discloudApp](discloud_app.BaseTeamApp.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/Base.ts#L12)

___

### exitCode

• **exitCode**: `number`

Your team's app exit code on stop

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:11](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L11)

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[id](discloud_app.BaseTeamApp.md#id)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

___

### lang

• **lang**: `string`

Your team's app programming language

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:15](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L15)

___

### name

• **name**: `string`

Your team application name

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:19](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L19)

___

### online

• **online**: `boolean`

If your team application is online

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:23](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L23)

___

### perms

• `Readonly` **perms**: [`Set`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set )<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``\>

Your permissions to manage this application.

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:27](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L27)

___

### ramKilled

• **ramKilled**: `boolean`

If your team's app stopped due to low RAM

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:31](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L31)

___

### status

• `Readonly` **status**: [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:33](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L33)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`TeamApp`](discloud_app.TeamApp.md)

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[_clone](discloud_app.BaseTeamApp.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`TeamApp`](discloud_app.TeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md) \| [`ApiTeamApps`](../interfaces/discloud_app.ApiTeamApps.md) |

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Overrides

[BaseTeamApp](discloud_app.BaseTeamApp.md).[_patch](discloud_app.BaseTeamApp.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:43](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/TeamApp.ts#L43)

___

### \_update

▸ `Protected` **_update**(`data`): [`TeamApp`](discloud_app.TeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[_update](discloud_app.BaseTeamApp.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/Base.ts#L22)

___

### backup

▸ **backup**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[backup](discloud_app.BaseTeamApp.md#backup)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:34](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L34)

___

### restart

▸ **restart**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[restart](discloud_app.BaseTeamApp.md#restart)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:66](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L66)

___

### setRam

▸ **setRam**(`quantity`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to application of your team

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[setRam](discloud_app.BaseTeamApp.md#setram)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:43](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L43)

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[start](discloud_app.BaseTeamApp.md#start)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:73](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L73)

___

### stop

▸ **stop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[stop](discloud_app.BaseTeamApp.md#stop)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:80](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L80)

___

### terminal

▸ **terminal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[terminal](discloud_app.BaseTeamApp.md#terminal)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:50](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L50)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[toString](discloud_app.BaseTeamApp.md#tostring)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:86](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L86)

___

### update

▸ **update**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your team apps on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

#### Inherited from

[BaseTeamApp](discloud_app.BaseTeamApp.md).[update](discloud_app.BaseTeamApp.md#update)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:59](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/structures/BaseTeamApp.ts#L59)
