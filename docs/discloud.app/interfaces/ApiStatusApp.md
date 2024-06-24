[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiStatusApp

# Interface: ApiStatusApp

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### container

> **container**: `string`

Status of your application
- It can be `Online` or `Offline` for example

#### Defined in

[packages/api-types/rest/v2/app.ts:131](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L131)

***

### cpu

> **cpu**: `string`

CPU usage as percentage

#### Defined in

[packages/api-types/rest/v2/app.ts:135](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L135)

***

### id

> **id**: `string`

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

#### Defined in

[packages/api-types/rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L7)

***

### last\_restart

> **last\_restart**: `string`

Relative time of the last restart

#### Defined in

[packages/api-types/rest/v2/app.ts:139](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L139)

***

### memory

> **memory**: `string`

RAM usage

#### Defined in

[packages/api-types/rest/v2/app.ts:143](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L143)

***

### netIO

> **netIO**: [`ApiNetIO`](ApiNetIO.md)

Internet usage

#### Defined in

[packages/api-types/rest/v2/app.ts:147](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L147)

***

### ssd

> **ssd**: `string`

Storage space

#### Defined in

[packages/api-types/rest/v2/app.ts:151](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L151)

***

### startedAt

> **startedAt**: `string`

Date of your application has started

#### Defined in

[packages/api-types/rest/v2/app.ts:155](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L155)
