[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppStatus

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

- [appId](discloud_app.AppStatus.md#appid)
- [constructor](discloud_app.AppStatus.md#constructor-1)
- [container](discloud_app.AppStatus.md#container)
- [cpu](discloud_app.AppStatus.md#cpu)
- [discloudApp](discloud_app.AppStatus.md#discloudapp)
- [lastRestart](discloud_app.AppStatus.md#lastrestart)
- [memory](discloud_app.AppStatus.md#memory)
- [memoryUsage](discloud_app.AppStatus.md#memoryusage)
- [netIO](discloud_app.AppStatus.md#netio)
- [ssd](discloud_app.AppStatus.md#ssd)
- [startedAt](discloud_app.AppStatus.md#startedat)
- [startedAtTimestamp](discloud_app.AppStatus.md#startedattimestamp)

### Accessors

- [app](discloud_app.AppStatus.md#app)

### Methods

- [\_clone](discloud_app.AppStatus.md#_clone)
- [\_patch](discloud_app.AppStatus.md#_patch)
- [\_update](discloud_app.AppStatus.md#_update)
- [fetch](discloud_app.AppStatus.md#fetch)

## Constructors

### constructor

• **new AppStatus**(`discloudApp`, `data`): [`AppStatus`](discloud_app.AppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`AppStatus`](discloud_app.AppStatus.md)

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:49](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L49)

## Properties

### appId

• `Readonly` **appId**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L10)

___

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)\<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L5)

___

### container

• **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:15](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L15)

___

### cpu

• **cpu**: `string`

CPU usage as percentage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:19](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L19)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L12)

___

### lastRestart

• **lastRestart**: `string`

Relative time of the last restart

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:23](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L23)

___

### memory

• **memory**: `string`

RAM usage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:27](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L27)

___

### memoryUsage

• **memoryUsage**: `number`

Percentage of memory usage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:31](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L31)

___

### netIO

• **netIO**: [`ApiNetIO`](../interfaces/discloud_app.ApiNetIO.md)

Internet usage

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:35](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L35)

___

### ssd

• **ssd**: `string`

Storage space

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:39](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L39)

___

### startedAt

• **startedAt**: `Date`

Date of your application has started

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:43](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L43)

___

### startedAtTimestamp

• **startedAtTimestamp**: `number`

Timestamp of when your app started

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:47](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L47)

## Accessors

### app

• `get` **app**(): `undefined` \| [`App`](discloud_app.App.md)

#### Returns

`undefined` \| [`App`](discloud_app.App.md)

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:85](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L85)

## Methods

### \_clone

▸ **_clone**(): `this`

#### Returns

`this`

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_patch

▸ **_patch**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md)\> |

#### Returns

`this`

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:55](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L55)

___

### \_update

▸ **_update**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`this`

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L26)

___

### fetch

▸ **fetch**(): `Promise`\<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Returns

`Promise`\<[`AppStatus`](discloud_app.AppStatus.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppStatus.ts:89](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppStatus.ts#L89)
