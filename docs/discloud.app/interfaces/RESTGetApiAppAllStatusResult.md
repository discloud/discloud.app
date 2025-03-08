[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTGetApiAppAllStatusResult

# Interface: RESTGetApiAppAllStatusResult

Defined in: [packages/api-types/rest/v2/app.ts:223](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L223)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### apps

> **apps**: [`ApiStatusApp`](ApiStatusApp.md)[]

Defined in: [packages/api-types/rest/v2/app.ts:227](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L227)

Status of all of your applications

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)
