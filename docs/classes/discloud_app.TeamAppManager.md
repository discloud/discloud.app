[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / TeamAppManager

# Class: TeamAppManager

[discloud.app](../modules/discloud_app.md).TeamAppManager

Manager for your team on Discloud

## Hierarchy

- [`CachedManager`](discloud_app.CachedManager.md)\<typeof [`TeamApp`](discloud_app.TeamApp.md)\>

  ↳ **`TeamAppManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.TeamAppManager.md#constructor)

### Properties

- [\_cache](discloud_app.TeamAppManager.md#_cache)
- [discloudApp](discloud_app.TeamAppManager.md#discloudapp)
- [holds](discloud_app.TeamAppManager.md#holds)

### Accessors

- [cache](discloud_app.TeamAppManager.md#cache)

### Methods

- [\_add](discloud_app.TeamAppManager.md#_add)
- [\_addMany](discloud_app.TeamAppManager.md#_addmany)
- [\_clear](discloud_app.TeamAppManager.md#_clear)
- [\_delete](discloud_app.TeamAppManager.md#_delete)
- [\_deleteMany](discloud_app.TeamAppManager.md#_deletemany)
- [backup](discloud_app.TeamAppManager.md#backup)
- [fetch](discloud_app.TeamAppManager.md#fetch)
- [ram](discloud_app.TeamAppManager.md#ram)
- [resolve](discloud_app.TeamAppManager.md#resolve)
- [resolveId](discloud_app.TeamAppManager.md#resolveid)
- [restart](discloud_app.TeamAppManager.md#restart)
- [start](discloud_app.TeamAppManager.md#start)
- [status](discloud_app.TeamAppManager.md#status)
- [stop](discloud_app.TeamAppManager.md#stop)
- [terminal](discloud_app.TeamAppManager.md#terminal)
- [update](discloud_app.TeamAppManager.md#update)
- [valueOf](discloud_app.TeamAppManager.md#valueof)

## Constructors

### constructor

• **new TeamAppManager**(`discloudApp`): [`TeamAppManager`](discloud_app.TeamAppManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Returns

[`TeamAppManager`](discloud_app.TeamAppManager.md)

#### Overrides

[CachedManager](discloud_app.CachedManager.md).[constructor](discloud_app.CachedManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:18](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L18)

## Properties

### \_cache

• `Protected` `Readonly` **\_cache**: `Map`\<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_cache](discloud_app.CachedManager.md#_cache)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/DataManager.ts#L9)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[discloudApp](discloud_app.CachedManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` `Readonly` **holds**: typeof [`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[holds](discloud_app.CachedManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

• `get` **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

CachedManager.cache

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/DataManager.ts#L25)

## Methods

### \_add

▸ **_add**(`data`): [`TeamApp`](discloud_app.TeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_add](discloud_app.CachedManager.md#_add)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/CachedManager.ts#L19)

___

### \_addMany

▸ **_addMany**(`data`): `Map`\<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Map`\<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_addMany](discloud_app.CachedManager.md#_addmany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/CachedManager.ts#L33)

___

### \_clear

▸ **_clear**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | (`string` \| \{ `id`: `string`  })[] |

#### Returns

`void`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_clear](discloud_app.CachedManager.md#_clear)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/CachedManager.ts#L45)

___

### \_delete

▸ **_delete**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_delete](discloud_app.CachedManager.md#_delete)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/CachedManager.ts#L58)

___

### \_deleteMany

▸ **_deleteMany**(`ids`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_deleteMany](discloud_app.CachedManager.md#_deletemany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/CachedManager.ts#L64)

___

### backup

▸ **backup**(`appID`): `Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

`Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:78](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L78)

▸ **backup**(`appID?`): `Promise`\<`Map`\<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<`Map`\<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:79](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L79)

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>\>

Get information of your team application on Discloud.

#### Returns

`Promise`\<`Map`\<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:237](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L237)

___

### ram

▸ **ram**(`appID`, `quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to application of your team

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:105](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L105)

___

### resolve

▸ **resolve**(`idOrInstance`): ``null`` \| [`TeamApp`](discloud_app.TeamApp.md)

Resolves a data entry to a data Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idOrInstance` | `string` \| [`TeamApp`](discloud_app.TeamApp.md) | The id or instance of something in this Manager |

#### Returns

``null`` \| [`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[resolve](discloud_app.CachedManager.md#resolve)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/DataManager.ts#L33)

___

### resolveId

▸ **resolveId**(`idOrInstance`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idOrInstance` | `string` \| [`TeamApp`](discloud_app.TeamApp.md) |

#### Returns

`any`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[resolveId](discloud_app.CachedManager.md#resolveid)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/DataManager.ts#L39)

___

### restart

▸ **restart**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:149](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L149)

▸ **restart**(`appID?`): `Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:150](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L150)

___

### start

▸ **start**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:179](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L179)

▸ **start**(`appID?`): `Promise`\<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:180](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L180)

___

### status

▸ **status**(`appID`): `Promise`\<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

Get the status for the app of your team on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

`Promise`\<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:27](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L27)

▸ **status**(`appID?`): `Promise`\<`Map`\<`string`, [`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<`Map`\<`string`, [`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:28](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L28)

___

### stop

▸ **stop**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:209](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L209)

▸ **stop**(`appID?`): `Promise`\<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:210](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L210)

___

### terminal

▸ **terminal**(`appID`): `Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:53](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L53)

▸ **terminal**(`appID?`): `Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:54](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L54)

___

### update

▸ **update**(`appID`, `options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your team apps on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:130](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/TeamAppManager.ts#L130)

___

### valueOf

▸ **valueOf**(): `Map`\<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Returns

`Map`\<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[valueOf](discloud_app.CachedManager.md#valueof)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/967320a/packages/discloud.app/src/managers/DataManager.ts#L46)
