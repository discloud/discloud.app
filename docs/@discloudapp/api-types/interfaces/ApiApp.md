[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiApp

# Interface: ApiApp

Defined in: [rest/v2/app.ts:10](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L10)

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### autoDeployGit

> **autoDeployGit**: `string`

Defined in: [rest/v2/app.ts:50](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L50)

If your app has auto deploy on github enabled

***

### autoRestart

> **autoRestart**: `boolean`

Defined in: [rest/v2/app.ts:54](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L54)

If your app has auto-restart enabled

***

### avatarURL

> **avatarURL**: `string`

Defined in: [rest/v2/app.ts:46](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L46)

Your app's avatar url

***

### exitCode

> **exitCode**: `number`

Defined in: [rest/v2/app.ts:34](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L34)

Your app's exit code on stopping

***

### id

> **id**: `string`

Defined in: [rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L7)

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

***

### lang

> **lang**: `string`

Defined in: [rest/v2/app.ts:38](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L38)

Your application's programming language

***

### mainFile

> **mainFile**: `string`

Defined in: [rest/v2/app.ts:30](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L30)

The main file path

***

### mods

> **mods**: `string`[]

Defined in: [rest/v2/app.ts:42](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L42)

The IDs of your application's moderators

***

### name

> **name**: `string`

Defined in: [rest/v2/app.ts:14](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L14)

Your application's name

***

### online

> **online**: `boolean`

Defined in: [rest/v2/app.ts:18](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L18)

If your application is online

***

### ram

> **ram**: `number`

Defined in: [rest/v2/app.ts:26](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L26)

The RAM quantity for your application

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [rest/v2/app.ts:22](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L22)

If your application was stopped due to lack of RAM

***

### type

> **type**: `number`

Defined in: [rest/v2/app.ts:58](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L58)

Your app's type
