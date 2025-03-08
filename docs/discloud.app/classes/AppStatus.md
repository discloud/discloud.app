[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppStatus

# Class: AppStatus

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:6](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L6)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new AppStatus()

> **new AppStatus**(`discloudApp`, `data`): [`AppStatus`](AppStatus.md)

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:49](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L49)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`AppStatus`](AppStatus.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:10](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L10)

Your app id

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`AppStatus`](AppStatus.md)\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### container

> **container**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:15](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L15)

Status of your application
- It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:19](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L19)

CPU usage as percentage

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp-1)

***

### lastRestart

> **lastRestart**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:23](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L23)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:27](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L27)

RAM usage

***

### memoryUsage

> **memoryUsage**: `number`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:31](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L31)

Percentage of memory usage

***

### netIO

> **netIO**: [`ApiNetIO`](../interfaces/ApiNetIO.md)

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:35](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L35)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:39](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L39)

Storage space

***

### startedAt

> **startedAt**: `Date`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:43](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L43)

Date of your application has started

***

### startedAtTimestamp

> **startedAtTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:47](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L47)

Timestamp of when your app started

## Accessors

### app

#### Get Signature

> **get** **app**(): `undefined` \| [`App`](App.md)

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:85](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L85)

##### Returns

`undefined` \| [`App`](App.md)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:55](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L55)

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

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### fetch()

> **fetch**(): `Promise`\<[`AppStatus`](AppStatus.md)\>

Defined in: [packages/discloud.app/src/structures/AppStatus.ts:89](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppStatus.ts#L89)

#### Returns

`Promise`\<[`AppStatus`](AppStatus.md)\>
