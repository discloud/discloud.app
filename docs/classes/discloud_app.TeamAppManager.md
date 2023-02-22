[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / TeamAppManager

# Class: TeamAppManager

[discloud.app](../modules/discloud_app.md).TeamAppManager

Manager for your team on Discloud

## Hierarchy

- [`CachedManager`](discloud_app.CachedManager.md)<[`TeamApp`](discloud_app.TeamApp.md)\>

  ↳ **`TeamAppManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.TeamAppManager.md#constructor)

### Properties

- [#cache](discloud_app.TeamAppManager.md##cache)
- [discloudApp](discloud_app.TeamAppManager.md#discloudapp)
- [holds](discloud_app.TeamAppManager.md#holds)

### Accessors

- [cache](discloud_app.TeamAppManager.md#cache)

### Methods

- [\_add](discloud_app.TeamAppManager.md#_add)
- [\_addMany](discloud_app.TeamAppManager.md#_addmany)
- [\_remove](discloud_app.TeamAppManager.md#_remove)
- [\_removeMany](discloud_app.TeamAppManager.md#_removemany)
- [backup](discloud_app.TeamAppManager.md#backup)
- [fetch](discloud_app.TeamAppManager.md#fetch)
- [ram](discloud_app.TeamAppManager.md#ram)
- [restart](discloud_app.TeamAppManager.md#restart)
- [start](discloud_app.TeamAppManager.md#start)
- [status](discloud_app.TeamAppManager.md#status)
- [stop](discloud_app.TeamAppManager.md#stop)
- [terminal](discloud_app.TeamAppManager.md#terminal)
- [update](discloud_app.TeamAppManager.md#update)

## Constructors

### constructor

• **new TeamAppManager**(`discloudApp`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Overrides

[CachedManager](discloud_app.CachedManager.md).[constructor](discloud_app.CachedManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:15](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L15)

## Properties

### #cache

• `Private` **#cache**: [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[#cache](discloud_app.CachedManager.md##cache)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/CachedManager.ts#L9)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[discloudApp](discloud_app.CachedManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` **holds**: [`Constructor`](../modules/discloud_app.md#constructor)<[`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[holds](discloud_app.CachedManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/DataManager.ts#L9)

## Accessors

### cache

• `get` **cache**(): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Inherited from

CachedManager.cache

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:15](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/CachedManager.ts#L15)

## Methods

### \_add

▸ `Protected` **_add**(`data`): [`TeamApp`](discloud_app.TeamApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TeamApp`](discloud_app.TeamApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_add](discloud_app.CachedManager.md#_add)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/CachedManager.ts#L19)

___

### \_addMany

▸ `Protected` **_addMany**(`data`): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_addMany](discloud_app.CachedManager.md#_addmany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/CachedManager.ts#L33)

___

### \_remove

▸ `Protected` **_remove**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_remove](discloud_app.CachedManager.md#_remove)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:46](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/CachedManager.ts#L46)

___

### \_removeMany

▸ `Protected` **_removeMany**(`ids`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_removeMany](discloud_app.CachedManager.md#_removemany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:50](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/CachedManager.ts#L50)

___

### backup

▸ **backup**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups for the app of your team on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:75](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L75)

▸ **backup**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:76](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L76)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>\>

Get information of your team application on Discloud.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`TeamApp`](discloud_app.TeamApp.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:233](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L233)

___

### ram

▸ **ram**(`appID`, `quantity`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to application of your team

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Promise [RESTPutApiAppRamResult](../interfaces/discloud_app.RESTPutApiAppRamResult.md)

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:103](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L103)

___

### restart

▸ **restart**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your team application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:143](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L143)

▸ **restart**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:144](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L144)

___

### start

▸ **start**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your team application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:173](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L173)

▸ **start**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:174](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L174)

___

### status

▸ **status**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

Get the status for the app of your team on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:24](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L24)

▸ **status**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:25](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L25)

___

### stop

▸ **stop**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your team application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:203](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L203)

▸ **stop**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:204](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L204)

___

### terminal

▸ **terminal**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs for the app of your team on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:50](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L50)

▸ **terminal**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:51](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L51)

___

### update

▸ **update**(`appID`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your team apps on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Promise [RESTPutApiAppCommitResult](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)

#### Defined in

[packages/discloud.app/src/managers/TeamAppManager.ts:126](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/discloud.app/src/managers/TeamAppManager.ts#L126)
