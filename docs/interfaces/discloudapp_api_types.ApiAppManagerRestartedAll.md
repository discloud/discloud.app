[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiAppManagerRestartedAll

# Interface: ApiAppManagerRestartedAll

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiAppManagerRestartedAll

## Hierarchy

- `Omit`<[`ApiAppManager`](discloudapp_api_types.ApiAppManager.md), ``"alreadyOnline"``\>

  ↳ **`ApiAppManagerRestartedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloudapp_api_types.ApiAppManagerRestartedAll.md#alreadyinprocess)
- [alreadyOffline](discloudapp_api_types.ApiAppManagerRestartedAll.md#alreadyoffline)
- [restarted](discloudapp_api_types.ApiAppManagerRestartedAll.md#restarted)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

[rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/app.ts#L83)

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

[rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/app.ts#L87)

___

### restarted

• **restarted**: `string`[]

Which of your applications have been `restarted`

#### Defined in

[rest/v2/app.ts:105](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/app.ts#L105)
