[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTGetApiAppTeamResult

# Interface: RESTGetApiAppTeamResult

Defined in: [packages/api-types/rest/v2/app.ts:315](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L315)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`RESTApiBaseResult`](RESTApiBaseResult.md), `"message"`\>

## Properties

### message?

> `optional` **message**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:319](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L319)

API message response

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

`Omit.status`

***

### team

> **team**: [`ApiAppTeam`](ApiAppTeam.md)[]

Defined in: [packages/api-types/rest/v2/app.ts:323](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L323)

App of your team
