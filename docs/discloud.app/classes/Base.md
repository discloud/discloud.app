[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / Base

# Abstract Class: Base

Defined in: [packages/discloud.app/src/structures/Base.ts:11](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L11)

Base for all structures

## Extended by

- [`AppApt`](AppApt.md)
- [`AppBackup`](AppBackup.md)
- [`AppModerator`](AppModerator.md)
- [`AppUploaded`](AppUploaded.md)
- [`BaseApp`](BaseApp.md)
- [`BaseAppStatus`](BaseAppStatus.md)
- [`BaseCustomdomain`](BaseCustomdomain.md)
- [`BaseSharedApp`](BaseSharedApp.md)
- [`BaseSharedAppStatus`](BaseSharedAppStatus.md)
- [`BaseSubdomain`](BaseSubdomain.md)
- [`CustomdomainApp`](CustomdomainApp.md)
- [`CustomdomainInstruction`](CustomdomainInstruction.md)
- [`SharedAppOwner`](SharedAppOwner.md)
- [`User`](User.md)

## Constructors

### Constructor

> **new Base**(`discloudApp`): `Base`

Defined in: [packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L14)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`Base`

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L12)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

***

### \_patch()

> `protected` **\_patch**(`_`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L22)

#### Parameters

##### \_

`unknown`

#### Returns

`this`

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`
