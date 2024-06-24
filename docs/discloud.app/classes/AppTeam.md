[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppTeam

# Class: AppTeam

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new AppTeam()

> **new AppTeam**(`discloudApp`, `data`): [`AppTeam`](AppTeam.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`AppTeam`](AppTeam.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:9](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppTeam.ts#L9)

## Properties

### appId

> `readonly` **appId**: `string`

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppTeam.ts#L7)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`AppTeam`](AppTeam.md)\>

#### Inherited from

`Base.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L18)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

#### Parameters

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppTeam.ts#L15)

***

### \_update()

> `protected` **\_update**(`data`): `this`

#### Parameters

• **data**: `unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L26)

***

### create()

> **create**(`modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

#### Parameters

• **modID**: `string`

• **perms**: [`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppTeam.ts#L19)

***

### delete()

> **delete**(`modID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Parameters

• **modID**: `string`

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppTeam.ts#L27)

***

### edit()

> **edit**(`modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

#### Parameters

• **modID**: `string`

• **perms**: [`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:23](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppTeam.ts#L23)

***

### fetch()

> **fetch**(): `Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>

#### Returns

`Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>

#### Defined in

[packages/discloud.app/src/structures/AppTeam.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppTeam.ts#L31)
