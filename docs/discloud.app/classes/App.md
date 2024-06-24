[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / App

# Class: App

Base for app structures

## Extends

- [`BaseApp`](BaseApp.md)

## Constructors

### new App()

> **new App**(`discloudApp`, `data`): [`App`](App.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`ApiApp`](../interfaces/ApiApp.md) \| [`ApiStatusApp`](../interfaces/ApiStatusApp.md)

#### Returns

[`App`](App.md)

#### Overrides

[`BaseApp`](BaseApp.md).[`constructor`](BaseApp.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/App.ts:58](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L58)

## Properties

### apt

> `readonly` **apt**: [`AppApt`](AppApt.md)

#### Defined in

[packages/discloud.app/src/structures/App.ts:54](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L54)

***

### autoDeployGit

> **autoDeployGit**: `string`

If your app has auto deploy on github enabled

#### Defined in

[packages/discloud.app/src/structures/App.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L12)

***

### autoRestart

> **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[packages/discloud.app/src/structures/App.ts:16](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L16)

***

### avatarURL

> **avatarURL**: `string`

Your app's avatar url

#### Defined in

[packages/discloud.app/src/structures/App.ts:20](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L20)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`App`](App.md)\>

#### Inherited from

`BaseApp.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`BaseApp`](BaseApp.md).[`discloudApp`](BaseApp.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

***

### exitCode

> **exitCode**: `number`

Your app's exit code on stopping

#### Defined in

[packages/discloud.app/src/structures/App.ts:24](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L24)

***

### id

> `readonly` **id**: `string`

Your app id

#### Inherited from

[`BaseApp`](BaseApp.md).[`id`](BaseApp.md#id)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:13](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L13)

***

### lang

> **lang**: `string`

Your app programming language

#### Defined in

[packages/discloud.app/src/structures/App.ts:28](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L28)

***

### mainFile

> **mainFile**: `string`

The main file of your application

#### Defined in

[packages/discloud.app/src/structures/App.ts:32](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L32)

***

### mods

> `readonly` **mods**: `Set`\<`string`\>

Moderators IDs of your app

#### Defined in

[packages/discloud.app/src/structures/App.ts:36](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L36)

***

### name

> **name**: `string`

The name of your application

#### Defined in

[packages/discloud.app/src/structures/App.ts:40](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L40)

***

### online

> **online**: `boolean`

If your app is online

#### Defined in

[packages/discloud.app/src/structures/App.ts:44](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L44)

***

### ram

> **ram**: `number`

The ram quantity for your application

#### Defined in

[packages/discloud.app/src/structures/App.ts:48](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L48)

***

### ramKilled

> **ramKilled**: `boolean`

If your application was stopped due to lack of RAM

#### Defined in

[packages/discloud.app/src/structures/App.ts:52](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L52)

***

### status

> `readonly` **status**: [`AppStatus`](AppStatus.md)

#### Defined in

[packages/discloud.app/src/structures/App.ts:55](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L55)

***

### team

> `readonly` **team**: [`AppTeam`](AppTeam.md)

#### Defined in

[packages/discloud.app/src/structures/App.ts:56](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L56)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

#### Returns

`this`

#### Inherited from

[`BaseApp`](BaseApp.md).[`_clone`](BaseApp.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L18)

***

### \_patch()

> `protected` **\_patch**(`data`): [`App`](App.md)

#### Parameters

• **data**: `Partial`\<[`ApiApp`](../interfaces/ApiApp.md) \| [`ApiStatusApp`](../interfaces/ApiStatusApp.md)\>

#### Returns

[`App`](App.md)

#### Overrides

[`BaseApp`](BaseApp.md).[`_patch`](BaseApp.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/App.ts:70](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/App.ts#L70)

***

### \_update()

> `protected` **\_update**(`data`): `this`

#### Parameters

• **data**: `unknown`

#### Returns

`this`

#### Inherited from

[`BaseApp`](BaseApp.md).[`_update`](BaseApp.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L26)

***

### backup()

> **backup**(): `Promise`\<[`AppBackup`](AppBackup.md)\>

Get backups of your application on Discloud

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`backup`](BaseApp.md#backup)

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

#### Inherited from

[`BaseApp`](BaseApp.md).[`console`](BaseApp.md#console)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:49](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L49)

***

### delete()

> **delete**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`delete`](BaseApp.md#delete)

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

#### Inherited from

[`BaseApp`](BaseApp.md).[`profile`](BaseApp.md#profile)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:67](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L67)

***

### restart()

> **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`restart`](BaseApp.md#restart)

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

#### Inherited from

[`BaseApp`](BaseApp.md).[`setRam`](BaseApp.md#setram)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L33)

***

### start()

> **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Start your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`start`](BaseApp.md#start)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:81](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L81)

***

### stop()

> **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`stop`](BaseApp.md#stop)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:90](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L90)

***

### terminal()

> **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Get logs of your application on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`terminal`](BaseApp.md#terminal)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:56](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L56)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Inherited from

[`BaseApp`](BaseApp.md).[`toString`](BaseApp.md#tostring)

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

#### Inherited from

[`BaseApp`](BaseApp.md).[`update`](BaseApp.md#update)

#### Defined in

[packages/discloud.app/src/structures/BaseApp.ts:99](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseApp.ts#L99)
