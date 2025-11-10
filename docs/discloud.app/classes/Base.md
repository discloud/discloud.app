[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / Base

# Abstract Class: Base

Defined in: [packages/discloud.app/src/structures/Base.ts:4](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L4)

Base for all structures

## Extended by

- [`AppApt`](AppApt.md)
- [`AppBackup`](AppBackup.md)
- [`AppStatus`](AppStatus.md)
- [`AppTeam`](AppTeam.md)
- [`AppUploaded`](AppUploaded.md)
- [`BaseApp`](BaseApp.md)
- [`BaseTeamApp`](BaseTeamApp.md)
- [`TeamAppStatus`](TeamAppStatus.md)
- [`User`](User.md)

## Constructors

### Constructor

> **new Base**(`discloudApp`): `Base`

Defined in: [packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L14)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`Base`

## Properties

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`Base`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L12)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

***

### \_patch()

> `protected` **\_patch**(`_`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L22)

#### Parameters

##### \_

`unknown`

#### Returns

`this`

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`
