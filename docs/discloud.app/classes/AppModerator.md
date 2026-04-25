[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppModerator

# Class: AppModerator

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:5](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L5)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new AppModerator**(`discloudApp`, `appId`, `data`): `AppModerator`

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:6](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L6)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### appId

`string`

##### data

[`ApiAppTeam`](../interfaces/ApiAppTeam.md)

#### Returns

`AppModerator`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:6](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L6)

***

### avatar

> **avatar**: `string` \| `null`

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:17](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L17)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### modID

> `readonly` **modID**: `string`

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:14](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L14)

***

### perms

> `readonly` **perms**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:15](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L15)

***

### username

> **username**: `string` \| `null`

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L18)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md) \| `undefined`

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:38](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L38)

##### Returns

[`App`](App.md) \| `undefined`

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/AppModerator.ts:20](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppModerator.ts#L20)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiAppTeam`](../interfaces/ApiAppTeam.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

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

[`Base`](Base.md).[`_update`](Base.md#_update)
