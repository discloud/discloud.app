[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppStatusManager

# Class: AppStatusManager

Defined in: [packages/discloud.app/src/managers/AppStatusManager.ts:4](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/AppStatusManager.ts#L4)

Base for all managers

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### Constructor

> **new AppStatusManager**(`discloudApp`, `appId`): `AppStatusManager`

Defined in: [packages/discloud.app/src/managers/AppStatusManager.ts:5](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/AppStatusManager.ts#L5)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### appId

`string`

#### Returns

`AppStatusManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/managers/AppStatusManager.ts:5](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/AppStatusManager.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`AppStatus`](AppStatus.md) \| `undefined`

Defined in: [packages/discloud.app/src/managers/AppStatusManager.ts:9](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/AppStatusManager.ts#L9)

##### Returns

[`AppStatus`](AppStatus.md) \| `undefined`

## Methods

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppStatusManager.ts:14](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/AppStatusManager.ts#L14)

Get the status of your application on Discloud

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
