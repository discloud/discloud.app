[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppsModeratorsManager

# Class: AppsModeratorsManager

Defined in: [packages/discloud.app/src/managers/AppsModeratorsManager.ts:11](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsModeratorsManager.ts#L11)

Manager for Team on your application on Discloud

## Extends

- [`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md)

## Constructors

### Constructor

> **new AppsModeratorsManager**(`discloudApp`): `AppsModeratorsManager`

Defined in: [packages/discloud.app/src/managers/AppsModeratorsManager.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsModeratorsManager.ts#L12)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`AppsModeratorsManager`

#### Overrides

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`constructor`](BaseAppsModeratorsManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:16](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L16)

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`_cache`](BaseAppsModeratorsManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`discloudApp`](BaseAppsModeratorsManager.md#discloudapp)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:17](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L17)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`cache`](BaseAppsModeratorsManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`appId`, `data`): [`AppModerator`](AppModerator.md)

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:19](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L19)

#### Parameters

##### appId

`string`

##### data

`PartialApiAppModerator`

#### Returns

[`AppModerator`](AppModerator.md)

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`_add`](BaseAppsModeratorsManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`appId`, `data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:35](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L35)

#### Parameters

##### appId

`string`

##### data

`PartialApiAppModerator`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`_addMany`](BaseAppsModeratorsManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`appId`, `data?`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:46](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L46)

#### Parameters

##### appId

`string`

##### data?

(`string` \| `PartialApiAppModerator`)[]

#### Returns

`void`

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`_clear`](BaseAppsModeratorsManager.md#_clear)

***

### \_delete()

> `protected` **\_delete**(`appId`, `modId`): `boolean`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:62](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L62)

#### Parameters

##### appId

`string`

##### modId

`string`

#### Returns

`boolean`

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`_delete`](BaseAppsModeratorsManager.md#_delete)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`appId`, `modIds`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:72](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L72)

#### Parameters

##### appId

`string`

##### modIds

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

#### Returns

`void`

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`_deleteMany`](BaseAppsModeratorsManager.md#_deletemany)

***

### \_patch()

> `protected` **\_patch**(`appId`, `modId`, `data`): [`AppModerator`](AppModerator.md) \| `undefined`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:80](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L80)

#### Parameters

##### appId

`string`

##### modId

`string`

##### data

`PartialApiAppModerator`

#### Returns

[`AppModerator`](AppModerator.md) \| `undefined`

#### Inherited from

[`BaseAppsModeratorsManager`](BaseAppsModeratorsManager.md).[`_patch`](BaseAppsModeratorsManager.md#_patch)

***

### create()

> **create**(`appID`, `modID`, `perms`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppModerator`](AppModerator.md)\>

Defined in: [packages/discloud.app/src/managers/AppsModeratorsManager.ts:23](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsModeratorsManager.ts#L23)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppModerator`](AppModerator.md)\>

***

### delete()

> **delete**(`appID`, `modID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsModeratorsManager.ts:65](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsModeratorsManager.ts#L65)

Remove a mod from you application on Discloud

#### Parameters

##### appID

`string`

The app id

##### modID

`string`

The mod id

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### edit()

> **edit**(`appID`, `modID`, `perms`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppModerator`](AppModerator.md)\>

Defined in: [packages/discloud.app/src/managers/AppsModeratorsManager.ts:44](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsModeratorsManager.ts#L44)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppModerator`](AppModerator.md)\>

***

### fetch()

> **fetch**(`appID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppsModeratorsManager.ts:77](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsModeratorsManager.ts#L77)

Get mods information for your app on Discloud

#### Parameters

##### appID

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>
