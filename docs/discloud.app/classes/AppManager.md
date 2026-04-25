[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppManager

# Class: AppManager

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:21](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L21)

Manager for apps on Discloud

## Extends

- [`BaseAppsManager`](BaseAppsManager.md)\<*typeof* [`App`](App.md)\>

## Constructors

### Constructor

> **new AppManager**(`discloudApp`): `AppsManager`

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:22](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L22)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`AppsManager`

#### Overrides

[`BaseAppsManager`](BaseAppsManager.md).[`constructor`](BaseAppsManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:13](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L13)

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`_cache`](BaseAppsManager.md#_cache)

***

### apts

> `readonly` **apts**: [`AppAptManager`](AppAptManager.md)

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:26](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L26)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`discloudApp`](BaseAppsManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`App`](App.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`holds`](BaseAppsManager.md#holds)

***

### moderators

> `readonly` **moderators**: [`AppsModeratorsManager`](AppsModeratorsManager.md)

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:27](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L27)

***

### status

> `readonly` **status**: `AppsStatusManager`

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:28](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L28)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:15](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L15)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`cache`](BaseAppsManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`App`](App.md)

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L18)

#### Parameters

##### data

`PartialApiApp`

#### Returns

[`App`](App.md)

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`_add`](BaseAppsManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:29](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L29)

#### Parameters

##### data

`PartialApiApp`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`_addMany`](BaseAppsManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:40](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L40)

#### Parameters

##### data?

(`string` \| `PartialApiApp`)[]

#### Returns

`void`

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`_clear`](BaseAppsManager.md#_clear)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:55](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L55)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`_delete`](BaseAppsManager.md#_delete)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:60](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L60)

#### Parameters

##### ids

`string`[]

#### Returns

`void`

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`_deleteMany`](BaseAppsManager.md#_deletemany)

***

### \_patch()

> `protected` **\_patch**(`id`, `data`): [`App`](App.md) \| `undefined`

Defined in: [packages/discloud.app/src/managers/BaseAppsManager.ts:65](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsManager.ts#L65)

#### Parameters

##### id

`string`

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiApp`](../interfaces/ApiApp.md)\>

#### Returns

[`App`](App.md) \| `undefined`

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`_patch`](BaseAppsManager.md#_patch)

***

### backup()

#### Call Signature

> **backup**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:80](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L80)

Get backups of your application on Discloud

##### Parameters

###### appID

`string`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

#### Call Signature

> **backup**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppBackup`](AppBackup.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:81](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L81)

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

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:36](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L36)

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

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:130](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L130)

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

> **delete**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:169](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L169)

Delete your application from Discloud.

##### Parameters

###### appID

`string`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **delete**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRemovedAll`](../interfaces/ApiAppManagerRemovedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:170](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L170)

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

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:297](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L297)

Get information of your application on Discloud.

##### Parameters

###### appID

`string`

You app id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`App`](App.md)\>

#### Call Signature

> **fetch**(`appID?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:298](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L298)

Get information of your application on Discloud.

##### Parameters

###### appID?

`"all"`

You app id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>\>

***

### profile()

> **profile**(`appID`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:193](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L193)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### ram()

> **ram**(`appID`, `quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:109](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L109)

Set the quantity of ram to your application

#### Parameters

##### appID

`string`

Your app id

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### resolve()

> **resolve**(`keyOrInstance`): [`App`](App.md) \| `null`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:23](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L23)

Resolves a data entry to a data Object.

#### Parameters

##### keyOrInstance

`string` \| [`App`](App.md)

The id or instance of something in this Manager

#### Returns

[`App`](App.md) \| `null`

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`resolve`](BaseAppsManager.md#resolve)

***

### restart()

#### Call Signature

> **restart**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:213](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L213)

Restart your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **restart**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:214](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L214)

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

> **start**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:241](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L241)

Start your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **start**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:242](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L242)

Start your application on Discloud

##### Parameters

###### appID

`"all"`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

***

### stop()

#### Call Signature

> **stop**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:269](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L269)

Stop your application on Discloud

##### Parameters

###### appID

`string`

You app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **stop**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:270](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L270)

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

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:52](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L52)

Get logs of your application on Discloud

##### Parameters

###### appID

`string`

Your app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Call Signature

> **terminal**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:53](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L53)

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

Defined in: [packages/discloud.app/src/managers/AppsManager.ts:152](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsManager.ts#L152)

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

Defined in: [packages/discloud.app/src/managers/DataManager.ts:31](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/DataManager.ts#L31)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`App`](App.md)\>

#### Inherited from

[`BaseAppsManager`](BaseAppsManager.md).[`valueOf`](BaseAppsManager.md#valueof)
