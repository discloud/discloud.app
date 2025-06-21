[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTGetApiAppTeamResult

# Interface: RESTGetApiAppTeamResult

Defined in: [rest/v2/app.ts:315](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L315)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`RESTApiBaseResult`](RESTApiBaseResult.md), `"message"`\>

## Properties

### message?

> `optional` **message**: `string`

Defined in: [rest/v2/app.ts:319](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L319)

API message response

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

`Omit.status`

***

### team

> **team**: [`ApiAppTeam`](ApiAppTeam.md)[]

Defined in: [rest/v2/app.ts:323](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L323)

App of your team
