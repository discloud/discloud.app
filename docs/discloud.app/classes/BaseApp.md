[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BaseApp

# Class: `abstract` BaseApp

Base for app structures

## Extends

- [`Base`](Base.md)

## Extended by

- [`App`](App.md)

## Constructors

### new BaseApp()

> **new BaseApp**(`discloudApp`, `data`): [`BaseApp`](BaseApp.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`BaseApp`](BaseApp.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L15)

## Properties

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`BaseApp`](BaseApp.md)\>

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

[packages/discloud.app/src/structures/BaseApp.ts:13](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L13)

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

> `protected` **\_patch**(`data`): [`BaseApp`](BaseApp.md)

#### Parameters

• **data**: `Partial`\<[`BaseApiApp`](../interfaces/BaseApiApp.md)\>

#### Returns

[`BaseApp`](BaseApp.md)

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:24](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L24)

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

Get backups of your application on Discloud

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:40](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L40)

***

### console()

> **console**(`command`): `Promise`\<`string`\>

Send a command to your app's terminal

#### Parameters

• **command**: `string`

The command

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:49](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L49)

***

### delete()

> **delete**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:63](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L63)

***

### profile()

> **profile**(`options`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Parameters

• **options**

• **options.avatarURL?**: `string` = `...`

• **options.name?**: `string` = `...`

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:67](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L67)

***

### restart()

> **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:74](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L74)

***

### setRam()

> **setRam**(`quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Set the quantity of ram to your application

#### Parameters

• **quantity**: `number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L33)

***

### start()

> **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Start your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:81](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L81)

***

### stop()

> **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:90](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L90)

***

### terminal()

> **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Get logs of your application on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:56](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L56)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:105](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L105)

***

### update()

> **update**(`options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Update an of your apps on Discloud.

#### Parameters

• **options**: [`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:99](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L99)
