[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTPutApiAppAllRestartResult

# Interface: RESTPutApiAppAllRestartResult

Defined in: [packages/api-types/rest/v2/app.ts:259](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L259)

## Extends

- [`RESTApiAppManagerResult`](RESTApiAppManagerResult.md)

## Properties

### apps

> **apps**: [`ApiAppManagerRestartedAll`](ApiAppManagerRestartedAll.md)

Defined in: [packages/api-types/rest/v2/app.ts:260](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L260)

#### Overrides

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`apps`](RESTApiAppManagerResult.md#apps)

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`message`](RESTApiAppManagerResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`status`](RESTApiAppManagerResult.md#status)
