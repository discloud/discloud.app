[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiStatusApp

# Interface: ApiStatusApp

Defined in: [packages/api-types/rest/v2/app.ts:126](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L126)

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### container

> **container**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:131](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L131)

Status of your application
- It can be `Online` or `Offline` for example

***

### cpu

> **cpu**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:135](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L135)

CPU usage as percentage

***

### id

> **id**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L7)

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

***

### last\_restart

> **last\_restart**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:139](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L139)

Relative time of the last restart

***

### memory

> **memory**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:143](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L143)

RAM usage

***

### netIO

> **netIO**: [`ApiNetIO`](ApiNetIO.md)

Defined in: [packages/api-types/rest/v2/app.ts:147](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L147)

Internet usage

***

### ssd

> **ssd**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:151](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L151)

Storage space

***

### startedAt

> **startedAt**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:155](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L155)

Date of your application has started
