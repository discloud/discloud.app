[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTPutApiAppAllRestartResult

# Interface: RESTPutApiAppAllRestartResult

Defined in: [rest/v2/app.ts:266](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/app.ts#L266)

## Extends

- [`RESTApiAppManagerResult`](RESTApiAppManagerResult.md)

## Properties

### apps

> **apps**: [`ApiAppManagerRestartedAll`](ApiAppManagerRestartedAll.md)

Defined in: [rest/v2/app.ts:267](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/app.ts#L267)

#### Overrides

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`apps`](RESTApiAppManagerResult.md#apps)

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`message`](RESTApiAppManagerResult.md#message)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`status`](RESTApiAppManagerResult.md#status)
