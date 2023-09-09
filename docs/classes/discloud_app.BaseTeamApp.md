[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / BaseTeamApp

# Class: BaseTeamApp

[discloud.app](../modules/discloud_app.md).BaseTeamApp

Base for app structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`BaseTeamApp`**

  ↳↳ [`TeamApp`](discloud_app.TeamApp.md)

## Table of contents

### Constructors

- [constructor](discloud_app.BaseTeamApp.md#constructor)

### Properties

- [constructor](discloud_app.BaseTeamApp.md#constructor-1)
- [discloudApp](discloud_app.BaseTeamApp.md#discloudapp)
- [id](discloud_app.BaseTeamApp.md#id)

### Methods

- [\_clone](discloud_app.BaseTeamApp.md#_clone)
- [\_patch](discloud_app.BaseTeamApp.md#_patch)
- [\_update](discloud_app.BaseTeamApp.md#_update)
- [backup](discloud_app.BaseTeamApp.md#backup)
- [restart](discloud_app.BaseTeamApp.md#restart)
- [setRam](discloud_app.BaseTeamApp.md#setram)
- [start](discloud_app.BaseTeamApp.md#start)
- [stop](discloud_app.BaseTeamApp.md#stop)
- [terminal](discloud_app.BaseTeamApp.md#terminal)
- [toString](discloud_app.BaseTeamApp.md#tostring)
- [update](discloud_app.BaseTeamApp.md#update)

## Constructors

### constructor

• **new BaseTeamApp**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:15](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L15)

## Properties

### constructor

• **constructor**: [`Constructor`](../modules/discloud_app.md#constructor)<[`BaseTeamApp`](discloud_app.BaseTeamApp.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Returns

[`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:24](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L24)

___

### \_update

▸ `Protected` **_update**(`data`): [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L22)

___

### backup

▸ **backup**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:34](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L34)

___

### restart

▸ **restart**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:66](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L66)

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

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:43](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L43)

___

### start

▸ **start**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:73](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L73)

___

### stop

▸ **stop**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:80](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L80)

___

### terminal

▸ **terminal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:50](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L50)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:86](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L86)

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

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:59](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/BaseTeamApp.ts#L59)
