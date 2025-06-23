[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / TeamAppManager

# Class: TeamAppManager

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:16](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L16)

Manager for your team on Discloud

## Extends

- [`CachedManager`](CachedManager.md)\<*typeof* [`TeamApp`](TeamApp.md)\>

## Constructors

### Constructor

> **new TeamAppManager**(`discloudApp`): `TeamAppManager`

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:17](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L17)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`TeamAppManager`

#### Overrides

[`CachedManager`](CachedManager.md).[`constructor`](CachedManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`TeamApp`](TeamApp.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_cache`](CachedManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`CachedManager`](CachedManager.md).[`discloudApp`](CachedManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/DataManager.ts#L10)

#### Inherited from

[`CachedManager`](CachedManager.md).[`holds`](CachedManager.md#holds)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`cache`](CachedManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/CachedManager.ts#L19)

#### Parameters

##### data

`any`

#### Returns

[`TeamApp`](TeamApp.md)

#### Inherited from

[`CachedManager`](CachedManager.md).[`_add`](CachedManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`TeamApp`](TeamApp.md)\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/CachedManager.ts#L33)

#### Parameters

##### data

`any`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`TeamApp`](TeamApp.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`_addMany`](CachedManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/CachedManager.ts#L45)

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

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/CachedManager.ts#L58)

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

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/CachedManager.ts#L64)

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

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:63](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L63)

Get backups for the app of your team on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

#### Call Signature

> **backup**(`appID?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppBackup`](AppBackup.md)\>\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:64](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L64)

Get backups for the app of your team on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppBackup`](AppBackup.md)\>\>

***

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`TeamApp`](TeamApp.md)\>\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:222](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L222)

Get information of your team application on Discloud.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`TeamApp`](TeamApp.md)\>\>

***

### ram()

> **ram**(`appID`, `quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:90](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L90)

Set the quantity of ram to application of your team

#### Parameters

##### appID

`string`

Your team app id

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppRamResult`](../interfaces/RESTPutApiAppRamResult.md)\>

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/DataManager.ts#L33)

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

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/DataManager.ts#L39)

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

> **restart**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:134](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L134)

Restart your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **restart**(`appID?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:135](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L135)

Restart your team application on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

***

### start()

#### Call Signature

> **start**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:164](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L164)

Start your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **start**(`appID?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:165](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L165)

Start your team application on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

***

### status()

> **status**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TeamAppStatus`](TeamAppStatus.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:26](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L26)

Get the status for the app of your team on Discloud

#### Parameters

##### appID

`string`

Your team app id

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TeamAppStatus`](TeamAppStatus.md)\>

***

### stop()

#### Call Signature

> **stop**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:194](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L194)

Stop your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Call Signature

> **stop**(`appID?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:195](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L195)

Stop your team application on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

***

### terminal()

#### Call Signature

> **terminal**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:38](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L38)

Get logs for the app of your team on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Call Signature

> **terminal**(`appID?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:39](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L39)

Get logs for the app of your team on Discloud

##### Parameters

###### appID?

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

***

### update()

> **update**(`appID`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/managers/TeamAppManager.ts:115](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/TeamAppManager.ts#L115)

Update an of your team apps on Discloud

#### Parameters

##### appID

`string`

Your team app id

##### options

[`UploadAppOptions`](../interfaces/UploadAppOptions.md)

Options to update your app.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`TeamApp`](TeamApp.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`TeamApp`](TeamApp.md)\>

#### Inherited from

[`CachedManager`](CachedManager.md).[`valueOf`](CachedManager.md#valueof)
