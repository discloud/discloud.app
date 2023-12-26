[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiStatusApp

# Interface: ApiStatusApp

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiStatusApp

## Hierarchy

- [`BaseApiApp`](discloudapp_api_types.BaseApiApp.md)

  ↳ **`ApiStatusApp`**

## Table of contents

### Properties

- [container](discloudapp_api_types.ApiStatusApp.md#container)
- [cpu](discloudapp_api_types.ApiStatusApp.md#cpu)
- [id](discloudapp_api_types.ApiStatusApp.md#id)
- [last\_restart](discloudapp_api_types.ApiStatusApp.md#last_restart)
- [memory](discloudapp_api_types.ApiStatusApp.md#memory)
- [netIO](discloudapp_api_types.ApiStatusApp.md#netio)
- [ssd](discloudapp_api_types.ApiStatusApp.md#ssd)
- [startedAt](discloudapp_api_types.ApiStatusApp.md#startedat)

## Properties

### container

• **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[rest/v2/app.ts:127](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L127)

___

### cpu

• **cpu**: `string`

CPU usage as percentage

#### Defined in

[rest/v2/app.ts:131](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L131)

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApiApp](discloudapp_api_types.BaseApiApp.md).[id](discloudapp_api_types.BaseApiApp.md#id)

#### Defined in

[rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L7)

___

### last\_restart

• **last\_restart**: `string`

Relative time of the last restart

#### Defined in

[rest/v2/app.ts:135](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L135)

___

### memory

• **memory**: `string`

RAM usage

#### Defined in

[rest/v2/app.ts:139](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L139)

___

### netIO

• **netIO**: [`ApiNetIO`](discloudapp_api_types.ApiNetIO.md)

Internet usage

#### Defined in

[rest/v2/app.ts:143](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L143)

___

### ssd

• **ssd**: `string`

Storage space

#### Defined in

[rest/v2/app.ts:147](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L147)

___

### startedAt

• **startedAt**: `string`

Date of your application has started

#### Defined in

[rest/v2/app.ts:151](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L151)
