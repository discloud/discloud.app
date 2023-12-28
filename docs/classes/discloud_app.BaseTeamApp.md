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

• **new BaseTeamApp**(`discloudApp`, `data`): [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:15](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L15)

## Properties

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)\<[`BaseTeamApp`](discloud_app.BaseTeamApp.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• `Readonly` **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

## Methods

### \_clone

▸ **_clone**(): [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Returns

[`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_patch

▸ **_patch**(`data`): [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md)\> |

#### Returns

[`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:24](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L24)

___

### \_update

▸ **_update**(`data`): [`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`BaseTeamApp`](discloud_app.BaseTeamApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/Base.ts#L26)

___

### backup

▸ **backup**(): `Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Returns

`Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:31](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L31)

___

### restart

▸ **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

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

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:40](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L40)

___

### start

▸ **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:70](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L70)

___

### stop

▸ **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:77](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L77)

___

### terminal

▸ **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:47](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L47)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

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

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:56](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/structures/BaseTeamApp.ts#L56)
