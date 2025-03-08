[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppManager

# Class: AppManager

Defined in: [packages/discloud.app/src/managers/AppManager.ts:17](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L17)

Manager for apps on Discloud

## Extends

- [`CachedManager`](CachedManager.md)\<*typeof* [`App`](App.md)\>

## Constructors

### new AppManager()

> **new AppManager**(`discloudApp`): [`AppManager`](AppManager.md)

Defined in: [packages/discloud.app/src/managers/AppManager.ts:18](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L18)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

[`AppManager`](AppManager.md)

#### Overrides

[`CachedManager`](CachedManager.md).[`constructor`](CachedManager.md#constructors)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: `Map`\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_cache`](CachedManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`CachedManager`](CachedManager.md).[`discloudApp`](CachedManager.md#discloudapp-1)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`App`](App.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L10)

#### Inherited from

[`CachedManager`](CachedManager.md).[`holds`](CachedManager.md#holds-1)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`cache`](CachedManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`App`](App.md)

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/CachedManager.ts#L19)

#### Parameters

##### data

`any`

#### Returns

[`App`](App.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_add`](CachedManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): `Map`\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/CachedManager.ts#L33)

#### Parameters

##### data

`any`[]

#### Returns

`Map`\<`string`, [`App`](App.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`_addMany`](CachedManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data`?): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/CachedManager.ts#L45)

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

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/CachedManager.ts#L58)

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

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/CachedManager.ts#L64)

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

Defined in: [packages/discloud.app/src/managers/AppManager.ts:95](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L95)

Get backups of your application on Discloud

##### Parameters

###### appID

`string`

Your app id

##### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Call Signature

> **backup**(`appID`?): `Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:96](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L96)

Get backups of your application on Discloud

##### Parameters

###### appID?

`"all"`

Your app id

##### Returns

`Promise`\<`Map`\<`string`, [`AppBackup`](AppBackup.md)\>\>

***

### console()

> **console**(`appID`, `command`): `Promise`\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:54](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L54)

Send a command to your app's terminal

#### Parameters

##### appID

`string`

Your app id

##### command

`string`

The command

#### Returns

`Promise`\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

***

### create()

> **create**(`options`): `Promise`\<[`RESTPostApiUploadErrorResult`](../interfaces/RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/RESTPostApiUploadOkResult.md) & `object`\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:146](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L146)

Upload a new app or site to Discloud

#### Parameters

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options for create a new app. A [FileResolvable](../type-aliases/FileResolvable.md) is required.

#### Returns

`Promise`\<[`RESTPostApiUploadErrorResult`](../interfaces/RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/RESTPostApiUploadOkResult.md) & `object`\>

***

### delete()

#### Call Signature

> **delete**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:185](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L185)

Delete your application from Discloud.

##### Parameters

###### appID

`string`

Your app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **delete**(`appID`?): `Promise`\<[`ApiAppManagerRemovedAll`](../interfaces/ApiAppManagerRemovedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:186](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L186)

Delete your application from Discloud.

##### Parameters

###### appID?

`"all"`

Your app id

##### Returns

`Promise`\<[`ApiAppManagerRemovedAll`](../interfaces/ApiAppManagerRemovedAll.md)\>

***

### fetch()

#### Call Signature

> **fetch**(`appID`): `Promise`\<[`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:320](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L320)

Get information of your application on Discloud.

##### Parameters

###### appID

`string`

You app id.

##### Returns

`Promise`\<[`App`](App.md)\>

#### Call Signature

> **fetch**(`appID`?): `Promise`\<`Map`\<`string`, [`App`](App.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:321](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L321)

Get information of your application on Discloud.

##### Parameters

###### appID?

`"all"`

You app id.

##### Returns

`Promise`\<`Map`\<`string`, [`App`](App.md)\>\>

***

### profile()

> **profile**(`appID`, `options`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:212](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L212)

Update the profile of your apps on Discloud.

#### Parameters

##### appID

`string`

Your app id

##### options

Options to update your app.

###### avatarURL?

`string` = `...`

###### name?

`string` = `...`

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### ram()

> **ram**(`appID`, `quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:122](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L122)

Set the quantity of ram to your application

#### Parameters

##### appID

`string`

Your app id

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| [`App`](App.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L33)

Resolves a data entry to a data Object.

#### Parameters

##### idOrInstance

The id or instance of something in this Manager

`string` | [`App`](App.md)

#### Returns

`null` \| [`App`](App.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolve`](CachedManager.md#resolve)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L39)

#### Parameters

##### idOrInstance

`string` | [`App`](App.md)

#### Returns

`any`

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolveId`](CachedManager.md#resolveid)

***

### restart()

#### Call Signature

> **restart**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:230](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L230)

Restart your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **restart**(`appID`?): `Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:231](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L231)

Restart your application on Discloud

##### Parameters

###### appID?

`"all"`

You app id

##### Returns

`Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

***

### start()

#### Call Signature

> **start**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:260](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L260)

Start your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **start**(`appID`?): `Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:261](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L261)

Start your application on Discloud

##### Parameters

###### appID?

`"all"`

You app id

##### Returns

`Promise`\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

***

### status()

#### Call Signature

> **status**(`appID`): `Promise`\<[`AppStatus`](AppStatus.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:27](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L27)

Get the status of your application on Discloud

##### Parameters

###### appID

`string`

Your app id

##### Returns

`Promise`\<[`AppStatus`](AppStatus.md)\>

#### Call Signature

> **status**(`appID`?): `Promise`\<`Map`\<`string`, [`AppStatus`](AppStatus.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:28](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L28)

Get the status of your application on Discloud

##### Parameters

###### appID?

`"all"`

Your app id

##### Returns

`Promise`\<`Map`\<`string`, [`AppStatus`](AppStatus.md)\>\>

***

### stop()

#### Call Signature

> **stop**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:290](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L290)

Stop your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **stop**(`appID`?): `Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:291](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L291)

Stop your application on Discloud

##### Parameters

###### appID?

`"all"`

You app id

##### Returns

`Promise`\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

***

### terminal()

#### Call Signature

> **terminal**(`appID`): `Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:69](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L69)

Get logs of your application on Discloud

##### Parameters

###### appID

`string`

Your app id

##### Returns

`Promise`\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Call Signature

> **terminal**(`appID`?): `Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:70](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L70)

Get logs of your application on Discloud

##### Parameters

###### appID?

`"all"`

Your app id

##### Returns

`Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

***

### update()

> **update**(`appID`, `options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:168](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/AppManager.ts#L168)

Update an of your apps on Discloud.

#### Parameters

##### appID

`string`

Your app id

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

***

### valueOf()

> **valueOf**(): `Map`\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

`Map`\<`string`, [`App`](App.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`valueOf`](CachedManager.md#valueof)
