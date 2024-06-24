[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppUploaded

# Class: AppUploaded

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new AppUploaded()

> **new AppUploaded**(`discloudApp`, `data`): [`AppUploaded`](AppUploaded.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`ApiUploadApp`](../interfaces/ApiUploadApp.md)

#### Returns

[`AppUploaded`](AppUploaded.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:47](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L47)

## Properties

### addedAtTimestamp

> **addedAtTimestamp**: `number`

The timestamp of the upload of your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:13](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L13)

***

### appId

> `readonly` **appId**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:9](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L9)

***

### autoRestart

> **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:17](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L17)

***

### avatarURL

> **avatarURL**: `string`

Your app's avatar url

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:21](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L21)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`AppUploaded`](AppUploaded.md)\>

#### Inherited from

`Base.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

***

### lang

> **lang**: `string`

Your app programming language

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:25](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L25)

***

### mainFile

> **mainFile**: `string`

The main file of your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:29](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L29)

***

### name

> **name**: `string`

The name of your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L33)

***

### ram

> **ram**: `number`

The ram quantity for your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:37](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L37)

***

### type

> **type**: `string`

Your app's type

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:41](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L41)

***

### version

> **version**: `string`

The version of the package

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:45](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L45)

## Accessors

### app

> `get` **app**(): `undefined` \| [`App`](App.md)

#### Returns

`undefined` \| [`App`](App.md)

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:86](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L86)

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

• **data**: `Partial`\<[`ApiUploadApp`](../interfaces/ApiUploadApp.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:55](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppUploaded.ts#L55)

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
