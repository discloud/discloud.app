[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / SharedAppOwner

# Class: SharedAppOwner

Defined in: [packages/discloud.app/src/structures/SharedAppOwner.ts:5](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppOwner.ts#L5)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new SharedAppOwner**(`discloudApp`, `owner`): `SharedAppOwner`

Defined in: [packages/discloud.app/src/structures/SharedAppOwner.ts:6](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppOwner.ts#L6)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### owner

[`ApiTeamAppOwner`](../interfaces/ApiTeamAppOwner.md)

#### Returns

`SharedAppOwner`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### avatar

> `readonly` **avatar**: `string`

Defined in: [packages/discloud.app/src/structures/SharedAppOwner.ts:14](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppOwner.ts#L14)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### name

> `readonly` **name**: `string`

Defined in: [packages/discloud.app/src/structures/SharedAppOwner.ts:13](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/SharedAppOwner.ts#L13)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`_`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L22)

#### Parameters

##### \_

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_patch`](Base.md#_patch)

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

[`Base`](Base.md).[`_update`](Base.md#_update)
