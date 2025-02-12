[**@discloudapp/api-types**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTApiAppManagerResult

# Interface: RESTApiAppManagerResult

Defined in: [rest/v2/app.ts:257](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L257)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Extended by

- [`RESTDeleteApiAppAllDeleteResult`](RESTDeleteApiAppAllDeleteResult.md)
- [`RESTPutApiAppAllRestartResult`](RESTPutApiAppAllRestartResult.md)
- [`RESTPutApiAppAllStartResult`](RESTPutApiAppAllStartResult.md)
- [`RESTPutApiAppAllStopResult`](RESTPutApiAppAllStopResult.md)

## Properties

### apps

> **apps**: `Partial`\<[`ApiAppManager`](ApiAppManager.md)\>

Defined in: [rest/v2/app.ts:258](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L258)

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)
