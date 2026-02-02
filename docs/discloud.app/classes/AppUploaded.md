[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppUploaded

# Class: AppUploaded

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:5](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L5)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new AppUploaded**(`discloudApp`, `data`): `AppUploaded`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:47](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L47)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiUploadApp`](../interfaces/ApiUploadApp.md)

#### Returns

`AppUploaded`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### addedAtTimestamp

> **addedAtTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:13](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L13)

The timestamp of the upload of your application

***

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:9](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L9)

Your app id

***

### autoRestart

> **autoRestart**: `boolean`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:17](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L17)

If your app has auto-restart enabled

***

### avatarURL

> **avatarURL**: `string`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:21](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L21)

Your app's avatar url

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`AppUploaded`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### lang

> **lang**: `string`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:25](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L25)

Your app programming language

***

### mainFile

> **mainFile**: `string`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:29](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L29)

The main file of your application

***

### name

> **name**: `string`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:33](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L33)

The name of your application

***

### ram

> **ram**: `number`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:37](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L37)

The ram quantity for your application

***

### type

> **type**: `number`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:41](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L41)

Your app's type

***

### version

> **version**: `string`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:45](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L45)

The version of the package

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md) \| `undefined`

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:86](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L86)

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

Defined in: [packages/discloud.app/src/structures/AppUploaded.ts:55](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/discloud.app/src/structures/AppUploaded.ts#L55)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiUploadApp`](../interfaces/ApiUploadApp.md)\>

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
