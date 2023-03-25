[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPostApiUploadResult

# Interface: RESTPostApiUploadResult

[discloud.app](../modules/discloud_app.md).RESTPostApiUploadResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPostApiUploadResult`**

## Table of contents

### Properties

- [app](discloud_app.RESTPostApiUploadResult.md#app)
- [logs](discloud_app.RESTPostApiUploadResult.md#logs)
- [message](discloud_app.RESTPostApiUploadResult.md#message)
- [status](discloud_app.RESTPostApiUploadResult.md#status)
- [statusCode](discloud_app.RESTPostApiUploadResult.md#statuscode)

## Properties

### app

• **app**: [`ApiUploadApp`](discloud_app.ApiUploadApp.md)

Your uploaded app

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/upload.ts:11

___

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/upload.ts:15

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/upload.ts:7
