[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTPutApiAppConsoleResult

# Interface: RESTPutApiAppConsoleResult

Defined in: [rest/v2/app.ts:304](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L304)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### apps

> **apps**: [`ApiConsoleApp`](ApiConsoleApp.md)

Defined in: [rest/v2/app.ts:305](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L305)

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)
