[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppManager

# Class: AppManager

Defined in: [packages/discloud.app/src/managers/AppManager.ts:17](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L17)

Manager for apps on Discloud

## Extends

- [`CachedManager`](CachedManager.md)\<*typeof* [`App`](App.md)\>

## Constructors

### Constructor

> **new AppManager**(`discloudApp`): `AppManager`

Defined in: [packages/discloud.app/src/managers/AppManager.ts:18](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L18)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`AppManager`

#### Overrides

[`CachedManager`](CachedManager.md).[`constructor`](CachedManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_cache`](CachedManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`CachedManager`](CachedManager.md).[`discloudApp`](CachedManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`App`](App.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/DataManager.ts#L10)

#### Inherited from

[`CachedManager`](CachedManager.md).[`holds`](CachedManager.md#holds)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`cache`](CachedManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`App`](App.md)

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/CachedManager.ts#L19)

#### Parameters

##### data

`any`

#### Returns

[`App`](App.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_add`](CachedManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/CachedManager.ts#L33)

#### Parameters

##### data

`any`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`_addMany`](CachedManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/CachedManager.ts#L45)

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

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/CachedManager.ts#L58)

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

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/CachedManager.ts#L64)

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

> **backup**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:86](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L86)

Get backups of your application on Discloud

##### Parameters

###### appID

`string`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

#### Call Signature

> **backup**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppBackup`](AppBackup.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:87](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L87)

Get backups of your application on Discloud

##### Parameters

###### appID

`"all"`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppBackup`](AppBackup.md)\>\>

***

### console()

> **console**(`appID`, `command`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:42](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L42)

Send a command to your app's terminal

#### Parameters

##### appID

`string`

Your app id

##### command

`string`

The command

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiConsoleAppShell`](../interfaces/ApiConsoleAppShell.md)\>

***

### create()

> **create**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPostApiUploadErrorResult`](../interfaces/RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/RESTPostApiUploadOkResult.md) & `object`\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:139](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L139)

Upload a new app or site to Discloud

#### Parameters

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options for create a new app. A [FileResolvable](../type-aliases/FileResolvable.md) is required.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPostApiUploadErrorResult`](../interfaces/RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/RESTPostApiUploadOkResult.md) & `object`\>

***

### delete()

#### Call Signature

> **delete**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:178](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L178)

Delete your application from Discloud.

##### Parameters

###### appID

`string`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **delete**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRemovedAll`](../interfaces/ApiAppManagerRemovedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:179](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L179)

Delete your application from Discloud.

##### Parameters

###### appID

`"all"`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRemovedAll`](../interfaces/ApiAppManagerRemovedAll.md)\>

***

### fetch()

#### Call Signature

> **fetch**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:322](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L322)

Get information of your application on Discloud.

##### Parameters

###### appID

`string`

You app id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`App`](App.md)\>

#### Call Signature

> **fetch**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:323](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L323)

Get information of your application on Discloud.

##### Parameters

###### appID

`"all"`

You app id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>\>

***

### profile()

> **profile**(`appID`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:207](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L207)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### ram()

> **ram**(`appID`, `quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:115](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L115)

Set the quantity of ram to your application

#### Parameters

##### appID

`string`

Your app id

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

***

### resolve()

> **resolve**(`idOrInstance`): [`App`](App.md) \| `null`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/DataManager.ts#L33)

Resolves a data entry to a data Object.

#### Parameters

##### idOrInstance

The id or instance of something in this Manager

`string` | [`App`](App.md)

#### Returns

[`App`](App.md) \| `null`

#### Inherited from

[`CachedManager`](CachedManager.md).[`resolve`](CachedManager.md#resolve)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/DataManager.ts#L39)

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

> **restart**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:226](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L226)

Restart your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **restart**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:227](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L227)

Restart your application on Discloud

##### Parameters

###### appID

`"all"`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

***

### start()

#### Call Signature

> **start**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:258](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L258)

Start your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **start**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:259](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L259)

Start your application on Discloud

##### Parameters

###### appID

`"all"`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

***

### status()

> **status**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppStatus`](AppStatus.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:27](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L27)

Get the status of your application on Discloud

#### Parameters

##### appID

`string`

Your app id

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppStatus`](AppStatus.md)\>

***

### stop()

#### Call Signature

> **stop**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:290](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L290)

Stop your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **stop**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:291](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L291)

Stop your application on Discloud

##### Parameters

###### appID

`"all"`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

***

### terminal()

#### Call Signature

> **terminal**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:58](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L58)

Get logs of your application on Discloud

##### Parameters

###### appID

`string`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Call Signature

> **terminal**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:59](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L59)

Get logs of your application on Discloud

##### Parameters

###### appID

`"all"`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

***

### update()

> **update**(`appID`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppManager.ts:161](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/AppManager.ts#L161)

Update an of your apps on Discloud.

#### Parameters

##### appID

`string`

Your app id

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`valueOf`](CachedManager.md#valueof)
