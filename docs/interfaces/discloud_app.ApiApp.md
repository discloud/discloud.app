[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiApp

# Interface: ApiApp

[discloud.app](../modules/discloud_app.md).ApiApp

## Hierarchy

- [`BaseApiApp`](discloud_app.BaseApiApp.md)

  ↳ **`ApiApp`**

## Table of contents

### Properties

- [autoDeployGit](discloud_app.ApiApp.md#autodeploygit)
- [autoRestart](discloud_app.ApiApp.md#autorestart)
- [avatarURL](discloud_app.ApiApp.md#avatarurl)
- [exitCode](discloud_app.ApiApp.md#exitcode)
- [id](discloud_app.ApiApp.md#id)
- [lang](discloud_app.ApiApp.md#lang)
- [mainFile](discloud_app.ApiApp.md#mainfile)
- [mods](discloud_app.ApiApp.md#mods)
- [name](discloud_app.ApiApp.md#name)
- [online](discloud_app.ApiApp.md#online)
- [ram](discloud_app.ApiApp.md#ram)
- [ramKilled](discloud_app.ApiApp.md#ramkilled)

## Properties

### autoDeployGit

• **autoDeployGit**: `string`

If your app has auto deploy on github enabled

#### Defined in

[packages/api-types/rest/v2/app.ts:50](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L50)

___

### autoRestart

• **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[packages/api-types/rest/v2/app.ts:54](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L54)

___

### avatarURL

• **avatarURL**: `string`

Your app's avatar url

#### Defined in

[packages/api-types/rest/v2/app.ts:46](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L46)

___

### exitCode

• **exitCode**: `number`

Your app's exit code on stopping

#### Defined in

[packages/api-types/rest/v2/app.ts:34](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L34)

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApiApp](discloud_app.BaseApiApp.md).[id](discloud_app.BaseApiApp.md#id)

#### Defined in

[packages/api-types/rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L7)

___

### lang

• **lang**: `string`

Your application's programming language

#### Defined in

[packages/api-types/rest/v2/app.ts:38](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L38)

___

### mainFile

• **mainFile**: `string`

The main file path

#### Defined in

[packages/api-types/rest/v2/app.ts:30](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L30)

___

### mods

• **mods**: `string`[]

The IDs of your application's moderators

#### Defined in

[packages/api-types/rest/v2/app.ts:42](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L42)

___

### name

• **name**: `string`

Your application's name

#### Defined in

[packages/api-types/rest/v2/app.ts:14](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L14)

___

### online

• **online**: `boolean`

If your application is online

#### Defined in

[packages/api-types/rest/v2/app.ts:18](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L18)

___

### ram

• **ram**: `number`

The RAM quantity for your application

#### Defined in

[packages/api-types/rest/v2/app.ts:26](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L26)

___

### ramKilled

• **ramKilled**: `boolean`

If your application was stopped due to lack of RAM

#### Defined in

[packages/api-types/rest/v2/app.ts:22](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L22)
