[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiAppManagerStopedAll

# Interface: ApiAppManagerStopedAll

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiAppManagerStopedAll

## Hierarchy

- `Omit`<[`ApiAppManager`](discloudapp_api_types.ApiAppManager.md), ``"alreadyOnline"``\>

  ↳ **`ApiAppManagerStopedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloudapp_api_types.ApiAppManagerStopedAll.md#alreadyinprocess)
- [alreadyOffline](discloudapp_api_types.ApiAppManagerStopedAll.md#alreadyoffline)
- [stoped](discloudapp_api_types.ApiAppManagerStopedAll.md#stoped)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

[rest/v2/app.ts:79](https://github.com/discloud/discloud.app/blob/a142e7d/packages/api-types/rest/v2/app.ts#L79)

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

[rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/a142e7d/packages/api-types/rest/v2/app.ts#L83)

___

### stoped

• **stoped**: `string`[]

Which of your applications have been `stoped`

#### Defined in

[rest/v2/app.ts:115](https://github.com/discloud/discloud.app/blob/a142e7d/packages/api-types/rest/v2/app.ts#L115)
