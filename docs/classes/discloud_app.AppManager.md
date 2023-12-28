[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppManager

# Class: AppManager

[discloud.app](../modules/discloud_app.md).AppManager

Manager for apps on Discloud

## Hierarchy

- [`CachedManager`](discloud_app.CachedManager.md)\<typeof [`App`](discloud_app.App.md)\>

  ↳ **`AppManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppManager.md#constructor)

### Properties

- [\_cache](discloud_app.AppManager.md#_cache)
- [discloudApp](discloud_app.AppManager.md#discloudapp)
- [holds](discloud_app.AppManager.md#holds)

### Accessors

- [cache](discloud_app.AppManager.md#cache)

### Methods

- [#fetchMany](discloud_app.AppManager.md##fetchmany)
- [\_add](discloud_app.AppManager.md#_add)
- [\_addMany](discloud_app.AppManager.md#_addmany)
- [\_clear](discloud_app.AppManager.md#_clear)
- [\_delete](discloud_app.AppManager.md#_delete)
- [\_deleteMany](discloud_app.AppManager.md#_deletemany)
- [backup](discloud_app.AppManager.md#backup)
- [console](discloud_app.AppManager.md#console)
- [create](discloud_app.AppManager.md#create)
- [delete](discloud_app.AppManager.md#delete)
- [fetch](discloud_app.AppManager.md#fetch)
- [profile](discloud_app.AppManager.md#profile)
- [ram](discloud_app.AppManager.md#ram)
- [resolve](discloud_app.AppManager.md#resolve)
- [resolveId](discloud_app.AppManager.md#resolveid)
- [restart](discloud_app.AppManager.md#restart)
- [start](discloud_app.AppManager.md#start)
- [status](discloud_app.AppManager.md#status)
- [stop](discloud_app.AppManager.md#stop)
- [terminal](discloud_app.AppManager.md#terminal)
- [update](discloud_app.AppManager.md#update)
- [valueOf](discloud_app.AppManager.md#valueof)

## Constructors

### constructor

• **new AppManager**(`discloudApp`): [`AppManager`](discloud_app.AppManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Returns

[`AppManager`](discloud_app.AppManager.md)

#### Overrides

[CachedManager](discloud_app.CachedManager.md).[constructor](discloud_app.CachedManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:19](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L19)

## Properties

### \_cache

• `Protected` `Readonly` **\_cache**: `Map`\<`string`, [`App`](discloud_app.App.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_cache](discloud_app.CachedManager.md#_cache)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/DataManager.ts#L9)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[discloudApp](discloud_app.CachedManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` `Readonly` **holds**: typeof [`App`](discloud_app.App.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[holds](discloud_app.CachedManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

• `get` **cache**(): `Map`\<`string`, `InstanceType`\<`T`\>\>

#### Returns

`Map`\<`string`, `InstanceType`\<`T`\>\>

#### Inherited from

CachedManager.cache

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/DataManager.ts#L25)

## Methods

### #fetchMany

▸ **#fetchMany**(): `Promise`\<`Map`\<`string`, [`App`](discloud_app.App.md)\>\>

#### Returns

`Promise`\<`Map`\<`string`, [`App`](discloud_app.App.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:345](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L345)

___

### \_add

▸ **_add**(`data`): [`App`](discloud_app.App.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`App`](discloud_app.App.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_add](discloud_app.CachedManager.md#_add)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/CachedManager.ts#L19)

___

### \_addMany

▸ **_addMany**(`data`): `Map`\<`string`, [`App`](discloud_app.App.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Map`\<`string`, [`App`](discloud_app.App.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_addMany](discloud_app.CachedManager.md#_addmany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/CachedManager.ts#L33)

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

[packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/CachedManager.ts#L45)

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

[packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/CachedManager.ts#L58)

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

[packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/CachedManager.ts#L64)

___

### backup

▸ **backup**(`appID`): `Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups of your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

`Promise`\<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:96](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L96)

▸ **backup**(`appID?`): `Promise`\<`Map`\<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<`Map`\<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:97](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L97)

___

### console

▸ **console**(`appID`, `command`): `Promise`\<`string`\>

Send a command to your app's terminal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |
| `command` | `string` | The command |

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:55](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L55)

___

### create

▸ **create**(`options`): `Promise`\<[`RESTPostApiUploadErrorResult`](../interfaces/discloud_app.RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/discloud_app.RESTPostApiUploadOkResult.md) & \{ `app`: [`AppUploaded`](discloud_app.AppUploaded.md)  }\>

Upload a new app or site to Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options for create a new app. A [FileResolvable](../modules/discloud_app.md#fileresolvable) is required. |

#### Returns

`Promise`\<[`RESTPostApiUploadErrorResult`](../interfaces/discloud_app.RESTPostApiUploadErrorResult.md) \| [`RESTPostApiUploadOkResult`](../interfaces/discloud_app.RESTPostApiUploadOkResult.md) & \{ `app`: [`AppUploaded`](discloud_app.AppUploaded.md)  }\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:147](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L147)

___

### delete

▸ **delete**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:186](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L186)

▸ **delete**(`appID?`): `Promise`\<[`ApiAppManagerRemovedAll`](../interfaces/discloud_app.ApiAppManagerRemovedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<[`ApiAppManagerRemovedAll`](../interfaces/discloud_app.ApiAppManagerRemovedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:187](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L187)

___

### fetch

▸ **fetch**(`appID`): `Promise`\<[`App`](discloud_app.App.md)\>

Get information of your application on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id. |

#### Returns

`Promise`\<[`App`](discloud_app.App.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:321](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L321)

▸ **fetch**(`appID?`): `Promise`\<`Map`\<`string`, [`App`](discloud_app.App.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<`Map`\<`string`, [`App`](discloud_app.App.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:322](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L322)

___

### profile

▸ **profile**(`appID`, `options`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Update the profile of your apps on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |
| `options` | `Object` | Options to update your app. |
| `options.avatarURL?` | `string` | - |
| `options.name?` | `string` | - |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:213](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L213)

___

### ram

▸ **ram**(`appID`, `quantity`): `Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

`Promise`\<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:123](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L123)

___

### resolve

▸ **resolve**(`idOrInstance`): ``null`` \| [`App`](discloud_app.App.md)

Resolves a data entry to a data Object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idOrInstance` | `string` \| [`App`](discloud_app.App.md) | The id or instance of something in this Manager |

#### Returns

``null`` \| [`App`](discloud_app.App.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[resolve](discloud_app.CachedManager.md#resolve)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/DataManager.ts#L33)

___

### resolveId

▸ **resolveId**(`idOrInstance`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idOrInstance` | `string` \| [`App`](discloud_app.App.md) |

#### Returns

`any`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[resolveId](discloud_app.CachedManager.md#resolveid)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/DataManager.ts#L39)

___

### restart

▸ **restart**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:231](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L231)

▸ **restart**(`appID?`): `Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:232](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L232)

___

### start

▸ **start**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:261](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L261)

▸ **start**(`appID?`): `Promise`\<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:262](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L262)

___

### status

▸ **status**(`appID`): `Promise`\<[`AppStatus`](discloud_app.AppStatus.md)\>

Get the status of your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

`Promise`\<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:28](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L28)

▸ **status**(`appID?`): `Promise`\<`Map`\<`string`, [`AppStatus`](discloud_app.AppStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<`Map`\<`string`, [`AppStatus`](discloud_app.AppStatus.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:29](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L29)

___

### stop

▸ **stop**(`appID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id |

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:291](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L291)

▸ **stop**(`appID?`): `Promise`\<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:292](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L292)

___

### terminal

▸ **terminal**(`appID`): `Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs of your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

`Promise`\<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:70](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L70)

▸ **terminal**(`appID?`): `Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

`Promise`\<`Map`\<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:71](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L71)

___

### update

▸ **update**(`appID`, `options`): `Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your apps on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

`Promise`\<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:169](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/AppManager.ts#L169)

___

### valueOf

▸ **valueOf**(): `Map`\<`string`, [`App`](discloud_app.App.md)\>

#### Returns

`Map`\<`string`, [`App`](discloud_app.App.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[valueOf](discloud_app.CachedManager.md#valueof)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/managers/DataManager.ts#L46)
