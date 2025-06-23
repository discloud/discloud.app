[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiStatusApp

# Interface: ApiStatusApp

Defined in: [rest/v2/app.ts:126](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L126)

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### container

> **container**: `string`

Defined in: [rest/v2/app.ts:131](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L131)

Status of your application
- It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [rest/v2/app.ts:135](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L135)

CPU usage as percentage

***

### id

> **id**: `string`

Defined in: [rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L7)

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

***

### last\_restart

> **last\_restart**: `string`

Defined in: [rest/v2/app.ts:139](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L139)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [rest/v2/app.ts:143](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L143)

RAM usage

***

### netIO

> **netIO**: [`ApiNetIO`](ApiNetIO.md)

Defined in: [rest/v2/app.ts:147](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L147)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [rest/v2/app.ts:151](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L151)

Storage space

***

### startedAt

> **startedAt**: `string`

Defined in: [rest/v2/app.ts:155](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/app.ts#L155)

Date of your application has started
