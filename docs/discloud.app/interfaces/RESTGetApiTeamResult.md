[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTGetApiTeamResult

# Interface: RESTGetApiTeamResult

Defined in: [packages/api-types/rest/v2/team.ts:3](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/team.ts#L3)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### apps

> **apps**: [`ApiTeamApps`](ApiTeamApps.md)[]

Defined in: [packages/api-types/rest/v2/team.ts:4](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/team.ts#L4)

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)
