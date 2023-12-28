[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiTeamResult

# Interface: RESTGetApiTeamResult

[discloud.app](../modules/discloud_app.md).RESTGetApiTeamResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiTeamResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTGetApiTeamResult.md#apps)
- [message](discloud_app.RESTGetApiTeamResult.md#message)
- [status](discloud_app.RESTGetApiTeamResult.md#status)

## Properties

### apps

• **apps**: [`ApiTeamApps`](discloud_app.ApiTeamApps.md)[]

#### Defined in

[packages/api-types/rest/v2/team.ts:4](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/team.ts#L4)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/base.ts#L5)
