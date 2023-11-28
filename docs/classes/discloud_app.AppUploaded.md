[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppUploaded

# Class: AppUploaded

[discloud.app](../modules/discloud_app.md).AppUploaded

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`AppUploaded`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppUploaded.md#constructor)

### Properties

- [addedAtTimestamp](discloud_app.AppUploaded.md#addedattimestamp)
- [appId](discloud_app.AppUploaded.md#appid)
- [autoRestart](discloud_app.AppUploaded.md#autorestart)
- [avatarURL](discloud_app.AppUploaded.md#avatarurl)
- [constructor](discloud_app.AppUploaded.md#constructor-1)
- [discloudApp](discloud_app.AppUploaded.md#discloudapp)
- [lang](discloud_app.AppUploaded.md#lang)
- [mainFile](discloud_app.AppUploaded.md#mainfile)
- [name](discloud_app.AppUploaded.md#name)
- [ram](discloud_app.AppUploaded.md#ram)
- [type](discloud_app.AppUploaded.md#type)
- [version](discloud_app.AppUploaded.md#version)

### Accessors

- [app](discloud_app.AppUploaded.md#app)

### Methods

- [\_clone](discloud_app.AppUploaded.md#_clone)
- [\_patch](discloud_app.AppUploaded.md#_patch)
- [\_update](discloud_app.AppUploaded.md#_update)

## Constructors

### constructor

• **new AppUploaded**(`discloudApp`, `data`): [`AppUploaded`](discloud_app.AppUploaded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiUploadApp`](../interfaces/discloud_app.ApiUploadApp.md) |

#### Returns

[`AppUploaded`](discloud_app.AppUploaded.md)

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:47](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L47)

## Properties

### addedAtTimestamp

• **addedAtTimestamp**: `number`

The timestamp of the upload of your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:13](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L13)

___

### appId

• `Readonly` **appId**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:9](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L9)

___

### autoRestart

• **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:17](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L17)

___

### avatarURL

• **avatarURL**: `string`

Your app's avatar url

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:21](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L21)

___

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)\<[`AppUploaded`](discloud_app.AppUploaded.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/Base.ts#L12)

___

### lang

• **lang**: `string`

Your app programming language

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:25](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L25)

___

### mainFile

• **mainFile**: `string`

The main file of your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:29](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L29)

___

### name

• **name**: `string`

The name of your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:33](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L33)

___

### ram

• **ram**: `number`

The ram quantity for your application

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:37](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L37)

___

### type

• **type**: `string`

Your app's type

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:41](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L41)

___

### version

• **version**: `string`

The version of the package

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:45](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L45)

## Accessors

### app

• `get` **app**(): `undefined` \| [`App`](discloud_app.App.md)

#### Returns

`undefined` \| [`App`](discloud_app.App.md)

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:86](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L86)

## Methods

### \_clone

▸ **_clone**(): [`AppUploaded`](discloud_app.AppUploaded.md)

#### Returns

[`AppUploaded`](discloud_app.AppUploaded.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_patch

▸ **_patch**(`data`): [`AppUploaded`](discloud_app.AppUploaded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`ApiUploadApp`](../interfaces/discloud_app.ApiUploadApp.md)\> |

#### Returns

[`AppUploaded`](discloud_app.AppUploaded.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppUploaded.ts:55](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/AppUploaded.ts#L55)

___

### \_update

▸ **_update**(`data`): [`AppUploaded`](discloud_app.AppUploaded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppUploaded`](discloud_app.AppUploaded.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/discloud.app/src/structures/Base.ts#L26)
