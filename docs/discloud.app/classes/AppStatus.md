[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppStatus

# Class: AppStatus

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:6](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L6)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new AppStatus**(`discloudApp`, `data`): `AppStatus`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:49](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L49)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

`AppStatus`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:10](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L10)

Your app id

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`AppStatus`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### container

> **container**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:15](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L15)

Status of your application
- It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:19](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L19)

CPU usage as percentage

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### lastRestart

> **lastRestart**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:23](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L23)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:27](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L27)

RAM usage

***

### memoryUsage

> **memoryUsage**: `number`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:31](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L31)

Percentage of memory usage

***

### netIO

> **netIO**: [`ApiNetIO`](../interfaces/ApiNetIO.md)

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:35](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L35)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:39](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L39)

Storage space

***

### startedAt

> **startedAt**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:43](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L43)

Date of your application has started

***

### startedAtTimestamp

> **startedAtTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:47](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L47)

Timestamp of when your app started

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md) \| `undefined`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:85](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L85)

##### Returns

[`App`](App.md) \| `undefined`

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:55](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L55)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiStatusApp`](../interfaces/ApiStatusApp.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`AppStatus`\>

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:89](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppStatus.ts#L89)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`AppStatus`\>
