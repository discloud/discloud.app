[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiAppManagerStartedAll

## Hierarchy

- `Omit`<[`ApiAppManager`](discloudapp_api_types.ApiAppManager.md), ``"alreadyOffline"``\>

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

[rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/app.ts#L83)

___

### alreadyOnline

• **alreadyOnline**: `string`[]

Which of your applications are currently `online`

#### Inherited from

Omit.alreadyOnline

#### Defined in

[rest/v2/app.ts:91](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/app.ts#L91)

___

### started

• **started**: `string`[]

Which of your applications have been `started`

#### Defined in

[rest/v2/app.ts:112](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/app.ts#L112)
