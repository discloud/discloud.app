[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / Subdomain

# Class: Subdomain

Defined in: [packages/discloud.app/src/structures/Subdomain.ts:5](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Subdomain.ts#L5)

Base for all structures

## Extends

- [`BaseSubdomain`](BaseSubdomain.md)

## Constructors

### Constructor

> **new Subdomain**(`discloudApp`, `data`): `Subdomain`

Defined in: [packages/discloud.app/src/structures/Subdomain.ts:6](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Subdomain.ts#L6)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiSubdomain`](../interfaces/ApiSubdomain.md)

#### Returns

`Subdomain`

#### Overrides

[`BaseSubdomain`](BaseSubdomain.md).[`constructor`](BaseSubdomain.md#constructor)

## Properties

### date

> **date**: `number`

Defined in: [packages/discloud.app/src/structures/Subdomain.ts:16](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Subdomain.ts#L16)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`BaseSubdomain`](BaseSubdomain.md).[`discloudApp`](BaseSubdomain.md#discloudapp)

***

### id

> `readonly` **id**: `string`

Defined in: [packages/discloud.app/src/structures/BaseSubdomain.ts:12](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/BaseSubdomain.ts#L12)

#### Inherited from

[`BaseSubdomain`](BaseSubdomain.md).[`id`](BaseSubdomain.md#id)

***

### status

> **status**: `number`

Defined in: [packages/discloud.app/src/structures/Subdomain.ts:15](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Subdomain.ts#L15)

***

### userID

> `readonly` **userID**: `string`

Defined in: [packages/discloud.app/src/structures/Subdomain.ts:14](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Subdomain.ts#L14)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`BaseSubdomain`](BaseSubdomain.md).[`_clone`](BaseSubdomain.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Subdomain.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Subdomain.ts#L18)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiSubdomain`](../interfaces/ApiSubdomain.md)\>

#### Returns

`this`

#### Overrides

[`BaseSubdomain`](BaseSubdomain.md).[`_patch`](BaseSubdomain.md#_patch)

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

[`BaseSubdomain`](BaseSubdomain.md).[`_update`](BaseSubdomain.md#_update)
