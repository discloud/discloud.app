[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppTeam

# Class: AppTeam

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:6](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L6)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new AppTeam()

> **new AppTeam**(`discloudApp`, `data`): [`AppTeam`](AppTeam.md)

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:9](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L9)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`AppTeam`](AppTeam.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:7](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L7)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`AppTeam`](AppTeam.md)\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp-1)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:15](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L15)

#### Parameters

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### create()

> **create**(`modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:19](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L19)

#### Parameters

##### modID

`string`

##### perms

[`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

***

### delete()

> **delete**(`modID`): `Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:27](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L27)

#### Parameters

##### modID

`string`

#### Returns

`Promise`\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### edit()

> **edit**(`modID`, `perms`): `Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:23](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L23)

#### Parameters

##### modID

`string`

##### perms

[`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

#### Returns

`Promise`\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

***

### fetch()

> **fetch**(): `Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:31](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/AppTeam.ts#L31)

#### Returns

`Promise`\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>
