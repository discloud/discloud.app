[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiStatusApp

# Interface: ApiStatusApp

[discloud.app](../modules/discloud_app.md).ApiStatusApp

## Hierarchy

- [`BaseApiApp`](discloud_app.BaseApiApp.md)

  ↳ **`ApiStatusApp`**

## Table of contents

### Properties

- [container](discloud_app.ApiStatusApp.md#container)
- [cpu](discloud_app.ApiStatusApp.md#cpu)
- [id](discloud_app.ApiStatusApp.md#id)
- [last\_restart](discloud_app.ApiStatusApp.md#last_restart)
- [memory](discloud_app.ApiStatusApp.md#memory)
- [netIO](discloud_app.ApiStatusApp.md#netio)
- [ssd](discloud_app.ApiStatusApp.md#ssd)
- [startedAt](discloud_app.ApiStatusApp.md#startedat)

## Properties

### container

• **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:127

___

### cpu

• **cpu**: `string`

CPU usage as percentage

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:131

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApiApp](discloud_app.BaseApiApp.md).[id](discloud_app.BaseApiApp.md#id)

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:7

___

### last\_restart

• **last\_restart**: `string`

Relative time of the last restart

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:135

___

### memory

• **memory**: `string`

RAM usage

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:139

___

### netIO

• **netIO**: [`ApiNetIO`](discloud_app.ApiNetIO.md)

Internet usage

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:143

___

### ssd

• **ssd**: `string`

Storage space

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:147

___

### startedAt

• **startedAt**: `string`

Date of your application has started

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:151
