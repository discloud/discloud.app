[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / TeamAppManager

# Class: TeamAppManager

Manager for your team on Discloud

## Extends

- [`CachedManager`](CachedManager.md)\<*typeof* [`TeamApp`](TeamApp.md)\>

## Constructors

### new TeamAppManager()

> **new TeamAppManager**(`discloudApp`): [`TeamAppManager`](TeamAppManager.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Returns

[`TeamAppManager`](TeamAppManager.md)

#### Overrides

[`CachedManager`](CachedManager.md).[`constructor`](CachedManager.md#constructors)

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:17](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L17)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, [`TeamApp`](TeamApp.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`_cache`](CachedManager.md#_cache)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L9)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`discloudApp`](CachedManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/BaseManager.ts#L7)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`TeamApp`](TeamApp.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`holds`](CachedManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

> `get` **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`cache`](CachedManager.md#cache)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L25)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`TeamApp`](TeamApp.md)

#### Parameters

• **data**: `any`

#### Returns

[`TeamApp`](TeamApp.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_add`](CachedManager.md#_add)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L19)

***

### \_addMany()

> `protected` **\_addMany**(`data`): `Map`\<`string`, [`TeamApp`](TeamApp.md)\>

#### Parameters

• **data**: `any`[]

#### Returns

`Map`\<`string`, [`TeamApp`](TeamApp.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`_addMany`](CachedManager.md#_addmany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L33)

***

### \_clear()

> `protected` **\_clear**(`data`?): `void`

#### Parameters

• **data?**: (`string` \| `object`)[]

#### Returns

`void`

#### Inherited from

[`CachedManager`](CachedManager.md).[`_clear`](CachedManager.md#_clear)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L45)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

#### Parameters

• **id**: `string`

#### Returns

`boolean`

#### Inherited from

[`CachedManager`](CachedManager.md).[`_delete`](CachedManager.md#_delete)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L58)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `boolean`

#### Parameters

• **ids**: `string`[]

#### Returns

`boolean`

#### Inherited from

[`CachedManager`](CachedManager.md).[`_deleteMany`](CachedManager.md#_deletemany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L64)

***

### backup()

#### backup(appID)

> **backup**(`appID`): `Promise`\<[`AppBackup`](AppBackup.md)\>

Get backups for the app of your team on Discloud

##### Parameters

• **appID**: `string`

Your team app id

##### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:77](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L77)

#### backup(appID)

> **backup**(`appID`?): `Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:78](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L78)

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<`string`, [`TeamApp`](TeamApp.md)\>\>

Get information of your team application on Discloud.

#### Returns

`Promise`\<`Map`\<`string`, [`TeamApp`](TeamApp.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:236](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L236)

***

### ram()

> **ram**(`appID`, `quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Set the quantity of ram to application of your team

#### Parameters

• **appID**: `string`

Your team app id

• **quantity**: `number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:104](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L104)

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| [`TeamApp`](TeamApp.md)

Resolves a data entry to a data Object.

#### Parameters

• **idOrInstance**: `string` \| [`TeamApp`](TeamApp.md)

The id or instance of something in this Manager

#### Returns

`null` \| [`TeamApp`](TeamApp.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolve`](CachedManager.md#resolve)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L33)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

#### Parameters

• **idOrInstance**: `string` \| [`TeamApp`](TeamApp.md)

#### Returns

`any`

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolveId`](CachedManager.md#resolveid)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L39)

***

### restart()

#### restart(appID)

> **restart**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Restart your team application on Discloud

##### Parameters

• **appID**: `string`

Your team app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:148](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L148)

#### restart(appID)

> **restart**(`appID`?): `Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:149](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L149)

***

### start()

#### start(appID)

> **start**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Start your team application on Discloud

##### Parameters

• **appID**: `string`

Your team app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:178](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L178)

#### start(appID)

> **start**(`appID`?): `Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:179](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L179)

***

### status()

#### status(appID)

> **status**(`appID`): `Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>

Get the status for the app of your team on Discloud

##### Parameters

• **appID**: `string`

Your team app id

##### Returns

`Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:26](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L26)

#### status(appID)

> **status**(`appID`?): `Promise`\<`Map`\<`string`, [`TeamAppStatus`](TeamAppStatus.md)\>\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<`Map`\<`string`, [`TeamAppStatus`](TeamAppStatus.md)\>\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L27)

***

### stop()

#### stop(appID)

> **stop**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Stop your team application on Discloud

##### Parameters

• **appID**: `string`

Your team app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:208](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L208)

#### stop(appID)

> **stop**(`appID`?): `Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:209](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L209)

***

### terminal()

#### terminal(appID)

> **terminal**(`appID`): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Get logs for the app of your team on Discloud

##### Parameters

• **appID**: `string`

Your team app id

##### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:52](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L52)

#### terminal(appID)

> **terminal**(`appID`?): `Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

##### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:53](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L53)

***

### update()

> **update**(`appID`, `options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Update an of your team apps on Discloud

#### Parameters

• **appID**: `string`

Your team app id

• **options**: [`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:129](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/TeamAppManager.ts#L129)

***

### valueOf()

> **valueOf**(): `Map`\<`string`, [`TeamApp`](TeamApp.md)\>

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, [`TeamApp`](TeamApp.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`valueOf`](CachedManager.md#valueof)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L46)
