[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / SharedAppStatus

# Class: SharedAppStatus

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:6](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L6)

Base for all structures

## Extends

- [`BaseSharedAppStatus`](BaseSharedAppStatus.md)

## Constructors

### Constructor

> **new SharedAppStatus**(`discloudApp`, `data`): `SharedAppStatus`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:45](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L45)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiStatusApp`](../interfaces/ApiStatusApp.md)

#### Returns

`SharedAppStatus`

#### Overrides

[`BaseSharedAppStatus`](BaseSharedAppStatus.md).[`constructor`](BaseSharedAppStatus.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/BaseSharedAppStatus.ts:9](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseSharedAppStatus.ts#L9)

Your app id

#### Inherited from

[`BaseSharedAppStatus`](BaseSharedAppStatus.md).[`appId`](BaseSharedAppStatus.md#appid)

***

### container

> **container**: `string`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:11](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L11)

Status of your application
- It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:15](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L15)

CPU usage as percentage

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseSharedAppStatus`](BaseSharedAppStatus.md).[`discloudApp`](BaseSharedAppStatus.md#discloudapp)

***

### lastRestart

> **lastRestart**: `string`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:19](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L19)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:23](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L23)

RAM usage

***

### memoryUsage

> **memoryUsage**: `number`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:27](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L27)

Percentage of memory usage

***

### netIO

> **netIO**: [`ApiNetIO`](../interfaces/ApiNetIO.md)

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:31](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L31)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:35](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L35)

Storage space

***

### startedAt

> **startedAt**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:39](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L39)

Date of your application has started

***

### startedAtTimestamp

> **startedAtTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:43](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L43)

Timestamp of when your app started

## Accessors

### app

#### Get Signature

> **get** **app**(): [`SharedApp`](SharedApp.md) \| `undefined`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:81](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L81)

##### Returns

[`SharedApp`](SharedApp.md) \| `undefined`

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseSharedAppStatus`](BaseSharedAppStatus.md).[`_clone`](BaseSharedAppStatus.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/SharedAppStatus.ts:51](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppStatus.ts#L51)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiStatusApp`](../interfaces/ApiStatusApp.md)\>

#### Returns

`this`

#### Overrides

[`BaseSharedAppStatus`](BaseSharedAppStatus.md).[`_patch`](BaseSharedAppStatus.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`BaseSharedAppStatus`](BaseSharedAppStatus.md).[`_update`](BaseSharedAppStatus.md#_update)
