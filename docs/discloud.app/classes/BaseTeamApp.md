[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BaseTeamApp

# Class: `abstract` BaseTeamApp

Base for app structures

## Extends

- [`Base`](Base.md)

## Extended by

- [`TeamApp`](TeamApp.md)

## Constructors

### new BaseTeamApp()

> **new BaseTeamApp**(`discloudApp`, `data`): [`BaseTeamApp`](BaseTeamApp.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`BaseTeamApp`](BaseTeamApp.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L15)

## Properties

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`BaseTeamApp`](BaseTeamApp.md)\>

#### Inherited from

`Base.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

***

### id

> `readonly` **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L18)

***

### \_patch()

> `protected` **\_patch**(`data`): [`BaseTeamApp`](BaseTeamApp.md)

#### Parameters

• **data**: `Partial`\<[`BaseApiApp`](../interfaces/BaseApiApp.md)\>

#### Returns

[`BaseTeamApp`](BaseTeamApp.md)

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:24](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L24)

***

### \_update()

> `protected` **\_update**(`data`): `this`

#### Parameters

• **data**: `unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L26)

***

### backup()

> **backup**(): `Promise`\<[`AppBackup`](AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L31)

***

### restart()

> **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:63](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L63)

***

### setRam()

> **setRam**(`quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Set the quantity of ram to application of your team

#### Parameters

• **quantity**: `number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:40](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L40)

***

### start()

> **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:70](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L70)

***

### stop()

> **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:77](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L77)

***

### terminal()

> **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:47](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L47)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:83](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L83)

***

### update()

> **update**(`options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Update an of your team apps on Discloud

#### Parameters

• **options**: [`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:56](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L56)
