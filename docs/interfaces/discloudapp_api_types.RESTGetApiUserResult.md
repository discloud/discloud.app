[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiUserResult

# Interface: RESTGetApiUserResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiUserResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiUserResult`**

## Table of contents

### Properties

- [message](discloudapp_api_types.RESTGetApiUserResult.md#message)
- [status](discloudapp_api_types.RESTGetApiUserResult.md#status)
- [user](discloudapp_api_types.RESTGetApiUserResult.md#user)

## Properties

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

___

### user

• **user**: [`ApiUser`](discloudapp_api_types.ApiUser.md)

The user

#### Defined in

[rest/v2/user.ts:7](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/user.ts#L7)
