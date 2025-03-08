[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / TeamApp

# Class: TeamApp

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:7](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L7)

Base for app structures

## Extends

- [`BaseTeamApp`](BaseTeamApp.md)

## Constructors

### new TeamApp()

> **new TeamApp**(`discloudApp`, `data`): [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:35](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L35)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`TeamApp`](TeamApp.md)

#### Overrides

[`BaseTeamApp`](BaseTeamApp.md).[`constructor`](BaseTeamApp.md#constructors)

## Properties

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`TeamApp`](TeamApp.md)\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`BaseTeamApp.constructor`

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`discloudApp`](BaseTeamApp.md#discloudapp-1)

***

### exitCode

> **exitCode**: `number`

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:11](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L11)

Your team's app exit code on stop

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

Your app id

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`id`](BaseTeamApp.md#id)

***

### lang

> **lang**: `string`

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:15](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L15)

Your team's app programming language

***

### name

> **name**: `string`

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:19](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L19)

Your team application name

***

### online

> **online**: `boolean`

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:23](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L23)

If your team application is online

***

### perms

> `readonly` **perms**: `Set`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`\>

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:27](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L27)

Your permissions to manage this application.

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:31](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L31)

If your team's app stopped due to low RAM

***

### status

> `readonly` **status**: [`TeamAppStatus`](TeamAppStatus.md)

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:33](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L33)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`_clone`](BaseTeamApp.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/TeamApp.ts:43](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/TeamApp.ts#L43)

#### Parameters

##### data

`Partial`\<[`ApiStatusApp`](../interfaces/ApiStatusApp.md) \| [`ApiTeamApps`](../interfaces/ApiTeamApps.md)\>

#### Returns

`this`

#### Overrides

[`BaseTeamApp`](BaseTeamApp.md).[`_patch`](BaseTeamApp.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`_update`](BaseTeamApp.md#_update)

***

### backup()

> **backup**(): `Promise`\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:31](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L31)

Get backups for the app of your team on Discloud

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`backup`](BaseTeamApp.md#backup)

***

### restart()

> **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:63](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L63)

Restart your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`restart`](BaseTeamApp.md#restart)

***

### setRam()

> **setRam**(`quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:40](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L40)

Set the quantity of ram to application of your team

#### Parameters

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`setRam`](BaseTeamApp.md#setram)

***

### start()

> **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:70](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L70)

Start your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`start`](BaseTeamApp.md#start)

***

### stop()

> **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:77](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L77)

Stop your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`stop`](BaseTeamApp.md#stop)

***

### terminal()

> **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:47](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L47)

Get logs for the app of your team on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`terminal`](BaseTeamApp.md#terminal)

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:83](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L83)

#### Returns

`string`

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`toString`](BaseTeamApp.md#tostring)

***

### update()

> **update**(`options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:56](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L56)

Update an of your team apps on Discloud

#### Parameters

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Inherited from

[`BaseTeamApp`](BaseTeamApp.md).[`update`](BaseTeamApp.md#update)
