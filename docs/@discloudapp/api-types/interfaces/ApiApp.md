[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiApp

# Interface: ApiApp

Defined in: [rest/v2/app.ts:8](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L8)

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### addedTimestamp

> **addedTimestamp**: `number`

Defined in: [rest/v2/app.ts:34](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L34)

When your app was uploaded

***

### apts

> **apts**: `string`[]

Defined in: [rest/v2/app.ts:32](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L32)

Your app's apts

***

### autoRestart

> **autoRestart**: `boolean`

Defined in: [rest/v2/app.ts:28](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L28)

If your app has auto-restart enabled

***

### avatarURL

> **avatarURL**: `string`

Defined in: [rest/v2/app.ts:26](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L26)

Your app's avatar url

***

### exitCode

> **exitCode**: `number`

Defined in: [rest/v2/app.ts:20](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L20)

Your app's exit code on stopping

***

### id

> **id**: `string`

Defined in: [rest/v2/app.ts:5](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L5)

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

***

### lang

> **lang**: `string`

Defined in: [rest/v2/app.ts:22](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L22)

Your application's programming language

***

### mainFile

> **mainFile**: `string`

Defined in: [rest/v2/app.ts:18](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L18)

The main file path

***

### mods

> **mods**: `string`[]

Defined in: [rest/v2/app.ts:24](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L24)

The IDs of your application's moderators

***

### name

> **name**: `string`

Defined in: [rest/v2/app.ts:10](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L10)

Your application's name

***

### online

> **online**: `boolean`

Defined in: [rest/v2/app.ts:12](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L12)

If your application is online

***

### ram

> **ram**: `number`

Defined in: [rest/v2/app.ts:16](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L16)

The RAM quantity for your application

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [rest/v2/app.ts:14](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L14)

If your application was stopped due to lack of RAM

***

### type

> **type**: `number`

Defined in: [rest/v2/app.ts:30](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/app.ts#L30)

Your app's type
