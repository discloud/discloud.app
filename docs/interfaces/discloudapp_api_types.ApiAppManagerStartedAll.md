[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiAppManagerStartedAll

## Hierarchy

- [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )<[`ApiAppManager`](discloudapp_api_types.ApiAppManager.md), ``"alreadyOffline"``\>

  ↳ **`ApiAppManagerStartedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloudapp_api_types.ApiAppManagerStartedAll.md#alreadyinprocess)
- [alreadyOnline](discloudapp_api_types.ApiAppManagerStartedAll.md#alreadyonline)
- [started](discloudapp_api_types.ApiAppManagerStartedAll.md#started)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

[packages/api-types/rest/v2/app.ts:79](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/app.ts#L79)

___

### alreadyOnline

• **alreadyOnline**: `string`[]

Which of your applications are currently `online`

#### Inherited from

Omit.alreadyOnline

#### Defined in

[packages/api-types/rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/app.ts#L87)

___

### started

• **started**: `string`[]

Which of your applications have been `started`

#### Defined in

[packages/api-types/rest/v2/app.ts:108](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/app.ts#L108)
