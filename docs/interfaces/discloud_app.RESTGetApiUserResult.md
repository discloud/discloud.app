[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiUserResult

# Interface: RESTGetApiUserResult

[discloud.app](../modules/discloud_app.md).RESTGetApiUserResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiUserResult`**

## Table of contents

### Properties

- [message](discloud_app.RESTGetApiUserResult.md#message)
- [status](discloud_app.RESTGetApiUserResult.md#status)
- [user](discloud_app.RESTGetApiUserResult.md#user)

## Properties

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L5)

___

### user

• **user**: [`ApiUser`](discloud_app.ApiUser.md)

The user

#### Defined in

[packages/api-types/rest/v2/user.ts:7](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/user.ts#L7)
