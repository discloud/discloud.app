[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppTeamManager

# Class: AppTeamManager

Manager for Team on your application on Discloud

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### new AppTeamManager()

> **new AppTeamManager**(`discloudApp`): [`AppTeamManager`](AppTeamManager.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Returns

[`AppTeamManager`](AppTeamManager.md)

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructors)

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:11](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppTeamManager.ts#L11)

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

### create()

> **create**(`appID`, `modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Add a mod for you application on Discloud

#### Parameters

• **appID**: `string`

The app id

• **modID**: `string`

The mod id

• **perms**: [`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

The permissions for the mod. See [ModPermissionsResolvable](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:22](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppTeamManager.ts#L22)

***

### delete()

> **delete**(`appID`, `modID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Remove a mod from you application on Discloud

#### Parameters

• **appID**: `string`

The app id

• **modID**: `string`

The mod id

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:64](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppTeamManager.ts#L64)

***

### edit()

> **edit**(`appID`, `modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Edit permissions of a mod for you application on Discloud

#### Parameters

• **appID**: `string`

The app id

• **modID**: `string`

The mod id

• **perms**: [`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

The permissions for the mod. See [ModPermissionsResolvable](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:43](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppTeamManager.ts#L43)

***

### fetch()

> **fetch**(`appID`): `Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>

Get mods information for your app on Discloud

#### Parameters

• **appID**: `string`

#### Returns

`Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>

#### Defined in

[packages/discloud.app/src/managers/AppTeamManager.ts:78](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppTeamManager.ts#L78)
