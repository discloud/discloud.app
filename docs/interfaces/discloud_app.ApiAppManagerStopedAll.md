[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppManagerStopedAll

# Interface: ApiAppManagerStopedAll

[discloud.app](../modules/discloud_app.md).ApiAppManagerStopedAll

## Hierarchy

- [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )<[`ApiAppManager`](discloud_app.ApiAppManager.md), ``"alreadyOnline"``\>

  ↳ **`ApiAppManagerStopedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloud_app.ApiAppManagerStopedAll.md#alreadyinprocess)
- [alreadyOffline](discloud_app.ApiAppManagerStopedAll.md#alreadyoffline)
- [stoped](discloud_app.ApiAppManagerStopedAll.md#stoped)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:79

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:83

___

### stoped

• **stoped**: `string`[]

Which of your applications have been `stoped`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:115
