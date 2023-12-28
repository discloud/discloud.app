[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiApp

# Interface: ApiApp

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiApp

## Hierarchy

- [`BaseApiApp`](discloudapp_api_types.BaseApiApp.md)

  ↳ **`ApiApp`**

## Table of contents

### Properties

- [autoDeployGit](discloudapp_api_types.ApiApp.md#autodeploygit)
- [autoRestart](discloudapp_api_types.ApiApp.md#autorestart)
- [avatarURL](discloudapp_api_types.ApiApp.md#avatarurl)
- [exitCode](discloudapp_api_types.ApiApp.md#exitcode)
- [id](discloudapp_api_types.ApiApp.md#id)
- [lang](discloudapp_api_types.ApiApp.md#lang)
- [mainFile](discloudapp_api_types.ApiApp.md#mainfile)
- [mods](discloudapp_api_types.ApiApp.md#mods)
- [name](discloudapp_api_types.ApiApp.md#name)
- [online](discloudapp_api_types.ApiApp.md#online)
- [ram](discloudapp_api_types.ApiApp.md#ram)
- [ramKilled](discloudapp_api_types.ApiApp.md#ramkilled)

## Properties

### autoDeployGit

• **autoDeployGit**: `string`

If your app has auto deploy on github enabled

#### Defined in

[rest/v2/app.ts:50](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L50)

___

### autoRestart

• **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

[rest/v2/app.ts:54](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L54)

___

### avatarURL

• **avatarURL**: `string`

Your app's avatar url

#### Defined in

[rest/v2/app.ts:46](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L46)

___

### exitCode

• **exitCode**: `number`

Your app's exit code on stopping

#### Defined in

[rest/v2/app.ts:34](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L34)

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApiApp](discloudapp_api_types.BaseApiApp.md).[id](discloudapp_api_types.BaseApiApp.md#id)

#### Defined in

[rest/v2/app.ts:7](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L7)

___

### lang

• **lang**: `string`

Your application's programming language

#### Defined in

[rest/v2/app.ts:38](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L38)

___

### mainFile

• **mainFile**: `string`

The main file path

#### Defined in

[rest/v2/app.ts:30](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L30)

___

### mods

• **mods**: `string`[]

The IDs of your application's moderators

#### Defined in

[rest/v2/app.ts:42](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L42)

___

### name

• **name**: `string`

Your application's name

#### Defined in

[rest/v2/app.ts:14](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L14)

___

### online

• **online**: `boolean`

If your application is online

#### Defined in

[rest/v2/app.ts:18](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L18)

___

### ram

• **ram**: `number`

The RAM quantity for your application

#### Defined in

[rest/v2/app.ts:26](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L26)

___

### ramKilled

• **ramKilled**: `boolean`

If your application was stopped due to lack of RAM

#### Defined in

[rest/v2/app.ts:22](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L22)
