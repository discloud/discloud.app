[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / SharedAppsManager

# Class: SharedAppsManager

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L18)

Manager for your team on Discloud

## Extends

- [`BaseSharedAppsManager`](BaseSharedAppsManager.md)\<*typeof* [`SharedApp`](SharedApp.md)\>

## Constructors

### Constructor

> **new SharedAppsManager**(`discloudApp`): `SharedAppsManager`

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:19](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L19)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`SharedAppsManager`

#### Overrides

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`constructor`](BaseSharedAppsManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`SharedApp`](SharedApp.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:13](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L13)

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`_cache`](BaseSharedAppsManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`discloudApp`](BaseSharedAppsManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`SharedApp`](SharedApp.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`holds`](BaseSharedAppsManager.md#holds)

***

### status

> `readonly` **status**: `SharedAppsStatusManager`

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:23](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L23)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:15](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L15)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`cache`](BaseSharedAppsManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`SharedApp`](SharedApp.md)

Defined in: [packages/discloud.app/src/managers/BaseSharedAppsManager.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseSharedAppsManager.ts#L18)

#### Parameters

##### data

`PartialApiSharedApp`

#### Returns

[`SharedApp`](SharedApp.md)

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`_add`](BaseSharedAppsManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`SharedApp`](SharedApp.md)\>

Defined in: [packages/discloud.app/src/managers/BaseSharedAppsManager.ts:28](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseSharedAppsManager.ts#L28)

#### Parameters

##### data

`PartialApiSharedApp`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`SharedApp`](SharedApp.md)\>

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`_addMany`](BaseSharedAppsManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/BaseSharedAppsManager.ts:39](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseSharedAppsManager.ts#L39)

#### Parameters

##### data?

(`string` \| `PartialApiSharedApp`)[]

#### Returns

`void`

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`_clear`](BaseSharedAppsManager.md#_clear)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/BaseSharedAppsManager.ts:51](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseSharedAppsManager.ts#L51)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`_delete`](BaseSharedAppsManager.md#_delete)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `void`

Defined in: [packages/discloud.app/src/managers/BaseSharedAppsManager.ts:55](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseSharedAppsManager.ts#L55)

#### Parameters

##### ids

`string`[]

#### Returns

`void`

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`_deleteMany`](BaseSharedAppsManager.md#_deletemany)

***

### \_patch()

> `protected` **\_patch**(`id`, `data`): [`SharedApp`](SharedApp.md) \| `undefined`

Defined in: [packages/discloud.app/src/managers/BaseSharedAppsManager.ts:60](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseSharedAppsManager.ts#L60)

#### Parameters

##### id

`string`

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiTeamApp`](../interfaces/ApiTeamApp.md)\>

#### Returns

[`SharedApp`](SharedApp.md) \| `undefined`

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`_patch`](BaseSharedAppsManager.md#_patch)

***

### backup()

#### Call Signature

> **backup**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:57](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L57)

Get backups for the app of your team on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppBackup`](AppBackup.md)\>

#### Call Signature

> **backup**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppBackup`](AppBackup.md)\>\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:58](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L58)

Get backups for the app of your team on Discloud

##### Parameters

###### appID

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppBackup`](AppBackup.md)\>\>

***

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`SharedApp`](SharedApp.md)\>\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:207](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L207)

Get information of your team application on Discloud.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`SharedApp`](SharedApp.md)\>\>

***

### ram()

> **ram**(`appID`, `quantity`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:86](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L86)

Set the quantity of ram to application of your team

#### Parameters

##### appID

`string`

Your team app id

##### quantity

`number`

Minimum values is `100` to `bot` or `512` for `site`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### resolve()

> **resolve**(`keyOrInstance`): [`SharedApp`](SharedApp.md) \| `null`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:23](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L23)

Resolves a data entry to a data Object.

#### Parameters

##### keyOrInstance

`string` \| [`SharedApp`](SharedApp.md)

The id or instance of something in this Manager

#### Returns

[`SharedApp`](SharedApp.md) \| `null`

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`resolve`](BaseSharedAppsManager.md#resolve)

***

### restart()

#### Call Signature

> **restart**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:125](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L125)

Restart your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **restart**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:126](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L126)

Restart your team application on Discloud

##### Parameters

###### appID

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerRestartedAll`](../interfaces/ApiAppManagerRestartedAll.md)\>

***

### start()

#### Call Signature

> **start**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:153](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L153)

Start your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **start**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:154](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L154)

Start your team application on Discloud

##### Parameters

###### appID

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStartedAll`](../interfaces/ApiAppManagerStartedAll.md)\>

***

### stop()

#### Call Signature

> **stop**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:181](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L181)

Stop your team application on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Call Signature

> **stop**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:182](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L182)

Stop your team application on Discloud

##### Parameters

###### appID

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppManagerStopedAll`](../interfaces/ApiAppManagerStopedAll.md)\>

***

### terminal()

#### Call Signature

> **terminal**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:30](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L30)

Get logs for the app of your team on Discloud

##### Parameters

###### appID

`string`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiTerminal`](../interfaces/ApiTerminal.md)\>

#### Call Signature

> **terminal**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:31](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L31)

Get logs for the app of your team on Discloud

##### Parameters

###### appID

`"all"`

Your team app id

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ApiTerminal`](../interfaces/ApiTerminal.md)\>\>

***

### update()

> **update**(`appID`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppCommitResult`](../interfaces/RESTPutApiAppCommitResult.md)\>

Defined in: [packages/discloud.app/src/managers/SharedAppsManager.ts:108](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/SharedAppsManager.ts#L108)

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

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`SharedApp`](SharedApp.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:31](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L31)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`SharedApp`](SharedApp.md)\>

#### Inherited from

[`BaseSharedAppsManager`](BaseSharedAppsManager.md).[`valueOf`](BaseSharedAppsManager.md#valueof)
