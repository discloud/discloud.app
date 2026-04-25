[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppModeratorsManager

# Class: AppModeratorsManager

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:9](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L9)

Manager for Team on your application on Discloud

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### Constructor

> **new AppModeratorsManager**(`discloudApp`, `appId`): `AppModeratorsManager`

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:10](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L10)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### appId

`string`

#### Returns

`AppModeratorsManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:10](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L10)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\> \| `undefined`

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:14](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L14)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\> \| `undefined`

## Methods

### create()

> **create**(`modID`, `perms`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppModerator`](AppModerator.md)\>

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:22](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L22)

Add a mod for you application on Discloud

#### Parameters

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

> **delete**(`modID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:42](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L42)

Remove a mod from you application on Discloud

#### Parameters

##### modID

`string`

The mod id

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### edit()

> **edit**(`modID`, `perms`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppModerator`](AppModerator.md)\>

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:32](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L32)

Edit permissions of a mod for you application on Discloud

#### Parameters

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

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

Defined in: [packages/discloud.app/src/managers/AppModeratorsManager.ts:49](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppModeratorsManager.ts#L49)

Get mods information for your app on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>
