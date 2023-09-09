[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / TeamAppStatus

# Class: TeamAppStatus

[discloud.app](../modules/discloud_app.md).TeamAppStatus

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`TeamAppStatus`**

## Table of contents

### Constructors

- [constructor](discloud_app.TeamAppStatus.md#constructor)

### Properties

- [appId](discloud_app.TeamAppStatus.md#appid)
- [constructor](discloud_app.TeamAppStatus.md#constructor-1)
- [container](discloud_app.TeamAppStatus.md#container)
- [cpu](discloud_app.TeamAppStatus.md#cpu)
- [discloudApp](discloud_app.TeamAppStatus.md#discloudapp)
- [lastRestart](discloud_app.TeamAppStatus.md#lastrestart)
- [memory](discloud_app.TeamAppStatus.md#memory)
- [memoryUsage](discloud_app.TeamAppStatus.md#memoryusage)
- [netIO](discloud_app.TeamAppStatus.md#netio)
- [ssd](discloud_app.TeamAppStatus.md#ssd)
- [startedAt](discloud_app.TeamAppStatus.md#startedat)
- [startedAtTimestamp](discloud_app.TeamAppStatus.md#startedattimestamp)

### Accessors

- [app](discloud_app.TeamAppStatus.md#app)

### Methods

- [\_clone](discloud_app.TeamAppStatus.md#_clone)
- [\_patch](discloud_app.TeamAppStatus.md#_patch)
- [\_update](discloud_app.TeamAppStatus.md#_update)
- [fetch](discloud_app.TeamAppStatus.md#fetch)

## Constructors

### constructor

• **new TeamAppStatus**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:49](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L49)

## Properties

### appId

• **appId**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:10](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L10)

___

### constructor

• **constructor**: [`Constructor`](../modules/discloud_app.md#constructor)<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L5)

___

### container

• **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:15](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L15)

___

### cpu

• **cpu**: `string`

CPU usage as percentage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:19](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L19)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L12)

___

### lastRestart

• **lastRestart**: `string`

Relative time of the last restart

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:23](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L23)

___

### memory

• **memory**: `string`

RAM usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:27](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L27)

___

### memoryUsage

• **memoryUsage**: `number`

Percentage of memory usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:31](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L31)

___

### netIO

• **netIO**: [`ApiNetIO`](../interfaces/discloud_app.ApiNetIO.md)

Internet usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:35](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L35)

___

### ssd

• **ssd**: `string`

Storage space

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:39](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L39)

___

### startedAt

• **startedAt**: [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

Date of your application has started

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:43](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L43)

___

### startedAtTimestamp

• **startedAtTimestamp**: `number`

Timestamp of when your app started

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:47](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L47)

## Accessors

### app

• `get` **app**(): `undefined` \| [`TeamApp`](discloud_app.TeamApp.md)

#### Returns

`undefined` \| [`TeamApp`](discloud_app.TeamApp.md)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:55](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L55)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Returns

[`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md) |

#### Returns

[`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:63](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L63)

___

### \_update

▸ `Protected` **_update**(`data`): [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/Base.ts#L22)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:59](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/discloud.app/src/structures/TeamAppStatus.ts#L59)
