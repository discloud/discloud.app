[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTApiAppManagerResult

# Interface: RESTApiAppManagerResult

Defined in: [packages/api-types/rest/v2/app.ts:251](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L251)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Extended by

- [`RESTDeleteApiAppAllDeleteResult`](RESTDeleteApiAppAllDeleteResult.md)
- [`RESTPutApiAppAllRestartResult`](RESTPutApiAppAllRestartResult.md)
- [`RESTPutApiAppAllStartResult`](RESTPutApiAppAllStartResult.md)
- [`RESTPutApiAppAllStopResult`](RESTPutApiAppAllStopResult.md)

## Properties

### apps

> **apps**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiAppManager`](ApiAppManager.md)\>

Defined in: [packages/api-types/rest/v2/app.ts:252](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L252)

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)
