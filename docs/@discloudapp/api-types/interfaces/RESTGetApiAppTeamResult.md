[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTGetApiAppTeamResult

# Interface: RESTGetApiAppTeamResult

Defined in: [rest/v2/app.ts:227](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L227)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`RESTApiBaseResult`](RESTApiBaseResult.md), `"message"`\>

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [rest/v2/app.ts:229](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L229)

API message response

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

***

### team

> **team**: [`ApiAppTeam`](ApiAppTeam.md)[]

Defined in: [rest/v2/app.ts:231](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L231)

App of your team
