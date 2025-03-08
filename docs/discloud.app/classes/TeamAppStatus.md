[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / TeamAppStatus

# Class: TeamAppStatus

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:6](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L6)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new TeamAppStatus()

> **new TeamAppStatus**(`discloudApp`, `data`): [`TeamAppStatus`](TeamAppStatus.md)

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:49](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L49)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`TeamAppStatus`](TeamAppStatus.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:10](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L10)

Your app id

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`TeamAppStatus`](TeamAppStatus.md)\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### container

> **container**: `string`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:15](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L15)

Status of your application
- It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:19](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L19)

CPU usage as percentage

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp-1)

***

### lastRestart

> **lastRestart**: `string`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:23](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L23)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:27](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L27)

RAM usage

***

### memoryUsage

> **memoryUsage**: `number`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:31](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L31)

Percentage of memory usage

***

### netIO

> **netIO**: [`ApiNetIO`](../interfaces/ApiNetIO.md)

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:35](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L35)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:39](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L39)

Storage space

***

### startedAt

> **startedAt**: `Date`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:43](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L43)

Date of your application has started

***

### startedAtTimestamp

> **startedAtTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:47](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L47)

Timestamp of when your app started

## Accessors

### app

#### Get Signature

> **get** **app**(): `undefined` \| [`TeamApp`](TeamApp.md)

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:85](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L85)

##### Returns

`undefined` \| [`TeamApp`](TeamApp.md)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:55](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L55)

#### Parameters

##### data

`Partial`\<[`ApiStatusApp`](../interfaces/ApiStatusApp.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### fetch()

> **fetch**(): `Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>

Defined in: [packages/discloud.app/src/structures/TeamAppStatus.ts:89](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/discloud.app/src/structures/TeamAppStatus.ts#L89)

#### Returns

`Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>
