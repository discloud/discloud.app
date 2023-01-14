[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPutApiAppTeamResult

# Interface: RESTPutApiAppTeamResult

[discloud.app](../modules/discloud_app.md).RESTPutApiAppTeamResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppTeamResult`**

## Table of contents

### Properties

- [app](discloud_app.RESTPutApiAppTeamResult.md#app)
- [message](discloud_app.RESTPutApiAppTeamResult.md#message)
- [status](discloud_app.RESTPutApiAppTeamResult.md#status)

## Properties

### app

• **app**: [`ApiAppTeamManager`](discloud_app.ApiAppTeamManager.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:333](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L333)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L5)
