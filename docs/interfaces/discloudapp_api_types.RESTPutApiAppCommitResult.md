[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPutApiAppCommitResult

# Interface: RESTPutApiAppCommitResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPutApiAppCommitResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppCommitResult`**

## Table of contents

### Properties

- [logs](discloudapp_api_types.RESTPutApiAppCommitResult.md#logs)
- [message](discloudapp_api_types.RESTPutApiAppCommitResult.md#message)
- [status](discloudapp_api_types.RESTPutApiAppCommitResult.md#status)
- [statusCode](discloudapp_api_types.RESTPutApiAppCommitResult.md#statuscode)

## Properties

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[rest/v2/app.ts:293](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/app.ts#L293)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/base.ts#L5)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[rest/v2/app.ts:289](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/app.ts#L289)
