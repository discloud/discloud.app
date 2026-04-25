[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / Customdomain

# Class: Customdomain

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L7)

Base for all structures

## Extends

- [`BaseCustomdomain`](BaseCustomdomain.md)

## Constructors

### Constructor

> **new Customdomain**(`discloudApp`, `data`): `Customdomain`

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:8](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L8)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiDomain`](../interfaces/ApiDomain.md)

#### Returns

`Customdomain`

#### Overrides

[`BaseCustomdomain`](BaseCustomdomain.md).[`constructor`](BaseCustomdomain.md#constructor)

## Properties

### app

> `readonly` **app**: [`CustomdomainApp`](CustomdomainApp.md)

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L18)

***

### date

> **date**: `number`

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:22](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L22)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseCustomdomain`](BaseCustomdomain.md).[`discloudApp`](BaseCustomdomain.md#discloudapp)

***

### dns\_status

> **dns\_status**: `string`

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:21](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L21)

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseCustomdomain.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/BaseCustomdomain.ts#L12)

#### Inherited from

[`BaseCustomdomain`](BaseCustomdomain.md).[`id`](BaseCustomdomain.md#id)

***

### instructions

> `readonly` **instructions**: [`CustomdomainInstruction`](CustomdomainInstruction.md)[] = `[]`

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:19](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L19)

***

### isLegacy

> **isLegacy**: `boolean`

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:23](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L23)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseCustomdomain`](BaseCustomdomain.md).[`_clone`](BaseCustomdomain.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Customdomain.ts:25](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Customdomain.ts#L25)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiDomain`](../interfaces/ApiDomain.md)\>

#### Returns

`this`

#### Overrides

[`BaseCustomdomain`](BaseCustomdomain.md).[`_patch`](BaseCustomdomain.md#_patch)

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

[`BaseCustomdomain`](BaseCustomdomain.md).[`_update`](BaseCustomdomain.md#_update)
