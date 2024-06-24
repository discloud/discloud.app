[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppBackup

# Class: AppBackup

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new AppBackup()

> **new AppBackup**(`discloudApp`, `data`): [`AppBackup`](AppBackup.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`ApiAppBackup`](../interfaces/ApiAppBackup.md) \| [`ApiAppBackupAll`](../interfaces/ApiAppBackupAll.md)

#### Returns

[`AppBackup`](AppBackup.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppBackup.ts#L27)

## Properties

### appId

> `readonly` **appId**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppBackup.ts#L12)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`AppBackup`](AppBackup.md)\>

#### Inherited from

`Base.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### data?

> `optional` **data**: `Buffer`

The backup Buffer

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:25](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppBackup.ts#L25)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

***

### status?

> `optional` **status**: `string`

The backup status

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:21](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppBackup.ts#L21)

***

### url

> **url**: `string`

The backup url.
- You can access it `only once`.

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:17](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppBackup.ts#L17)

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

• **data**: `Partial`\<[`ApiAppBackup`](../interfaces/ApiAppBackup.md) \| [`ApiAppBackupAll`](../interfaces/ApiAppBackupAll.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:35](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppBackup.ts#L35)

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

### download()

> **download**(`path`, `fileName`): `Promise`\<[`AppBackup`](AppBackup.md)\>

Make backup of your application

#### Parameters

• **path**: `PathLike` = `...`

Backup path

• **fileName**: `string` = `...`

Backup file name

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppBackup.ts:50](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppBackup.ts#L50)
