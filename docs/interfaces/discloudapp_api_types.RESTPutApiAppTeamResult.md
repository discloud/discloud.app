[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPutApiAppTeamResult

# Interface: RESTPutApiAppTeamResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPutApiAppTeamResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppTeamResult`**

## Table of contents

### Properties

- [app](discloudapp_api_types.RESTPutApiAppTeamResult.md#app)
- [message](discloudapp_api_types.RESTPutApiAppTeamResult.md#message)
- [status](discloudapp_api_types.RESTPutApiAppTeamResult.md#status)

## Properties

### app

• **app**: [`ApiAppTeamManager`](discloudapp_api_types.ApiAppTeamManager.md)

#### Defined in

[rest/v2/app.ts:346](https://github.com/discloud/discloud.app/blob/967320a/packages/api-types/rest/v2/app.ts#L346)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/967320a/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/967320a/packages/api-types/rest/v2/base.ts#L5)
