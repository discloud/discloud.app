[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppUploaded

# Class: AppUploaded

[discloud.app](../modules/discloud_app.md).AppUploaded

Base for app structures

## Hierarchy

- [`BaseApp`](discloud_app.BaseApp.md)

  ↳ **`AppUploaded`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppUploaded.md#constructor)

### Properties

- [addedAtTimestamp](discloud_app.AppUploaded.md#addedattimestamp)
- [apt](discloud_app.AppUploaded.md#apt)
- [autoRestart](discloud_app.AppUploaded.md#autorestart)
- [avatarURL](discloud_app.AppUploaded.md#avatarurl)
- [constructor](discloud_app.AppUploaded.md#constructor-1)
- [discloudApp](discloud_app.AppUploaded.md#discloudapp)
- [id](discloud_app.AppUploaded.md#id)
- [lang](discloud_app.AppUploaded.md#lang)
- [mainFile](discloud_app.AppUploaded.md#mainfile)
- [name](discloud_app.AppUploaded.md#name)
- [ram](discloud_app.AppUploaded.md#ram)
- [team](discloud_app.AppUploaded.md#team)
- [type](discloud_app.AppUploaded.md#type)
- [version](discloud_app.AppUploaded.md#version)

### Methods

- [\_clone](discloud_app.AppUploaded.md#_clone)
- [\_patch](discloud_app.AppUploaded.md#_patch)
- [\_update](discloud_app.AppUploaded.md#_update)
- [backup](discloud_app.AppUploaded.md#backup)
- [delete](discloud_app.AppUploaded.md#delete)
- [restart](discloud_app.AppUploaded.md#restart)
- [setRam](discloud_app.AppUploaded.md#setram)
- [start](discloud_app.AppUploaded.md#start)
- [status](discloud_app.AppUploaded.md#status)
- [stop](discloud_app.AppUploaded.md#stop)
- [terminal](discloud_app.AppUploaded.md#terminal)
- [toString](discloud_app.AppUploaded.md#tostring)
- [update](discloud_app.AppUploaded.md#update)

## Constructors

### constructor

• **new AppUploaded**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiUploadApp`](../interfaces/discloud_app.ApiUploadApp.md) |

#### Overrides

[BaseApp](discloud_app.BaseApp.md).[constructor](discloud_app.BaseApp.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppUploaded.ts#L23)

## Properties

### addedAtTimestamp

• **addedAtTimestamp**: `number`

The timestamp of the upload of your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:9](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppUploaded.ts#L9)

___

### apt

• `Readonly` **apt**: [`AppAptManager`](discloud_app.AppAptManager.md)<[`AppUploaded`](discloud_app.AppUploaded.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[apt](discloud_app.BaseApp.md#apt)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:37](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L37)

___

### autoRestart

• **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[autoRestart](discloud_app.BaseApp.md#autorestart)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:15](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L15)

___

### avatarURL

• **avatarURL**: `string`

Your app's avatar url

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:13](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppUploaded.ts#L13)

___

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)<[`AppUploaded`](discloud_app.AppUploaded.md)\>

#### Inherited from

BaseApp.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[discloudApp](discloud_app.BaseApp.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[id](discloud_app.BaseApp.md#id)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:19](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L19)

___

### lang

• **lang**: `string`

Your app programming language

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[lang](discloud_app.BaseApp.md#lang)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L23)

___

### mainFile

• **mainFile**: `string`

The main file of your application

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[mainFile](discloud_app.BaseApp.md#mainfile)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:27](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L27)

___

### name

• **name**: `string`

The name of your application

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[name](discloud_app.BaseApp.md#name)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:31](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L31)

___

### ram

• **ram**: `number`

The ram quantity for your application

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[ram](discloud_app.BaseApp.md#ram)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:35](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L35)

___

### team

• `Readonly` **team**: [`AppTeamManager`](discloud_app.AppTeamManager.md)<[`AppUploaded`](discloud_app.AppUploaded.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[team](discloud_app.BaseApp.md#team)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:38](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L38)

___

### type

• **type**: `string`

Your app's type

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:17](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppUploaded.ts#L17)

___

### version

• **version**: `string`

The version of the package

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:21](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/AppUploaded.ts#L21)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`AppUploaded`](discloud_app.AppUploaded.md)

#### Returns

[`AppUploaded`](discloud_app.AppUploaded.md)

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[_clone](discloud_app.BaseApp.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`AppUploaded`](discloud_app.AppUploaded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppUploaded`](discloud_app.AppUploaded.md)

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[_patch](discloud_app.BaseApp.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_update

▸ `Protected` **_update**(`data`): [`AppUploaded`](discloud_app.AppUploaded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppUploaded`](discloud_app.AppUploaded.md)

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[_update](discloud_app.BaseApp.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L23)

___

### backup

▸ **backup**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[backup](discloud_app.BaseApp.md#backup)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:75](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L75)

___

### delete

▸ **delete**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[delete](discloud_app.BaseApp.md#delete)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:89](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L89)

___

### restart

▸ **restart**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[restart](discloud_app.BaseApp.md#restart)

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

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[setRam](discloud_app.BaseApp.md#setram)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:63](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L63)

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[start](discloud_app.BaseApp.md#start)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:110](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L110)

___

### status

▸ **status**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppStatus`](discloud_app.AppStatus.md)\>

Get the status of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[status](discloud_app.BaseApp.md#status)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:96](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L96)

___

### stop

▸ **stop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[stop](discloud_app.BaseApp.md#stop)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:119](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L119)

___

### terminal

▸ **terminal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[terminal](discloud_app.BaseApp.md#terminal)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:82](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L82)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

app id

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[toString](discloud_app.BaseApp.md#tostring)

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

#### Inherited from

[BaseApp](discloud_app.BaseApp.md).[update](discloud_app.BaseApp.md#update)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:129](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/BaseApp.ts#L129)
