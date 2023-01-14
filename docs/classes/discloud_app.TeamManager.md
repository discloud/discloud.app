[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / TeamManager

# Class: TeamManager

[discloud.app](../modules/discloud_app.md).TeamManager

Manager for your team on Discloud

## Hierarchy

- [`BaseManager`](discloud_app.BaseManager.md)

  ↳ **`TeamManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.TeamManager.md#constructor)

### Properties

- [discloudApp](discloud_app.TeamManager.md#discloudapp)

### Methods

- [backup](discloud_app.TeamManager.md#backup)
- [fetch](discloud_app.TeamManager.md#fetch)
- [ram](discloud_app.TeamManager.md#ram)
- [restart](discloud_app.TeamManager.md#restart)
- [start](discloud_app.TeamManager.md#start)
- [status](discloud_app.TeamManager.md#status)
- [stop](discloud_app.TeamManager.md#stop)
- [terminal](discloud_app.TeamManager.md#terminal)
- [update](discloud_app.TeamManager.md#update)

## Constructors

### constructor

• **new TeamManager**(`discloudApp`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:15](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L15)

## Properties

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

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

[packages/discloud.app/src/managers/TeamManager.ts:79](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L79)

▸ **backup**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:80](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L80)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`Team`](discloud_app.Team.md)\>\>

Get information of your team application on Discloud.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`Team`](discloud_app.Team.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:197](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L197)

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

[packages/discloud.app/src/managers/TeamManager.ts:109](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L109)

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

[packages/discloud.app/src/managers/TeamManager.ts:143](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L143)

▸ **restart**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:144](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L144)

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

[packages/discloud.app/src/managers/TeamManager.ts:161](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L161)

▸ **start**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:162](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L162)

___

### status

▸ **status**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppStatus`](../interfaces/discloud_app.ApiAppStatus.md)\>

Get the status for the app of your team on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your team app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppStatus`](../interfaces/discloud_app.ApiAppStatus.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:24](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L24)

▸ **status**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppStatus`](discloud_app.AppStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppStatus`](discloud_app.AppStatus.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:25](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L25)

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

[packages/discloud.app/src/managers/TeamManager.ts:179](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L179)

▸ **stop**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:180](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L180)

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

[packages/discloud.app/src/managers/TeamManager.ts:52](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L52)

▸ **terminal**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/TeamManager.ts:53](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L53)

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

[packages/discloud.app/src/managers/TeamManager.ts:126](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/TeamManager.ts#L126)
