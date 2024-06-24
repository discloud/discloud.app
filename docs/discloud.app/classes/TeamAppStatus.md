[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / TeamAppStatus

# Class: TeamAppStatus

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new TeamAppStatus()

> **new TeamAppStatus**(`discloudApp`, `data`): [`TeamAppStatus`](TeamAppStatus.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`TeamAppStatus`](TeamAppStatus.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:49](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L49)

## Properties

### appId

> `readonly` **appId**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L10)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`TeamAppStatus`](TeamAppStatus.md)\>

#### Inherited from

`Base.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### container

> **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L15)

***

### cpu

> **cpu**: `string`

CPU usage as percentage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L19)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

***

### lastRestart

> **lastRestart**: `string`

Relative time of the last restart

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:23](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L23)

***

### memory

> **memory**: `string`

RAM usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L27)

***

### memoryUsage

> **memoryUsage**: `number`

Percentage of memory usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L31)

***

### netIO

> **netIO**: [`ApiNetIO`](../interfaces/ApiNetIO.md)

Internet usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:35](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L35)

***

### ssd

> **ssd**: `string`

Storage space

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:39](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L39)

***

### startedAt

> **startedAt**: `Date`

Date of your application has started

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:43](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L43)

***

### startedAtTimestamp

> **startedAtTimestamp**: `number`

Timestamp of when your app started

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:47](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L47)

## Accessors

### app

> `get` **app**(): `undefined` \| [`TeamApp`](TeamApp.md)

#### Returns

`undefined` \| [`TeamApp`](TeamApp.md)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:85](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L85)

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

• **data**: `Partial`\<[`ApiStatusApp`](../interfaces/ApiStatusApp.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:55](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L55)

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

### fetch()

> **fetch**(): `Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>

#### Returns

`Promise`\<[`TeamAppStatus`](TeamAppStatus.md)\>

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:89](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/TeamAppStatus.ts#L89)
