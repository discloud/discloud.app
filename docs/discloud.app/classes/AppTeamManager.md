[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppTeamManager

# Class: AppTeamManager

Defined in: [packages/discloud.app/src/managers/AppTeamManager.ts:10](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/AppTeamManager.ts#L10)

Manager for Team on your application on Discloud

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### new AppTeamManager()

> **new AppTeamManager**(`discloudApp`): [`AppTeamManager`](AppTeamManager.md)

Defined in: [packages/discloud.app/src/managers/AppTeamManager.ts:11](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/AppTeamManager.ts#L11)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

[`AppTeamManager`](AppTeamManager.md)

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructors)

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp-1)

## Methods

### create()

> **create**(`appID`, `modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Defined in: [packages/discloud.app/src/managers/AppTeamManager.ts:22](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/AppTeamManager.ts#L22)

Add a mod for you application on Discloud

#### Parameters

##### appID

`string`

The app id

##### modID

`string`

The mod id

##### perms

[`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

The permissions for the mod. See [ModPermissionsResolvable](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

***

### delete()

> **delete**(`appID`, `modID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppTeamManager.ts:64](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/AppTeamManager.ts#L64)

Remove a mod from you application on Discloud

#### Parameters

##### appID

`string`

The app id

##### modID

`string`

The mod id

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### edit()

> **edit**(`appID`, `modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Defined in: [packages/discloud.app/src/managers/AppTeamManager.ts:43](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/AppTeamManager.ts#L43)

Edit permissions of a mod for you application on Discloud

#### Parameters

##### appID

`string`

The app id

##### modID

`string`

The mod id

##### perms

[`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

The permissions for the mod. See [ModPermissionsResolvable](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

***

### fetch()

> **fetch**(`appID`): `Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>

Defined in: [packages/discloud.app/src/managers/AppTeamManager.ts:78](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/managers/AppTeamManager.ts#L78)

Get mods information for your app on Discloud

#### Parameters

##### appID

`string`

#### Returns

`Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>
