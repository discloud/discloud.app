[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / SharedApp

# Class: SharedApp

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:8](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L8)

Base for app structures

## Extends

- [`BaseSharedApp`](BaseSharedApp.md)

## Constructors

### Constructor

> **new SharedApp**(`discloudApp`, `data`): `SharedApp`

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:37](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L37)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiTeamApp`](../interfaces/ApiTeamApp.md)

#### Returns

`SharedApp`

#### Overrides

[`BaseSharedApp`](BaseSharedApp.md).[`constructor`](BaseSharedApp.md#constructor)

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`discloudApp`](BaseSharedApp.md#discloudapp)

***

### exitCode

> **exitCode**: `number`

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L12)

Your team's app exit code on stop

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:13](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L13)

Your app id

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`id`](BaseSharedApp.md#id)

***

### lang

> **lang**: `string`

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:16](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L16)

Your team's app programming language

***

### name

> **name**: `string`

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:20](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L20)

Your team application name

***

### online

> **online**: `boolean`

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:24](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L24)

If your team application is online

***

### owner

> `readonly` **owner**: [`SharedAppOwner`](SharedAppOwner.md)

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:34](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L34)

***

### perms

> `readonly` **perms**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`\>

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:28](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L28)

Your permissions to manage this application.

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:32](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L32)

If your team's app stopped due to low RAM

***

### status

> `readonly` **status**: [`SharedAppStatusManager`](SharedAppStatusManager.md)

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:35](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L35)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`_clone`](BaseSharedApp.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/SharedApp.ts:46](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedApp.ts#L46)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiTeamApp`](../interfaces/ApiTeamApp.md)\>

#### Returns

`this`

#### Overrides

[`BaseSharedApp`](BaseSharedApp.md).[`_patch`](BaseSharedApp.md#_patch)

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

[`BaseSharedApp`](BaseSharedApp.md).[`_update`](BaseSharedApp.md#_update)

***

### backup()

> **backup**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:31](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L31)

Get backups for the app of your team on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`backup`](BaseSharedApp.md#backup)

***

### restart()

> **restart**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:63](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L63)

Restart your team application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`restart`](BaseSharedApp.md#restart)

***

### setRam()

> **setRam**(`quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:40](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L40)

Set the quantity of ram to application of your team

#### Parameters

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`setRam`](BaseSharedApp.md#setram)

***

### start()

> **start**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:70](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L70)

Start your team application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`start`](BaseSharedApp.md#start)

***

### stop()

> **stop**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:77](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L77)

Stop your team application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`stop`](BaseSharedApp.md#stop)

***

### terminal()

> **terminal**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:47](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L47)

Get logs for the app of your team on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`terminal`](BaseSharedApp.md#terminal)

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:83](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L83)

#### Returns

`string`

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`toString`](BaseSharedApp.md#tostring)

***

### update()

> **update**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseSharedApp.ts:56](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedApp.ts#L56)

Update an of your team apps on Discloud

#### Parameters

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Inherited from

[`BaseSharedApp`](BaseSharedApp.md).[`update`](BaseSharedApp.md#update)
