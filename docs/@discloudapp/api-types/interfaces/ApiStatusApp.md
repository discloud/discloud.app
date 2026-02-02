[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiStatusApp

# Interface: ApiStatusApp

Defined in: [rest/v2/app.ts:84](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L84)

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### container

> **container**: `string`

Defined in: [rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L87)

Status of your application * - It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [rest/v2/app.ts:89](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L89)

CPU usage as percentage

***

### id

> **id**: `string`

Defined in: [rest/v2/app.ts:5](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L5)

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

***

### last\_restart

> **last\_restart**: `string`

Defined in: [rest/v2/app.ts:91](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L91)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [rest/v2/app.ts:93](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L93)

RAM usage

***

### netIO

> **netIO**: [`ApiNetIO`](ApiNetIO.md)

Defined in: [rest/v2/app.ts:95](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L95)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [rest/v2/app.ts:97](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L97)

Storage space

***

### startedAt

> **startedAt**: `string`

Defined in: [rest/v2/app.ts:99](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L99)

Date of your application has started
