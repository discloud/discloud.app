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

• **new TeamAppStatus**(`discloudApp`, `data`): [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:49](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L49)

## Properties

### appId

• `Readonly` **appId**: `string`

Your app id

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:10](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L10)

___

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)\<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/Base.ts#L5)

___

### container

• **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:15](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L15)

___

### cpu

• **cpu**: `string`

CPU usage as percentage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:19](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L19)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/Base.ts#L12)

___

### lastRestart

• **lastRestart**: `string`

Relative time of the last restart

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:23](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L23)

___

### memory

• **memory**: `string`

RAM usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:27](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L27)

___

### memoryUsage

• **memoryUsage**: `number`

Percentage of memory usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:31](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L31)

___

### netIO

• **netIO**: [`ApiNetIO`](../interfaces/discloud_app.ApiNetIO.md)

Internet usage

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:35](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L35)

___

### ssd

• **ssd**: `string`

Storage space

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:39](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L39)

___

### startedAt

• **startedAt**: `Date`

Date of your application has started

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:43](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L43)

___

### startedAtTimestamp

• **startedAtTimestamp**: `number`

Timestamp of when your app started

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:47](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L47)

## Accessors

### app

• `get` **app**(): `undefined` \| [`TeamApp`](discloud_app.TeamApp.md)

#### Returns

`undefined` \| [`TeamApp`](discloud_app.TeamApp.md)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:85](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L85)

## Methods

### \_clone

▸ **_clone**(): [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Returns

[`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_patch

▸ **_patch**(`data`): [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`ApiStatusApp`](../interfaces/discloud_app.ApiStatusApp.md)\> |

#### Returns

[`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:55](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L55)

___

### \_update

▸ **_update**(`data`): [`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`TeamAppStatus`](discloud_app.TeamAppStatus.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/Base.ts#L26)

___

### fetch

▸ **fetch**(): `Promise`\<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Returns

`Promise`\<[`TeamAppStatus`](discloud_app.TeamAppStatus.md)\>

#### Defined in

[packages/discloud.app/src/structures/TeamAppStatus.ts:89](https://github.com/discloud/discloud.app/blob/99d4db4/packages/discloud.app/src/structures/TeamAppStatus.ts#L89)
