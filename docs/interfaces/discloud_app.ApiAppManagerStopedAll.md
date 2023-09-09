[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppManagerStopedAll

# Interface: ApiAppManagerStopedAll

[discloud.app](../modules/discloud_app.md).ApiAppManagerStopedAll

## Hierarchy

- `Omit`<[`ApiAppManager`](discloud_app.ApiAppManager.md), ``"alreadyOnline"``\>

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

[packages/api-types/rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/app.ts#L83)

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

[packages/api-types/rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/app.ts#L87)

___

### stoped

• **stoped**: `string`[]

Which of your applications have been `stoped`

#### Defined in

[packages/api-types/rest/v2/app.ts:119](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/api-types/rest/v2/app.ts#L119)
