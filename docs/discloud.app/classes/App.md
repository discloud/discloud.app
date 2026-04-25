[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / App

# Class: App

Defined in: [packages/discloud.app/src/structures/App.ts:11](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L11)

Base for app structures

## Extends

- [`BaseApp`](BaseApp.md)

## Constructors

### Constructor

> **new App**(`discloudApp`, `data`): `App`

Defined in: [packages/discloud.app/src/structures/App.ts:71](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L71)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiApp`](../interfaces/ApiApp.md)

#### Returns

`App`

#### Overrides

[`BaseApp`](BaseApp.md).[`constructor`](BaseApp.md#constructor)

## Properties

### addedTimestamp

> **addedTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/App.ts:15](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L15)

When your app was uploaded

***

### apts

> `readonly` **apts**: [`AppApt`](AppApt.md)

Defined in: [packages/discloud.app/src/structures/App.ts:67](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L67)

***

### autoRestart

> **autoRestart**: `boolean`

Defined in: [packages/discloud.app/src/structures/App.ts:19](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L19)

If your app has auto-restart enabled

***

### avatarURL

> **avatarURL**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:23](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L23)

Your app's avatar url

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseApp`](BaseApp.md).[`discloudApp`](BaseApp.md#discloudapp)

***

### exitCode

> **exitCode**: `number`

Defined in: [packages/discloud.app/src/structures/App.ts:27](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L27)

Your app's exit code on stopping

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:14](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L14)

Your app id

#### Inherited from

[`BaseApp`](BaseApp.md).[`id`](BaseApp.md#id)

***

### lang

> **lang**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:31](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L31)

Your app programming language

***

### mainFile

> **mainFile**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:35](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L35)

The main file of your application

***

### moderators

> `readonly` **moderators**: [`AppModeratorsManager`](AppModeratorsManager.md)

Defined in: [packages/discloud.app/src/structures/App.ts:68](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L68)

***

### mods

> `readonly` **mods**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/App.ts:39](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L39)

Moderators IDs of your app

***

### name

> **name**: `string`

Defined in: [packages/discloud.app/src/structures/App.ts:43](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L43)

The name of your application

***

### online

> **online**: `boolean`

Defined in: [packages/discloud.app/src/structures/App.ts:47](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L47)

If your app is online

***

### ram

> **ram**: `number`

Defined in: [packages/discloud.app/src/structures/App.ts:51](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L51)

The ram quantity for your application

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [packages/discloud.app/src/structures/App.ts:55](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L55)

If your application was stopped due to lack of RAM

***

### status

> `readonly` **status**: [`AppStatusManager`](AppStatusManager.md)

Defined in: [packages/discloud.app/src/structures/App.ts:69](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L69)

***

### type

> **type**: `number`

Defined in: [packages/discloud.app/src/structures/App.ts:59](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L59)

Your app's type

## Accessors

### apt

#### Get Signature

> **get** **apt**(): [`AppApt`](AppApt.md)

Defined in: [packages/discloud.app/src/structures/App.ts:62](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L62)

##### Deprecated

use apts instead.

##### Returns

[`AppApt`](AppApt.md)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseApp`](BaseApp.md).[`_clone`](BaseApp.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `App`

Defined in: [packages/discloud.app/src/structures/App.ts:81](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/App.ts#L81)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiApp`](../interfaces/ApiApp.md)\>

#### Returns

`App`

#### Overrides

[`BaseApp`](BaseApp.md).[`_patch`](BaseApp.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L26)

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

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:41](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L41)

Get backups of your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`backup`](BaseApp.md#backup)

***

### console()

> **console**(`command`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:50](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L50)

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

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:64](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L64)

Delete your application from Discloud.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`delete`](BaseApp.md#delete)

***

### profile()

> **profile**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:68](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L68)

#### Parameters

##### options

###### avatarURL?

`string` = `...`

###### name?

`string` = `...`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`profile`](BaseApp.md#profile)

***

### restart()

> **restart**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:75](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L75)

Restart your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`restart`](BaseApp.md#restart)

***

### setRam()

> **setRam**(`quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:34](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L34)

Set the quantity of ram to your application

#### Parameters

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`setRam`](BaseApp.md#setram)

***

### start()

> **start**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:82](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L82)

Start your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`start`](BaseApp.md#start)

***

### stop()

> **stop**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:91](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L91)

Stop your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`stop`](BaseApp.md#stop)

***

### terminal()

> **terminal**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:57](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L57)

Get logs of your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`terminal`](BaseApp.md#terminal)

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:106](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L106)

#### Returns

`string`

#### Inherited from

[`BaseApp`](BaseApp.md).[`toString`](BaseApp.md#tostring)

***

### update()

> **update**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:100](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseApp.ts#L100)

Update an of your apps on Discloud.

#### Parameters

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Inherited from

[`BaseApp`](BaseApp.md).[`update`](BaseApp.md#update)
