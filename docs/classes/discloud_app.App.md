[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / App

# Class: App

[discloud.app](../modules/discloud_app.md).App

Base for app structures

## Hierarchy

- [`BaseApp`](discloud_app.BaseApp.md)

  ↳ **`App`**

## Table of contents

### Constructors

- [constructor](discloud_app.App.md#constructor)

### Properties

- [apt](discloud_app.App.md#apt)
- [autoDeployGit](discloud_app.App.md#autodeploygit)
- [autoRestart](discloud_app.App.md#autorestart)
- [avatarURL](discloud_app.App.md#avatarurl)
- [constructor](discloud_app.App.md#constructor-1)
- [discloudApp](discloud_app.App.md#discloudapp)
- [exitCode](discloud_app.App.md#exitcode)
- [id](discloud_app.App.md#id)
- [lang](discloud_app.App.md#lang)
- [mainFile](discloud_app.App.md#mainfile)
- [mods](discloud_app.App.md#mods)
- [name](discloud_app.App.md#name)
- [online](discloud_app.App.md#online)
- [ram](discloud_app.App.md#ram)
- [ramKilled](discloud_app.App.md#ramkilled)
- [status](discloud_app.App.md#status)
- [team](discloud_app.App.md#team)

### Methods

- [\_clone](discloud_app.App.md#_clone)
- [\_patch](discloud_app.App.md#_patch)
- [\_update](discloud_app.App.md#_update)
- [backup](discloud_app.App.md#backup)
- [delete](discloud_app.App.md#delete)
- [profile](discloud_app.App.md#profile)
- [restart](discloud_app.App.md#restart)
- [setRam](discloud_app.App.md#setram)
- [start](discloud_app.App.md#start)
- [stop](discloud_app.App.md#stop)
- [terminal](discloud_app.App.md#terminal)
- [toString](discloud_app.App.md#tostring)
- [update](discloud_app.App.md#update)

## Constructors

### constructor

• **new App**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiApp`](../interfaces/discloud_app.ApiApp.md) \| [`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md) |

#### Overrides

[BaseApp](discloud_app.BaseApp.md).[constructor](discloud_app.BaseApp.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/App.ts:58](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L58)

## Properties

### apt

• `Readonly` **apt**: [`AppApt`](discloud_app.AppApt.md)

#### Defined in

[packages/discloud.app/src/structures/App.ts:54](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L54)

___

### autoDeployGit

• **autoDeployGit**: `string`

If your app has auto deploy on github enabled

#### Defined in

[packages/discloud.app/src/structures/App.ts:12](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L12)

___

### autoRestart

• **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[packages/discloud.app/src/structures/App.ts:16](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L16)

___

### avatarURL

• **avatarURL**: `string`

Your app's avatar url

#### Defined in

[packages/discloud.app/src/structures/App.ts:20](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L20)

___

### constructor

• **constructor**: [`Constructor`](../modules/discloud_app.md#constructor)<[`App`](discloud_app.App.md)\>

#### Inherited from

BaseApp.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[discloudApp](discloud_app.BaseApp.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L12)

___

### exitCode

• **exitCode**: `number`

Your app's exit code on stopping

#### Defined in

[packages/discloud.app/src/structures/App.ts:24](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L24)

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[id](discloud_app.BaseApp.md#id)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:13](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L13)

___

### lang

• **lang**: `string`

Your app programming language

#### Defined in

[packages/discloud.app/src/structures/App.ts:28](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L28)

___

### mainFile

• **mainFile**: `string`

The main file of your application

#### Defined in

[packages/discloud.app/src/structures/App.ts:32](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L32)

___

### mods

• `Readonly` **mods**: [`Set`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set )<`string`\>

Moderators IDs of your app

#### Defined in

[packages/discloud.app/src/structures/App.ts:36](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L36)

___

### name

• **name**: `string`

The name of your application

#### Defined in

[packages/discloud.app/src/structures/App.ts:40](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L40)

___

### online

• **online**: `boolean`

If your app is online

#### Defined in

[packages/discloud.app/src/structures/App.ts:44](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L44)

___

### ram

• **ram**: `number`

The ram quantity for your application

#### Defined in

[packages/discloud.app/src/structures/App.ts:48](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L48)

___

### ramKilled

• **ramKilled**: `boolean`

If your application was stopped due to lack of RAM

#### Defined in

[packages/discloud.app/src/structures/App.ts:52](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L52)

___

### status

• `Readonly` **status**: [`AppStatus`](discloud_app.AppStatus.md)

#### Defined in

[packages/discloud.app/src/structures/App.ts:55](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L55)

___

### team

• `Readonly` **team**: [`AppTeam`](discloud_app.AppTeam.md)

#### Defined in

[packages/discloud.app/src/structures/App.ts:56](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L56)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`App`](discloud_app.App.md)

#### Returns

[`App`](discloud_app.App.md)

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[_clone](discloud_app.BaseApp.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`App`](discloud_app.App.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ApiApp`](../interfaces/discloud_app.ApiApp.md) \| [`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md) |

#### Returns

[`App`](discloud_app.App.md)

#### Overrides

[BaseApp](discloud_app.BaseApp.md).[_patch](discloud_app.BaseApp.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/App.ts:68](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/App.ts#L68)

___

### \_update

▸ `Protected` **_update**(`data`): [`App`](discloud_app.App.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`App`](discloud_app.App.md)

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[_update](discloud_app.BaseApp.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L22)

___

### backup

▸ **backup**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[backup](discloud_app.BaseApp.md#backup)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:43](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L43)

___

### delete

▸ **delete**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[delete](discloud_app.BaseApp.md#delete)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:57](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L57)

___

### profile

▸ **profile**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.avatarURL?` | `string` |
| `options.name?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[profile](discloud_app.BaseApp.md#profile)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:61](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L61)

___

### restart

▸ **restart**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[restart](discloud_app.BaseApp.md#restart)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:68](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L68)

___

### setRam

▸ **setRam**(`quantity`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[setRam](discloud_app.BaseApp.md#setram)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:36](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L36)

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[start](discloud_app.BaseApp.md#start)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:75](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L75)

___

### stop

▸ **stop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[stop](discloud_app.BaseApp.md#stop)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:84](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L84)

___

### terminal

▸ **terminal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[terminal](discloud_app.BaseApp.md#terminal)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:50](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L50)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[toString](discloud_app.BaseApp.md#tostring)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:99](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L99)

___

### update

▸ **update**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your apps on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[update](discloud_app.BaseApp.md#update)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:93](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseApp.ts#L93)
