[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppStatus

# Class: AppStatus

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:6](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L6)

Base for all structures

## Extends

- [`BaseAppStatus`](BaseAppStatus.md)

## Constructors

### Constructor

> **new AppStatus**(`discloudApp`, `data`): `AppStatus`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:45](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L45)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiStatusApp`](../interfaces/ApiStatusApp.md)

#### Returns

`AppStatus`

#### Overrides

[`BaseAppStatus`](BaseAppStatus.md).[`constructor`](BaseAppStatus.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/BaseAppStatus.ts:9](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/BaseAppStatus.ts#L9)

Your app id

#### Inherited from

[`BaseAppStatus`](BaseAppStatus.md).[`appId`](BaseAppStatus.md#appid)

***

### container

> **container**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:11](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L11)

Status of your application
- It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:15](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L15)

CPU usage as percentage

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseAppStatus`](BaseAppStatus.md).[`discloudApp`](BaseAppStatus.md#discloudapp)

***

### lastRestart

> **lastRestart**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:19](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L19)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:23](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L23)

RAM usage

***

### memoryUsage

> **memoryUsage**: `number`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:27](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L27)

Percentage of memory usage

***

### netIO

> **netIO**: [`ApiNetIO`](../interfaces/ApiNetIO.md)

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:31](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L31)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:35](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L35)

Storage space

***

### startedAt

> **startedAt**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:39](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L39)

Date of your application has started

***

### startedAtTimestamp

> **startedAtTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:43](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L43)

Timestamp of when your app started

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md) \| `undefined`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:81](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L81)

##### Returns

[`App`](App.md) \| `undefined`

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseAppStatus`](BaseAppStatus.md).[`_clone`](BaseAppStatus.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:51](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppStatus.ts#L51)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiStatusApp`](../interfaces/ApiStatusApp.md)\>

#### Returns

`this`

#### Overrides

[`BaseAppStatus`](BaseAppStatus.md).[`_patch`](BaseAppStatus.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`BaseAppStatus`](BaseAppStatus.md).[`_update`](BaseAppStatus.md#_update)
