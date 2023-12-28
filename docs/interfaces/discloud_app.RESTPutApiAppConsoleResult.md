[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPutApiAppConsoleResult

# Interface: RESTPutApiAppConsoleResult

[discloud.app](../modules/discloud_app.md).RESTPutApiAppConsoleResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppConsoleResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTPutApiAppConsoleResult.md#apps)
- [message](discloud_app.RESTPutApiAppConsoleResult.md#message)
- [status](discloud_app.RESTPutApiAppConsoleResult.md#status)

## Properties

### apps

• **apps**: [`ApiConsoleApp`](discloud_app.ApiConsoleApp.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:307](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L307)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L5)
