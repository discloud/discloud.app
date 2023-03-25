[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

[discloud.app](../modules/discloud_app.md).ApiAppManagerStartedAll

## Hierarchy

- [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )<[`ApiAppManager`](discloud_app.ApiAppManager.md), ``"alreadyOffline"``\>

  ↳ **`ApiAppManagerStartedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloud_app.ApiAppManagerStartedAll.md#alreadyinprocess)
- [alreadyOnline](discloud_app.ApiAppManagerStartedAll.md#alreadyonline)
- [started](discloud_app.ApiAppManagerStartedAll.md#started)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:79

___

### alreadyOnline

• **alreadyOnline**: `string`[]

Which of your applications are currently `online`

#### Inherited from

Omit.alreadyOnline

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:87

___

### started

• **started**: `string`[]

Which of your applications have been `started`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:108
