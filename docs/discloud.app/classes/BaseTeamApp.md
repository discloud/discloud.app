[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BaseTeamApp

# Class: `abstract` BaseTeamApp

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:9](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L9)

Base for app structures

## Extends

- [`Base`](Base.md)

## Extended by

- [`TeamApp`](TeamApp.md)

## Constructors

### new BaseTeamApp()

> **new BaseTeamApp**(`discloudApp`, `data`): [`BaseTeamApp`](BaseTeamApp.md)

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:15](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L15)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`BaseTeamApp`](BaseTeamApp.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

## Properties

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`BaseTeamApp`](BaseTeamApp.md)\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp-1)

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:13](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L13)

Your app id

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): [`BaseTeamApp`](BaseTeamApp.md)

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:24](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L24)

#### Parameters

##### data

`Partial`\<[`BaseApiApp`](../interfaces/BaseApiApp.md)\>

#### Returns

[`BaseTeamApp`](BaseTeamApp.md)

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

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

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### backup()

> **backup**(): `Promise`\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:31](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L31)

Get backups for the app of your team on Discloud

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

***

### restart()

> **restart**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:63](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L63)

Restart your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

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

***

### start()

> **start**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:70](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L70)

Start your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### stop()

> **stop**(): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:77](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L77)

Stop your team application on Discloud

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### terminal()

> **terminal**(): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:47](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L47)

Get logs for the app of your team on Discloud

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/BaseTeamApp.ts:83](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/BaseTeamApp.ts#L83)

#### Returns

`string`

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
