[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppStatus

# Interface: ApiAppStatus

[discloud.app](../modules/discloud_app.md).ApiAppStatus

## Hierarchy

- [`BaseApiApp`](discloud_app.BaseApiApp.md)

  ↳ **`ApiAppStatus`**

## Table of contents

### Properties

- [container](discloud_app.ApiAppStatus.md#container)
- [cpu](discloud_app.ApiAppStatus.md#cpu)
- [id](discloud_app.ApiAppStatus.md#id)
- [last\_restart](discloud_app.ApiAppStatus.md#last_restart)
- [memory](discloud_app.ApiAppStatus.md#memory)
- [netIO](discloud_app.ApiAppStatus.md#netio)
- [ssd](discloud_app.ApiAppStatus.md#ssd)
- [startedAt](discloud_app.ApiAppStatus.md#startedat)

## Properties

### container

• **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[packages/api-types/rest/v2/app.ts:123](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L123)

___

### cpu

• **cpu**: `string`

CPU usage as percentage

#### Defined in

[packages/api-types/rest/v2/app.ts:127](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L127)

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApiApp](discloud_app.BaseApiApp.md).[id](discloud_app.BaseApiApp.md#id)

#### Defined in

[packages/api-types/rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L7)

___

### last\_restart

• **last\_restart**: `string`

Relative time of the last restart

#### Defined in

[packages/api-types/rest/v2/app.ts:131](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L131)

___

### memory

• **memory**: `string`

RAM usage

#### Defined in

[packages/api-types/rest/v2/app.ts:135](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L135)

___

### netIO

• **netIO**: [`ApiNetIO`](discloud_app.ApiNetIO.md)

Internet usage

#### Defined in

[packages/api-types/rest/v2/app.ts:139](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L139)

___

### ssd

• **ssd**: `string`

Storage space

#### Defined in

[packages/api-types/rest/v2/app.ts:143](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L143)

___

### startedAt

• **startedAt**: `string`

Date of your application has started

#### Defined in

[packages/api-types/rest/v2/app.ts:147](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L147)
