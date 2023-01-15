[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppStatus

# Class: AppStatus

[discloud.app](../modules/discloud_app.md).AppStatus

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`AppStatus`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppStatus.md#constructor)

### Properties

- [constructor](discloud_app.AppStatus.md#constructor-1)
- [container](discloud_app.AppStatus.md#container)
- [cpu](discloud_app.AppStatus.md#cpu)
- [discloudApp](discloud_app.AppStatus.md#discloudapp)
- [id](discloud_app.AppStatus.md#id)
- [lastRestart](discloud_app.AppStatus.md#lastrestart)
- [memory](discloud_app.AppStatus.md#memory)
- [memoryUsage](discloud_app.AppStatus.md#memoryusage)
- [netIO](discloud_app.AppStatus.md#netio)
- [ssd](discloud_app.AppStatus.md#ssd)
- [startedAt](discloud_app.AppStatus.md#startedat)
- [startedAtTimestamp](discloud_app.AppStatus.md#startedattimestamp)

### Methods

- [\_clone](discloud_app.AppStatus.md#_clone)
- [\_patch](discloud_app.AppStatus.md#_patch)
- [\_update](discloud_app.AppStatus.md#_update)

## Constructors

### constructor

• **new AppStatus**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiAppStatus`](../interfaces/discloud_app.ApiAppStatus.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:49](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L49)

## Properties

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/Base.ts#L5)

___

### container

• **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:11](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L11)

___

### cpu

• **cpu**: `string`

CPU usage as percentage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:15](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L15)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• **id**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:19](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L19)

___

### lastRestart

• **lastRestart**: `string`

Relative time of the last restart

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:23](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L23)

___

### memory

• `Optional` **memory**: `string`

RAM usage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:27](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L27)

___

### memoryUsage

• `Optional` **memoryUsage**: `number`

Percentage of memory usage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:31](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L31)

___

### netIO

• **netIO**: [`ApiNetIO`](../interfaces/discloud_app.ApiNetIO.md)

Internet usage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:35](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L35)

___

### ssd

• **ssd**: `string`

Storage space

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:39](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L39)

___

### startedAt

• `Optional` **startedAt**: [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

Date of your application has started

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:43](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L43)

___

### startedAtTimestamp

• `Optional` **startedAtTimestamp**: `number`

Timestamp of when your app started

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:47](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/AppStatus.ts#L47)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`AppStatus`](discloud_app.AppStatus.md)

#### Returns

[`AppStatus`](discloud_app.AppStatus.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`AppStatus`](discloud_app.AppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppStatus`](discloud_app.AppStatus.md)

#### Inherited from

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_update

▸ `Protected` **_update**(`data`): [`AppStatus`](discloud_app.AppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AppStatus`](discloud_app.AppStatus.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:23](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/structures/Base.ts#L23)
