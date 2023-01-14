[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / Team

# Class: Team

[discloud.app](../modules/discloud_app.md).Team

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`Team`**

## Table of contents

### Constructors

- [constructor](discloud_app.Team.md#constructor)

### Properties

- [constructor](discloud_app.Team.md#constructor-1)
- [discloudApp](discloud_app.Team.md#discloudapp)
- [exitCode](discloud_app.Team.md#exitcode)
- [id](discloud_app.Team.md#id)
- [lang](discloud_app.Team.md#lang)
- [name](discloud_app.Team.md#name)
- [online](discloud_app.Team.md#online)
- [perms](discloud_app.Team.md#perms)
- [ramKilled](discloud_app.Team.md#ramkilled)

### Methods

- [\_clone](discloud_app.Team.md#_clone)
- [\_patch](discloud_app.Team.md#_patch)
- [\_update](discloud_app.Team.md#_update)
- [backup](discloud_app.Team.md#backup)
- [restart](discloud_app.Team.md#restart)
- [setRam](discloud_app.Team.md#setram)
- [start](discloud_app.Team.md#start)
- [status](discloud_app.Team.md#status)
- [stop](discloud_app.Team.md#stop)
- [terminal](discloud_app.Team.md#terminal)
- [toString](discloud_app.Team.md#tostring)
- [update](discloud_app.Team.md#update)

## Constructors

### constructor

• **new Team**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiTeamApps`](../interfaces/discloud_app.ApiTeamApps.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/Team.ts:37](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L37)

## Properties

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)<[`Team`](discloud_app.Team.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L12)

___

### exitCode

• **exitCode**: `number`

Your team's app exit code on stop

#### Defined in

[packages/discloud.app/src/structures/Team.ts:15](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L15)

___

### id

• **id**: `string`

Your team application id

#### Defined in

[packages/discloud.app/src/structures/Team.ts:11](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L11)

___

### lang

• **lang**: `string`

Your team's app programming language

#### Defined in

[packages/discloud.app/src/structures/Team.ts:19](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L19)

___

### name

• **name**: `string`

Your team application name

#### Defined in

[packages/discloud.app/src/structures/Team.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L23)

___

### online

• **online**: `boolean`

If your team application is online

#### Defined in

[packages/discloud.app/src/structures/Team.ts:27](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L27)

___

### perms

• **perms**: `string`[]

Your permissions to manage this application.

#### Defined in

[packages/discloud.app/src/structures/Team.ts:31](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L31)

___

### ramKilled

• **ramKilled**: `boolean`

If your team's app stopped due to low RAM

#### Defined in

[packages/discloud.app/src/structures/Team.ts:35](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L35)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`Team`](discloud_app.Team.md)

#### Returns

[`Team`](discloud_app.Team.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`Team`](discloud_app.Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`Team`](discloud_app.Team.md)

#### Inherited from

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_update

▸ `Protected` **_update**(`data`): [`Team`](discloud_app.Team.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`Team`](discloud_app.Team.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L23)

___

### backup

▸ **backup**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/Team.ts:52](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L52)

___

### restart

▸ **restart**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/Team.ts:93](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L93)

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

Promise [RESTPutApiAppRamResult](../interfaces/discloud_app.RESTPutApiAppRamResult.md)

#### Defined in

[packages/discloud.app/src/structures/Team.ts:62](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L62)

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/Team.ts:104](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L104)

___

### status

▸ **status**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppStatus`](../interfaces/discloud_app.ApiAppStatus.md)\>

Get the status for the app of your team on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppStatus`](../interfaces/discloud_app.ApiAppStatus.md)\>

#### Defined in

[packages/discloud.app/src/structures/Team.ts:69](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L69)

___

### stop

▸ **stop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/Team.ts:115](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L115)

___

### terminal

▸ **terminal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/Team.ts:76](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L76)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

app id

#### Defined in

[packages/discloud.app/src/structures/Team.ts:126](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L126)

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

Promise [RESTPutApiAppCommitResult](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)

#### Defined in

[packages/discloud.app/src/structures/Team.ts:86](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Team.ts#L86)
