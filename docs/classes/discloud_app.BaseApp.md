[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / BaseApp

# Class: BaseApp

[discloud.app](../modules/discloud_app.md).BaseApp

Base for app structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`BaseApp`**

  ↳↳ [`App`](discloud_app.App.md)

  ↳↳ [`AppUploaded`](discloud_app.AppUploaded.md)

## Table of contents

### Constructors

- [constructor](discloud_app.BaseApp.md#constructor)

### Properties

- [apt](discloud_app.BaseApp.md#apt)
- [autoRestart](discloud_app.BaseApp.md#autorestart)
- [constructor](discloud_app.BaseApp.md#constructor-1)
- [discloudApp](discloud_app.BaseApp.md#discloudapp)
- [id](discloud_app.BaseApp.md#id)
- [lang](discloud_app.BaseApp.md#lang)
- [mainFile](discloud_app.BaseApp.md#mainfile)
- [name](discloud_app.BaseApp.md#name)
- [ram](discloud_app.BaseApp.md#ram)
- [team](discloud_app.BaseApp.md#team)

### Methods

- [\_clone](discloud_app.BaseApp.md#_clone)
- [\_patch](discloud_app.BaseApp.md#_patch)
- [\_update](discloud_app.BaseApp.md#_update)
- [backup](discloud_app.BaseApp.md#backup)
- [delete](discloud_app.BaseApp.md#delete)
- [restart](discloud_app.BaseApp.md#restart)
- [setRam](discloud_app.BaseApp.md#setram)
- [start](discloud_app.BaseApp.md#start)
- [status](discloud_app.BaseApp.md#status)
- [stop](discloud_app.BaseApp.md#stop)
- [terminal](discloud_app.BaseApp.md#terminal)
- [toString](discloud_app.BaseApp.md#tostring)
- [update](discloud_app.BaseApp.md#update)

## Constructors

### constructor

• **new BaseApp**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiApp`](../interfaces/discloud_app.ApiApp.md) \| [`ApiUploadApp`](../interfaces/discloud_app.ApiUploadApp.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:40](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L40)

## Properties

### apt

• `Readonly` **apt**: [`AppAptManager`](discloud_app.AppAptManager.md)<[`BaseApp`](discloud_app.BaseApp.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:37](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L37)

___

### autoRestart

• **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:15](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L15)

___

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)<[`BaseApp`](discloud_app.BaseApp.md)\>

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

### id

• **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:19](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L19)

___

### lang

• **lang**: `string`

Your app programming language

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L23)

___

### mainFile

• **mainFile**: `string`

The main file of your application

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:27](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L27)

___

### name

• **name**: `string`

The name of your application

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:31](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L31)

___

### ram

• **ram**: `number`

The ram quantity for your application

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:35](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L35)

___

### team

• `Readonly` **team**: [`AppTeamManager`](discloud_app.AppTeamManager.md)<[`BaseApp`](discloud_app.BaseApp.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:38](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L38)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`BaseApp`](discloud_app.BaseApp.md)

#### Returns

[`BaseApp`](discloud_app.BaseApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`BaseApp`](discloud_app.BaseApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`BaseApp`](discloud_app.BaseApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_update

▸ `Protected` **_update**(`data`): [`BaseApp`](discloud_app.BaseApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`BaseApp`](discloud_app.BaseApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L23)

___

### backup

▸ **backup**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:75](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L75)

___

### delete

▸ **delete**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:89](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L89)

___

### restart

▸ **restart**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:103](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L103)

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

Promise [RESTPutApiAppRamResult](../interfaces/discloud_app.RESTPutApiAppRamResult.md)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:63](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L63)

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:110](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L110)

___

### status

▸ **status**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppStatus`](discloud_app.AppStatus.md)\>

Get the status of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:96](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L96)

___

### stop

▸ **stop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:119](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L119)

___

### terminal

▸ **terminal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:82](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L82)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

app id

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:136](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L136)

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

Promise [RESTPutApiAppCommitResult](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:129](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L129)
