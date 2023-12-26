[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPutApiAppCommitResult

# Interface: RESTPutApiAppCommitResult

[discloud.app](../modules/discloud_app.md).RESTPutApiAppCommitResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppCommitResult`**

## Table of contents

### Properties

- [logs](discloud_app.RESTPutApiAppCommitResult.md#logs)
- [message](discloud_app.RESTPutApiAppCommitResult.md#message)
- [status](discloud_app.RESTPutApiAppCommitResult.md#status)
- [statusCode](discloud_app.RESTPutApiAppCommitResult.md#statuscode)

## Properties

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:303

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

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:299
