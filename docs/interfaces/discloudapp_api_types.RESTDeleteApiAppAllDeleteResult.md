[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTDeleteApiAppAllDeleteResult

# Interface: RESTDeleteApiAppAllDeleteResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTDeleteApiAppAllDeleteResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloudapp_api_types.RESTApiAppManagerResult.md)

  ↳ **`RESTDeleteApiAppAllDeleteResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTDeleteApiAppAllDeleteResult.md#apps)
- [message](discloudapp_api_types.RESTDeleteApiAppAllDeleteResult.md#message)
- [status](discloudapp_api_types.RESTDeleteApiAppAllDeleteResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerRemovedAll`](discloudapp_api_types.ApiAppManagerRemovedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[apps](discloudapp_api_types.RESTApiAppManagerResult.md#apps)

#### Defined in

[packages/api-types/rest/v2/app.ts:249](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L249)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[message](discloudapp_api_types.RESTApiAppManagerResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[status](discloudapp_api_types.RESTApiAppManagerResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L5)