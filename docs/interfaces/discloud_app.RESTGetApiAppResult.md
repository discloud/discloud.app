[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiAppResult

# Interface: RESTGetApiAppResult

[discloud.app](../modules/discloud_app.md).RESTGetApiAppResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTGetApiAppResult.md#apps)
- [message](discloud_app.RESTGetApiAppResult.md#message)
- [status](discloud_app.RESTGetApiAppResult.md#status)

## Properties

### apps

• **apps**: [`ApiApp`](discloud_app.ApiApp.md)

Your application

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:229

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/base.ts:10

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/base.ts:5
