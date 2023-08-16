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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:50

___

### autoRestart

• **autoRestart**: `boolean`

If your app has auto-restart enabled

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:54

___

### avatarURL

• **avatarURL**: `string`

Your app's avatar url

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:46

___

### exitCode

• **exitCode**: `number`

Your app's exit code on stopping

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:34

___

### id

• **id**: `string`

Your app id

#### Inherited from

[BaseApiApp](discloud_app.BaseApiApp.md).[id](discloud_app.BaseApiApp.md#id)

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:7

___

### lang

• **lang**: `string`

Your application's programming language

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:38

___

### mainFile

• **mainFile**: `string`

The main file path

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:30

___

### mods

• **mods**: `string`[]

The IDs of your application's moderators

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:42

___

### name

• **name**: `string`

Your application's name

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:14

___

### online

• **online**: `boolean`

If your application is online

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:18

___

### ram

• **ram**: `number`

The RAM quantity for your application

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:26

___

### ramKilled

• **ramKilled**: `boolean`

If your application was stopped due to lack of RAM

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:22
