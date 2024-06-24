[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / TeamApp

# Class: TeamApp

Base for app structures

## Extends

- [`BaseTeamApp`](BaseTeamApp.md)

## Constructors

### new TeamApp()

> **new TeamApp**(`discloudApp`, `data`): [`TeamApp`](TeamApp.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`TeamApp`](TeamApp.md)

#### Overrides

[`BaseTeamApp`](BaseTeamApp.md).[`constructor`](BaseTeamApp.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:35](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L35)

## Properties

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`TeamApp`](TeamApp.md)\>

#### Inherited from

`BaseTeamApp.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`discloudApp`](BaseTeamApp.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

***

### exitCode

> **exitCode**: `number`

Your team's app exit code on stop

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:11](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L11)

***

### id

> `readonly` **id**: `string`

Your app id

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`id`](BaseTeamApp.md#id)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

***

### lang

> **lang**: `string`

Your team's app programming language

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L15)

***

### name

> **name**: `string`

Your team application name

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L19)

***

### online

> **online**: `boolean`

If your team application is online

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:23](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L23)

***

### perms

> `readonly` **perms**: `Set`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`\>

Your permissions to manage this application.

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L27)

***

### ramKilled

> **ramKilled**: `boolean`

If your team's app stopped due to low RAM

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L31)

***

### status

> `readonly` **status**: [`TeamAppStatus`](TeamAppStatus.md)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L33)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

#### Returns

`this`

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`_clone`](BaseTeamApp.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L18)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

#### Parameters

• **data**: `Partial`\<[`ApiStatusApp`](../interfaces/ApiStatusApp.md) \| [`ApiTeamApps`](../interfaces/ApiTeamApps.md)\>

#### Returns

`this`

#### Overrides

[`BaseTeamApp`](BaseTeamApp.md).[`_patch`](BaseTeamApp.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/TeamApp.ts:43](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamApp.ts#L43)

***

### \_update()

> `protected` **\_update**(`data`): `this`

#### Parameters

• **data**: `unknown`

#### Returns

`this`

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`_update`](BaseTeamApp.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L26)

***

### backup()

> **backup**(): `Promise`\<[`AppBackup`](AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`backup`](BaseTeamApp.md#backup)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L31)

***

### restart()

> **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`restart`](BaseTeamApp.md#restart)

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

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`setRam`](BaseTeamApp.md#setram)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:40](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L40)

***

### start()

> **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`start`](BaseTeamApp.md#start)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:70](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L70)

***

### stop()

> **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`stop`](BaseTeamApp.md#stop)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:77](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L77)

***

### terminal()

> **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`terminal`](BaseTeamApp.md#terminal)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:47](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L47)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`toString`](BaseTeamApp.md#tostring)

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

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`update`](BaseTeamApp.md#update)

#### Defined in

[packages/discloud.app/src/structures/BaseTeamApp.ts:56](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/BaseTeamApp.ts#L56)
