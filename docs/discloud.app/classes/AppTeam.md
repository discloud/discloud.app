[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppTeam

# Class: AppTeam

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:6](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L6)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new AppTeam**(`discloudApp`, `data`): `AppTeam`

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:7](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L7)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

`AppTeam`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:13](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L13)

***

### avatar

> **avatar**: `string` \| `null`

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:14](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L14)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`AppTeam`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### username

> **username**: `string` \| `null`

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:15](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L15)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:17](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L17)

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

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### create()

> **create**(`modID`, `perms`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:25](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L25)

#### Parameters

##### modID

`string`

##### perms

[`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

***

### delete()

> **delete**(`modID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:33](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L33)

#### Parameters

##### modID

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTApiBaseResult`](../interfaces/RESTApiBaseResult.md)\>

***

### edit()

> **edit**(`modID`, `perms`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:29](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L29)

#### Parameters

##### modID

`string`

##### perms

[`ModPermissionsResolvable`](../type-aliases/ModPermissionsResolvable.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppTeamManager`](../interfaces/ApiAppTeamManager.md)\>

***

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>

Defined in: [packages/discloud.app/src/structures/AppTeam.ts:37](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/AppTeam.ts#L37)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)[]\>
