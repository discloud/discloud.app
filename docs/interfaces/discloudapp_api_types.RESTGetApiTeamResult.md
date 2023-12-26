[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiTeamResult

# Interface: RESTGetApiTeamResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiTeamResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiTeamResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTGetApiTeamResult.md#apps)
- [message](discloudapp_api_types.RESTGetApiTeamResult.md#message)
- [status](discloudapp_api_types.RESTGetApiTeamResult.md#status)

## Properties

### apps

• **apps**: [`ApiTeamApps`](discloudapp_api_types.ApiTeamApps.md)[]

#### Defined in

[rest/v2/team.ts:4](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/team.ts#L4)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/base.ts#L5)
