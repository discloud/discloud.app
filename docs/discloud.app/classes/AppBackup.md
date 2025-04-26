[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppBackup

# Class: AppBackup

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:8](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L8)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new AppBackup**(`discloudApp`, `data`): `AppBackup`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:27](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L27)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiAppBackup`](../interfaces/ApiAppBackup.md) | [`ApiAppBackupAll`](../interfaces/ApiAppBackupAll.md)

#### Returns

`AppBackup`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:12](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L12)

Your app id

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`AppBackup`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### data?

> `optional` **data**: `Buffer`\<`ArrayBufferLike`\>

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:25](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L25)

The backup Buffer

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### status?

> `optional` **status**: `string`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:21](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L21)

The backup status

***

### url

> **url**: `string`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:17](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L17)

The backup url.
- You can access it `only once`.

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:35](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L35)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiAppBackup`](../interfaces/ApiAppBackup.md) \| [`ApiAppBackupAll`](../interfaces/ApiAppBackupAll.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### download()

> **download**(`path`, `fileName`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`AppBackup`\>

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:50](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/structures/AppBackup.ts#L50)

Make backup of your application

#### Parameters

##### path

`PathLike` = `...`

Backup path

##### fileName

`string` = `...`

Backup file name

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`AppBackup`\>
