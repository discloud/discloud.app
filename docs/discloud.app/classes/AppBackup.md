[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppBackup

# Class: AppBackup

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:8](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L8)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new AppBackup()

> **new AppBackup**(`discloudApp`, `data`): [`AppBackup`](AppBackup.md)

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:27](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L27)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiAppBackup`](../interfaces/ApiAppBackup.md) | [`ApiAppBackupAll`](../interfaces/ApiAppBackupAll.md)

#### Returns

[`AppBackup`](AppBackup.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:12](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L12)

Your app id

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### data?

> `optional` **data**: `Buffer`\<`ArrayBufferLike`\>

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:25](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L25)

The backup Buffer

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp-1)

***

### status?

> `optional` **status**: `string`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:21](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L21)

The backup status

***

### url

> **url**: `string`

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:17](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L17)

The backup url.
- You can access it `only once`.

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

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:35](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L35)

#### Parameters

##### data

`Partial`\<[`ApiAppBackup`](../interfaces/ApiAppBackup.md) \| [`ApiAppBackupAll`](../interfaces/ApiAppBackupAll.md)\>

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

### download()

> **download**(`path`, `fileName`): `Promise`\<[`AppBackup`](AppBackup.md)\>

Defined in: [packages/discloud.app/src/structures/AppBackup.ts:50](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/structures/AppBackup.ts#L50)

Make backup of your application

#### Parameters

##### path

`PathLike` = `...`

Backup path

##### fileName

`string` = `...`

Backup file name

#### Returns

`Promise`\<[`AppBackup`](AppBackup.md)\>
