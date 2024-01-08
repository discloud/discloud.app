[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / BaseApp

# Class: BaseApp

[discloud.app](../modules/discloud_app.md).BaseApp

Base for app structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`BaseApp`**

  ↳↳ [`App`](discloud_app.App.md)

## Table of contents

### Constructors

- [constructor](discloud_app.BaseApp.md#constructor)

### Properties

- [constructor](discloud_app.BaseApp.md#constructor-1)
- [discloudApp](discloud_app.BaseApp.md#discloudapp)
- [id](discloud_app.BaseApp.md#id)

### Methods

- [\_clone](discloud_app.BaseApp.md#_clone)
- [\_patch](discloud_app.BaseApp.md#_patch)
- [\_update](discloud_app.BaseApp.md#_update)
- [backup](discloud_app.BaseApp.md#backup)
- [console](discloud_app.BaseApp.md#console)
- [delete](discloud_app.BaseApp.md#delete)
- [profile](discloud_app.BaseApp.md#profile)
- [restart](discloud_app.BaseApp.md#restart)
- [setRam](discloud_app.BaseApp.md#setram)
- [start](discloud_app.BaseApp.md#start)
- [stop](discloud_app.BaseApp.md#stop)
- [terminal](discloud_app.BaseApp.md#terminal)
- [toString](discloud_app.BaseApp.md#tostring)
- [update](discloud_app.BaseApp.md#update)

## Constructors

### constructor

• **new BaseApp**(`discloudApp`, `data`): [`BaseApp`](discloud_app.BaseApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`BaseApp`](discloud_app.BaseApp.md)

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:15](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L15)

## Properties

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)\<[`BaseApp`](discloud_app.BaseApp.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• `Readonly` **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:13](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L13)

## Methods

### \_clone

▸ **_clone**(): `this`

#### Returns

`this`

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_patch

▸ **_patch**(`data`): [`BaseApp`](discloud_app.BaseApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md)\> |

#### Returns

[`BaseApp`](discloud_app.BaseApp.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:24](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L24)

___

### \_update

▸ **_update**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`this`

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L26)

___

### backup

▸ **backup**(): `Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups of your application on Discloud

#### Returns

`Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:40](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L40)

___

### console

▸ **console**(`command`): `Promise`\<`string`\>

Send a command to your app's terminal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command |

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:49](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L49)

___

### delete

▸ **delete**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:63](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L63)

___

### profile

▸ **profile**(`options`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.avatarURL?` | `string` |
| `options.name?` | `string` |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:67](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L67)

___

### restart

▸ **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:74](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L74)

___

### setRam

▸ **setRam**(`quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:33](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L33)

___

### start

▸ **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:81](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L81)

___

### stop

▸ **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:90](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L90)

___

### terminal

▸ **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs of your application on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:56](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L56)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:105](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L105)

___

### update

▸ **update**(`options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your apps on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:99](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/BaseApp.ts#L99)
