[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / App

# Class: App

Defined in: [packages/discloud.app/src/structures/App.ts:8](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L8)

Base for app structures

## Extends

- [`BaseApp`](BaseApp.md)

## Constructors

### Constructor

> **new App**(`discloudApp`, `data`): `App`

Defined in: [packages/discloud.app/src/structures/App.ts:58](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L58)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiApp`](../interfaces/ApiApp.md) | [`ApiStatusApp`](../interfaces/ApiStatusApp.md)

#### Returns

`App`

#### Overrides

[`BaseApp`](BaseApp.md).[`constructor`](BaseApp.md#constructor)

## Properties

### apt

> `readonly` **apt**: [`AppApt`](AppApt.md)

Defined in: [packages/discloud.app/src/structures/App.ts:54](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L54)

***

### autoDeployGit

> **autoDeployGit**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:12](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L12)

If your app has auto deploy on github enabled

***

### autoRestart

> **autoRestart**: `boolean`

Defined in: [packages/discloud.app/src/structures/App.ts:16](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L16)

If your app has auto-restart enabled

***

### avatarURL

> **avatarURL**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:20](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L20)

Your app's avatar url

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`App`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`BaseApp.constructor`

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseApp`](BaseApp.md).[`discloudApp`](BaseApp.md#discloudapp)

***

### exitCode

> **exitCode**: `number`

Defined in: [packages/discloud.app/src/structures/App.ts:24](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L24)

Your app's exit code on stopping

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:13](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L13)

Your app id

#### Inherited from

[`BaseApp`](BaseApp.md).[`id`](BaseApp.md#id)

***

### lang

> **lang**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:28](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L28)

Your app programming language

***

### mainFile

> **mainFile**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:32](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L32)

The main file of your application

***

### mods

> `readonly` **mods**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/App.ts:36](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L36)

Moderators IDs of your app

***

### name

> **name**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:40](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L40)

The name of your application

***

### online

> **online**: `boolean`

Defined in: [packages/discloud.app/src/structures/App.ts:44](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L44)

If your app is online

***

### ram

> **ram**: `number`

Defined in: [packages/discloud.app/src/structures/App.ts:48](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L48)

The ram quantity for your application

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [packages/discloud.app/src/structures/App.ts:52](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L52)

If your application was stopped due to lack of RAM

***

### status

> `readonly` **status**: [`AppStatus`](AppStatus.md)

Defined in: [packages/discloud.app/src/structures/App.ts:55](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L55)

***

### team

> `readonly` **team**: [`AppTeam`](AppTeam.md)

Defined in: [packages/discloud.app/src/structures/App.ts:56](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L56)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseApp`](BaseApp.md).[`_clone`](BaseApp.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `App`

Defined in: [packages/discloud.app/src/structures/App.ts:70](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/App.ts#L70)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiApp`](../interfaces/ApiApp.md) \| [`ApiStatusApp`](../interfaces/ApiStatusApp.md)\>

#### Returns

`App`

#### Overrides

[`BaseApp`](BaseApp.md).[`_patch`](BaseApp.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`BaseApp`](BaseApp.md).[`_update`](BaseApp.md#_update)

***

### backup()

> **backup**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:40](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L40)

Get backups of your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`backup`](BaseApp.md#backup)

***

### console()

> **console**(`command`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:49](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L49)

Send a command to your app's terminal

#### Parameters

##### command

`string`

The command

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`console`](BaseApp.md#console)

***

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:63](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L63)

Delete your application from Discloud.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`delete`](BaseApp.md#delete)

***

### profile()

> **profile**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:67](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L67)

#### Parameters

##### options

###### avatarURL?

`string` = `...`

###### name?

`string` = `...`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`profile`](BaseApp.md#profile)

***

### restart()

> **restart**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:74](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L74)

Restart your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`restart`](BaseApp.md#restart)

***

### setRam()

> **setRam**(`quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:33](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L33)

Set the quantity of ram to your application

#### Parameters

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`setRam`](BaseApp.md#setram)

***

### start()

> **start**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:81](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L81)

Start your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`start`](BaseApp.md#start)

***

### stop()

> **stop**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:90](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L90)

Stop your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`stop`](BaseApp.md#stop)

***

### terminal()

> **terminal**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:56](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L56)

Get logs of your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`terminal`](BaseApp.md#terminal)

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:105](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L105)

#### Returns

`string`

#### Inherited from

[`BaseApp`](BaseApp.md).[`toString`](BaseApp.md#tostring)

***

### update()

> **update**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:99](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/structures/BaseApp.ts#L99)

Update an of your apps on Discloud.

#### Parameters

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`update`](BaseApp.md#update)
