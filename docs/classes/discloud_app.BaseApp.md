[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / BaseApp

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
- [delete](discloud_app.BaseApp.md#delete)
- [restart](discloud_app.BaseApp.md#restart)
- [setRam](discloud_app.BaseApp.md#setram)
- [start](discloud_app.BaseApp.md#start)
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
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:17](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L17)

## Properties

### constructor

• **constructor**: [`Constructor`](../modules/discloud_app.md#constructor)<[`BaseApp`](discloud_app.BaseApp.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:15](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L15)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`BaseApp`](discloud_app.BaseApp.md)

#### Returns

[`BaseApp`](discloud_app.BaseApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`BaseApp`](discloud_app.BaseApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`BaseApp`](discloud_app.BaseApp.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:26](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L26)

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

[packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/Base.ts#L22)

___

### backup

▸ **backup**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:46](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L46)

___

### delete

▸ **delete**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:60](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L60)

___

### restart

▸ **restart**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:67](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L67)

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

[packages/discloud.app/src/structures/BaseApp.ts:39](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L39)

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:74](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L74)

___

### stop

▸ **stop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:83](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L83)

___

### terminal

▸ **terminal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs of your application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:53](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L53)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

app id

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:100](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L100)

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

[packages/discloud.app/src/structures/BaseApp.ts:93](https://github.com/discloud/discloud.app/blob/9c516a5/packages/discloud.app/src/structures/BaseApp.ts#L93)
