[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / TeamAppManager

# Class: TeamAppManager

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:16](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L16)

Manager for your team on Discloud

## Extends

- [`CachedManager`](CachedManager.md)\<*typeof* [`TeamApp`](TeamApp.md)\>

## Constructors

### new TeamAppManager()

> **new TeamAppManager**(`discloudApp`): [`TeamAppManager`](TeamAppManager.md)

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:17](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L17)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

[`TeamAppManager`](TeamAppManager.md)

#### Overrides

[`CachedManager`](CachedManager.md).[`constructor`](CachedManager.md#constructors)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, [`TeamApp`](TeamApp.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_cache`](CachedManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`CachedManager`](CachedManager.md).[`discloudApp`](CachedManager.md#discloudapp-1)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/DataManager.ts#L10)

#### Inherited from

[`CachedManager`](CachedManager.md).[`holds`](CachedManager.md#holds-1)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`cache`](CachedManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/CachedManager.ts#L19)

#### Parameters

##### data

`any`

#### Returns

[`TeamApp`](TeamApp.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_add`](CachedManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): `Map`\<`string`, [`TeamApp`](TeamApp.md)\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/CachedManager.ts#L33)

#### Parameters

##### data

`any`[]

#### Returns

`Map`\<`string`, [`TeamApp`](TeamApp.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`_addMany`](CachedManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data`?): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/CachedManager.ts#L45)

#### Parameters

##### data?

(`string` \| \{ `id`: `string`; \})[]

#### Returns

`void`

#### Inherited from

[`CachedManager`](CachedManager.md).[`_clear`](CachedManager.md#_clear)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/CachedManager.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Inherited from

[`CachedManager`](CachedManager.md).[`_delete`](CachedManager.md#_delete)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `boolean`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/CachedManager.ts#L64)

#### Parameters

##### ids

`string`[]

#### Returns

`boolean`

#### Inherited from

[`CachedManager`](CachedManager.md).[`_deleteMany`](CachedManager.md#_deletemany)

***

### backup()

#### Call Signature

> **backup**(`appID`): `Promise`\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:77](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L77)

Get backups for the app of your team on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Call Signature

> **backup**(`appID`?): `Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:78](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L78)

Get backups for the app of your team on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

`Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<`string`, [`TeamApp`](TeamApp.md)\>\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:236](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L236)

Get information of your team application on Discloud.

#### Returns

`Promise`\<`Map`\<`string`, [`TeamApp`](TeamApp.md)\>\>

***

### ram()

> **ram**(`appID`, `quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:104](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L104)

Set the quantity of ram to application of your team

#### Parameters

##### appID

`string`

Your team app id

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/DataManager.ts#L33)

Resolves a data entry to a data Object.

#### Parameters

##### idOrInstance

The id or instance of something in this Manager

`string` | [`TeamApp`](TeamApp.md)

#### Returns

`null` \| [`TeamApp`](TeamApp.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolve`](CachedManager.md#resolve)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/DataManager.ts#L39)

#### Parameters

##### idOrInstance

`string` | [`TeamApp`](TeamApp.md)

#### Returns

`any`

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolveId`](CachedManager.md#resolveid)

***

### restart()

#### Call Signature

> **restart**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:148](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L148)

Restart your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **restart**(`appID`?): `Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:149](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L149)

Restart your team application on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

`Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

***

### start()

#### Call Signature

> **start**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:178](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L178)

Start your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **start**(`appID`?): `Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:179](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L179)

Start your team application on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

`Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

***

### status()

#### Call Signature

> **status**(`appID`): `Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:26](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L26)

Get the status for the app of your team on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

`Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>

#### Call Signature

> **status**(`appID`?): `Promise`\<`Map`\<`string`, [`TeamAppStatus`](TeamAppStatus.md)\>\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:27](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L27)

Get the status for the app of your team on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

`Promise`\<`Map`\<`string`, [`TeamAppStatus`](TeamAppStatus.md)\>\>

***

### stop()

#### Call Signature

> **stop**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:208](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L208)

Stop your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **stop**(`appID`?): `Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:209](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L209)

Stop your team application on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

`Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

***

### terminal()

#### Call Signature

> **terminal**(`appID`): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:52](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L52)

Get logs for the app of your team on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Call Signature

> **terminal**(`appID`?): `Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:53](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L53)

Get logs for the app of your team on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

`Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

***

### update()

> **update**(`appID`, `options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:129](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/TeamAppManager.ts#L129)

Update an of your team apps on Discloud

#### Parameters

##### appID

`string`

Your team app id

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

***

### valueOf()

> **valueOf**(): `Map`\<`string`, [`TeamApp`](TeamApp.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, [`TeamApp`](TeamApp.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`valueOf`](CachedManager.md#valueof)
