[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTPutApiAppAllStartResult

# Interface: RESTPutApiAppAllStartResult

Defined in: [rest/v2/app.ts:185](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L185)

## Extends

- [`RESTApiAppManagerResult`](RESTApiAppManagerResult.md)

## Properties

### apps

> **apps**: [`ApiAppManagerStartedAll`](ApiAppManagerStartedAll.md)

Defined in: [rest/v2/app.ts:186](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L186)

#### Overrides

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`apps`](RESTApiAppManagerResult.md#apps)

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`message`](RESTApiAppManagerResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`status`](RESTApiAppManagerResult.md#status)
