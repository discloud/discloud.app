[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppManager

# Class: AppManager

Manager for apps on Discloud

## Extends

- [`CachedManager`](CachedManager.md)\<*typeof* [`App`](App.md)\>

## Constructors

### new AppManager()

> **new AppManager**(`discloudApp`): [`AppManager`](AppManager.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Returns

[`AppManager`](AppManager.md)

#### Overrides

[`CachedManager`](CachedManager.md).[`constructor`](CachedManager.md#constructors)

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L18)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, [`App`](App.md)\>

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

> `protected` `readonly` **holds**: *typeof* [`App`](App.md)

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

> `protected` **\_add**(`data`): [`App`](App.md)

#### Parameters

• **data**: `any`

#### Returns

[`App`](App.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_add`](CachedManager.md#_add)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/CachedManager.ts#L19)

***

### \_addMany()

> `protected` **\_addMany**(`data`): `Map`\<`string`, [`App`](App.md)\>

#### Parameters

• **data**: `any`[]

#### Returns

`Map`\<`string`, [`App`](App.md)\>

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

Get backups of your application on Discloud

##### Parameters

• **appID**: `string`

Your app id

##### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:95](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L95)

#### backup(appID)

> **backup**(`appID`?): `Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:96](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L96)

***

### console()

> **console**(`appID`, `command`): `Promise`\<`string`\>

Send a command to your app's terminal

#### Parameters

• **appID**: `string`

Your app id

• **command**: `string`

The command

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:54](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L54)

***

### create()

> **create**(`options`): `Promise`\<[`RESTPostApiUploadErrorResult`](../interfaces/RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/RESTPostApiUploadOkResult.md) & `object`\>

Upload a new app or site to Discloud

#### Parameters

• **options**: [`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options for create a new app. A [FileResolvable](../type-aliases/FileResolvable.md) is required.

#### Returns

`Promise`\<[`RESTPostApiUploadErrorResult`](../interfaces/RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/RESTPostApiUploadOkResult.md) & `object`\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:146](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L146)

***

### delete()

#### delete(appID)

> **delete**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Delete your application from Discloud.

##### Parameters

• **appID**: `string`

Your app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:185](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L185)

#### delete(appID)

> **delete**(`appID`?): `Promise`\<[`ApiAppManagerRemovedAll`](../interfaces/ApiAppManagerRemovedAll.md)\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<[`ApiAppManagerRemovedAll`](../interfaces/ApiAppManagerRemovedAll.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:186](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L186)

***

### fetch()

#### fetch(appID)

> **fetch**(`appID`): `Promise`\<[`App`](App.md)\>

Get information of your application on Discloud.

##### Parameters

• **appID**: `string`

You app id.

##### Returns

`Promise`\<[`App`](App.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:320](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L320)

#### fetch(appID)

> **fetch**(`appID`?): `Promise`\<`Map`\<`string`, [`App`](App.md)\>\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<`Map`\<`string`, [`App`](App.md)\>\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:321](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L321)

***

### profile()

> **profile**(`appID`, `options`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Update the profile of your apps on Discloud.

#### Parameters

• **appID**: `string`

Your app id

• **options**

Options to update your app.

• **options.avatarURL?**: `string` = `...`

• **options.name?**: `string` = `...`

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:212](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L212)

***

### ram()

> **ram**(`appID`, `quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Set the quantity of ram to your application

#### Parameters

• **appID**: `string`

Your app id

• **quantity**: `number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:122](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L122)

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| [`App`](App.md)

Resolves a data entry to a data Object.

#### Parameters

• **idOrInstance**: `string` \| [`App`](App.md)

The id or instance of something in this Manager

#### Returns

`null` \| [`App`](App.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolve`](CachedManager.md#resolve)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L33)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

#### Parameters

• **idOrInstance**: `string` \| [`App`](App.md)

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

Restart your application on Discloud

##### Parameters

• **appID**: `string`

You app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:230](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L230)

#### restart(appID)

> **restart**(`appID`?): `Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:231](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L231)

***

### start()

#### start(appID)

> **start**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Start your application on Discloud

##### Parameters

• **appID**: `string`

You app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:260](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L260)

#### start(appID)

> **start**(`appID`?): `Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:261](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L261)

***

### status()

#### status(appID)

> **status**(`appID`): `Promise`\<[`AppStatus`](AppStatus.md)\>

Get the status of your application on Discloud

##### Parameters

• **appID**: `string`

Your app id

##### Returns

`Promise`\<[`AppStatus`](AppStatus.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L27)

#### status(appID)

> **status**(`appID`?): `Promise`\<`Map`\<`string`, [`AppStatus`](AppStatus.md)\>\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<`Map`\<`string`, [`AppStatus`](AppStatus.md)\>\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:28](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L28)

***

### stop()

#### stop(appID)

> **stop**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Stop your application on Discloud

##### Parameters

• **appID**: `string`

You app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:290](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L290)

#### stop(appID)

> **stop**(`appID`?): `Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:291](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L291)

***

### terminal()

#### terminal(appID)

> **terminal**(`appID`): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Get logs of your application on Discloud

##### Parameters

• **appID**: `string`

Your app id

##### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:69](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L69)

#### terminal(appID)

> **terminal**(`appID`?): `Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

##### Parameters

• **appID?**: `"all"`

##### Returns

`Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

##### Defined in

[packages/discloud.app/src/managers/AppManager.ts:70](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L70)

***

### update()

> **update**(`appID`, `options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Update an of your apps on Discloud.

#### Parameters

• **appID**: `string`

Your app id

• **options**: [`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:168](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppManager.ts#L168)

***

### valueOf()

> **valueOf**(): `Map`\<`string`, [`App`](App.md)\>

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, [`App`](App.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`valueOf`](CachedManager.md#valueof)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/DataManager.ts#L46)
