[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTPutApiAppAllStartResult

# Interface: RESTPutApiAppAllStartResult

Defined in: [packages/api-types/rest/v2/app.ts:263](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L263)

## Extends

- [`RESTApiAppManagerResult`](RESTApiAppManagerResult.md)

## Properties

### apps

> **apps**: [`ApiAppManagerStartedAll`](ApiAppManagerStartedAll.md)

Defined in: [packages/api-types/rest/v2/app.ts:264](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L264)

#### Overrides

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`apps`](RESTApiAppManagerResult.md#apps)

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`message`](RESTApiAppManagerResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`status`](RESTApiAppManagerResult.md#status)
