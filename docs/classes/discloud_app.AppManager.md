[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppManager

# Class: AppManager

[discloud.app](../modules/discloud_app.md).AppManager

Manager for apps on Discloud

## Hierarchy

- [`CachedManager`](discloud_app.CachedManager.md)<[`App`](discloud_app.App.md)\>

  ↳ **`AppManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppManager.md#constructor)

### Properties

- [#cache](discloud_app.AppManager.md##cache)
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
- [create](discloud_app.AppManager.md#create)
- [delete](discloud_app.AppManager.md#delete)
- [fetch](discloud_app.AppManager.md#fetch)
- [profile](discloud_app.AppManager.md#profile)
- [ram](discloud_app.AppManager.md#ram)
- [restart](discloud_app.AppManager.md#restart)
- [start](discloud_app.AppManager.md#start)
- [status](discloud_app.AppManager.md#status)
- [stop](discloud_app.AppManager.md#stop)
- [terminal](discloud_app.AppManager.md#terminal)
- [update](discloud_app.AppManager.md#update)

## Constructors

### constructor

• **new AppManager**(`discloudApp`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Overrides

[CachedManager](discloud_app.CachedManager.md).[constructor](discloud_app.CachedManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:16](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L16)

## Properties

### #cache

• `Private` **#cache**: [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`App`](discloud_app.App.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[#cache](discloud_app.CachedManager.md##cache)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/CachedManager.ts#L9)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[discloudApp](discloud_app.CachedManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/BaseManager.ts#L7)

___

### holds

• `Protected` **holds**: [`Constructor`](../modules/discloud_app.md#constructor)<[`App`](discloud_app.App.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[holds](discloud_app.CachedManager.md#holds)

#### Defined in

[packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/DataManager.ts#L9)

## Accessors

### cache

• `get` **cache**(): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, `T`\>

#### Inherited from

CachedManager.cache

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:15](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/CachedManager.ts#L15)

## Methods

### #fetchMany

▸ `Private` **#fetchMany**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`App`](discloud_app.App.md)\>\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`App`](discloud_app.App.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:310](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L310)

___

### \_add

▸ `Protected` **_add**(`data`): [`App`](discloud_app.App.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`App`](discloud_app.App.md)

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_add](discloud_app.CachedManager.md#_add)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/CachedManager.ts#L19)

___

### \_addMany

▸ `Protected` **_addMany**(`data`): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`App`](discloud_app.App.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`App`](discloud_app.App.md)\>

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_addMany](discloud_app.CachedManager.md#_addmany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:34](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/CachedManager.ts#L34)

___

### \_clear

▸ `Protected` **_clear**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | { `id`: `string`  }[] |

#### Returns

`void`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_clear](discloud_app.CachedManager.md#_clear)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:47](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/CachedManager.ts#L47)

___

### \_delete

▸ `Protected` **_delete**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_delete](discloud_app.CachedManager.md#_delete)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:60](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/CachedManager.ts#L60)

___

### \_deleteMany

▸ `Protected` **_deleteMany**(`ids`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[CachedManager](discloud_app.CachedManager.md).[_deleteMany](discloud_app.CachedManager.md#_deletemany)

#### Defined in

[packages/discloud.app/src/managers/CachedManager.ts:66](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/CachedManager.ts#L66)

___

### backup

▸ **backup**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

Get backups of your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppBackup`](discloud_app.AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:77](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L77)

▸ **backup**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppBackup`](discloud_app.AppBackup.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:78](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L78)

___

### create

▸ **create**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPostApiUploadResult`](../interfaces/discloud_app.RESTPostApiUploadResult.md) & { `app`: [`AppUploaded`](discloud_app.AppUploaded.md)  }\>

Upload a new app or site to Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options for create a new app. A [FileResolvable](../modules/discloud_app.md#fileresolvable) is required. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPostApiUploadResult`](../interfaces/discloud_app.RESTPostApiUploadResult.md) & { `app`: [`AppUploaded`](discloud_app.AppUploaded.md)  }\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:129](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L129)

___

### delete

▸ **delete**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Delete your application from Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:165](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L165)

▸ **delete**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRemovedAll`](../interfaces/discloud_app.ApiAppManagerRemovedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRemovedAll`](../interfaces/discloud_app.ApiAppManagerRemovedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:166](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L166)

___

### fetch

▸ **fetch**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`App`](discloud_app.App.md)\>

Get information of your application on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`App`](discloud_app.App.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:300](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L300)

▸ **fetch**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`App`](discloud_app.App.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`App`](discloud_app.App.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:301](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L301)

___

### profile

▸ **profile**(`appID`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Update the profile of your apps on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |
| `options` | `Object` | Options to update your app. |
| `options.avatarURL?` | `string` | - |
| `options.name?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:192](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L192)

___

### ram

▸ **ram**(`appID`, `quantity`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

Set the quantity of ram to your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |
| `quantity` | `number` | Minimum values is `100` to `bot` or `512` for `site` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppRamResult`](../interfaces/discloud_app.RESTPutApiAppRamResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:104](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L104)

___

### restart

▸ **restart**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Restart your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:210](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L210)

▸ **restart**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerRestartedAll`](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:211](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L211)

___

### start

▸ **start**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Start your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:240](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L240)

▸ **start**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStartedAll`](../interfaces/discloud_app.ApiAppManagerStartedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:241](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L241)

___

### status

▸ **status**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppStatus`](discloud_app.AppStatus.md)\>

Get the status of your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:25](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L25)

▸ **status**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppStatus`](discloud_app.AppStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`AppStatus`](discloud_app.AppStatus.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:26](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L26)

___

### stop

▸ **stop**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

Stop your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | You app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:270](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L270)

▸ **stop**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiAppManagerStopedAll`](../interfaces/discloud_app.ApiAppManagerStopedAll.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:271](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L271)

___

### terminal

▸ **terminal**(`appID`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

Get logs of your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:51](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L51)

▸ **terminal**(`appID?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | ``"all"`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`string`, [`ApiTerminal`](../interfaces/discloud_app.ApiTerminal.md)\>\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:52](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L52)

___

### update

▸ **update**(`appID`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

Update an of your apps on Discloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | Your app id |
| `options` | [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md) | Options to update your app. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppCommitResult`](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppManager.ts:150](https://github.com/discloud/discloud.app/blob/e5beb23/packages/discloud.app/src/managers/AppManager.ts#L150)
