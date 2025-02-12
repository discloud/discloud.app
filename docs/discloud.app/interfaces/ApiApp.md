[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiApp

# Interface: ApiApp

Defined in: [packages/api-types/rest/v2/app.ts:10](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L10)

## Extends

- [`BaseApiApp`](BaseApiApp.md)

## Properties

### autoDeployGit

> **autoDeployGit**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:50](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L50)

If your app has auto deploy on github enabled

***

### autoRestart

> **autoRestart**: `boolean`

Defined in: [packages/api-types/rest/v2/app.ts:54](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L54)

If your app has auto-restart enabled

***

### avatarURL

> **avatarURL**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:46](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L46)

Your app's avatar url

***

### exitCode

> **exitCode**: `number`

Defined in: [packages/api-types/rest/v2/app.ts:34](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L34)

Your app's exit code on stopping

***

### id

> **id**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L7)

Your app id

#### Inherited from

[`BaseApiApp`](BaseApiApp.md).[`id`](BaseApiApp.md#id)

***

### lang

> **lang**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:38](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L38)

Your application's programming language

***

### mainFile

> **mainFile**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:30](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L30)

The main file path

***

### mods

> **mods**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:42](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L42)

The IDs of your application's moderators

***

### name

> **name**: `string`

Defined in: [packages/api-types/rest/v2/app.ts:14](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L14)

Your application's name

***

### online

> **online**: `boolean`

Defined in: [packages/api-types/rest/v2/app.ts:18](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L18)

If your application is online

***

### ram

> **ram**: `number`

Defined in: [packages/api-types/rest/v2/app.ts:26](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L26)

The RAM quantity for your application

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [packages/api-types/rest/v2/app.ts:22](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L22)

If your application was stopped due to lack of RAM

***

### type

> **type**: `number`

Defined in: [packages/api-types/rest/v2/app.ts:58](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L58)

Your app's type
