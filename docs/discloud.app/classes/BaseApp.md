[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BaseApp

# Class: `abstract` BaseApp

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:9](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L9)

Base for app structures

## Extends

- [`Base`](Base.md)

## Extended by

- [`App`](App.md)

## Constructors

### Constructor

> **new BaseApp**(`discloudApp`, `data`): `BaseApp`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:15](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L15)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

`BaseApp`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`BaseApp`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:13](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L13)

Your app id

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `BaseApp`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:24](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L24)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`BaseApiApp`](../interfaces/BaseApiApp.md)\>

#### Returns

`BaseApp`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### backup()

> **backup**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:40](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L40)

Get backups of your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

***

### console()

> **console**(`command`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:49](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L49)

Send a command to your app's terminal

#### Parameters

##### command

`string`

The command

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

***

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:63](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L63)

Delete your application from Discloud.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### profile()

> **profile**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:67](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L67)

#### Parameters

##### options

###### avatarURL?

`string` = `...`

###### name?

`string` = `...`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### restart()

> **restart**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:74](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L74)

Restart your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### setRam()

> **setRam**(`quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:33](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L33)

Set the quantity of ram to your application

#### Parameters

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

***

### start()

> **start**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:81](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L81)

Start your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### stop()

> **stop**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:90](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L90)

Stop your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### terminal()

> **terminal**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:56](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L56)

Get logs of your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:105](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L105)

#### Returns

`string`

***

### update()

> **update**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseApp.ts:99](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/discloud.app/src/structures/BaseApp.ts#L99)

Update an of your apps on Discloud.

#### Parameters

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>
