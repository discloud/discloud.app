[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPutApiAppConsoleResult

# Interface: RESTPutApiAppConsoleResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPutApiAppConsoleResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppConsoleResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTPutApiAppConsoleResult.md#apps)
- [message](discloudapp_api_types.RESTPutApiAppConsoleResult.md#message)
- [status](discloudapp_api_types.RESTPutApiAppConsoleResult.md#status)

## Properties

### apps

• **apps**: [`ApiConsoleApp`](discloudapp_api_types.ApiConsoleApp.md)

#### Defined in

[rest/v2/app.ts:307](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L307)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L5)
