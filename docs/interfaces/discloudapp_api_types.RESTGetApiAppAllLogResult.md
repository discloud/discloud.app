[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiAppAllLogResult

# Interface: RESTGetApiAppAllLogResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiAppAllLogResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppAllLogResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTGetApiAppAllLogResult.md#apps)
- [message](discloudapp_api_types.RESTGetApiAppAllLogResult.md#message)
- [status](discloudapp_api_types.RESTGetApiAppAllLogResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppLog`](discloudapp_api_types.ApiAppLog.md)[]

Logs of all of your applications

#### Defined in

[rest/v2/app.ts:205](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/app.ts#L205)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/base.ts#L5)
