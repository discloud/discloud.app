[**@discloudapp/api-types**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiApp

# Interface: ApiApp

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### autoDeployGit

> **autoDeployGit**: `string`

If your app has auto deploy on github enabled

#### Defined in

[rest/v2/app.ts:50](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L50)

***

### autoRestart

> **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[rest/v2/app.ts:54](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L54)

***

### avatarURL

> **avatarURL**: `string`

Your app's avatar url

#### Defined in

[rest/v2/app.ts:46](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L46)

***

### exitCode

> **exitCode**: `number`

Your app's exit code on stopping

#### Defined in

[rest/v2/app.ts:34](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L34)

***

### id

> **id**: `string`

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

#### Defined in

[rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L7)

***

### lang

> **lang**: `string`

Your application's programming language

#### Defined in

[rest/v2/app.ts:38](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L38)

***

### mainFile

> **mainFile**: `string`

The main file path

#### Defined in

[rest/v2/app.ts:30](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L30)

***

### mods

> **mods**: `string`[]

The IDs of your application's moderators

#### Defined in

[rest/v2/app.ts:42](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L42)

***

### name

> **name**: `string`

Your application's name

#### Defined in

[rest/v2/app.ts:14](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L14)

***

### online

> **online**: `boolean`

If your application is online

#### Defined in

[rest/v2/app.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L18)

***

### ram

> **ram**: `number`

The RAM quantity for your application

#### Defined in

[rest/v2/app.ts:26](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L26)

***

### ramKilled

> **ramKilled**: `boolean`

If your application was stopped due to lack of RAM

#### Defined in

[rest/v2/app.ts:22](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L22)

***

### type

> **type**: `number`

Your app's type

#### Defined in

[rest/v2/app.ts:58](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L58)
