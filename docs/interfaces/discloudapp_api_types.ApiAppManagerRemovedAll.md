[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiAppManagerRemovedAll

# Interface: ApiAppManagerRemovedAll

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiAppManagerRemovedAll

## Hierarchy

- `Omit`\<[`ApiAppManager`](discloudapp_api_types.ApiAppManager.md), ``"alreadyOnline"``\>

  ↳ **`ApiAppManagerRemovedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloudapp_api_types.ApiAppManagerRemovedAll.md#alreadyinprocess)
- [alreadyOffline](discloudapp_api_types.ApiAppManagerRemovedAll.md#alreadyoffline)
- [removealled](discloudapp_api_types.ApiAppManagerRemovedAll.md#removealled)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

[rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L83)

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

[rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L87)

___

### removealled

• **removealled**: `string`[]

Which of your applications have been `removed`

#### Defined in

[rest/v2/app.ts:98](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L98)
