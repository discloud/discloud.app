[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppManagerRemovedAll

# Interface: ApiAppManagerRemovedAll

[discloud.app](../modules/discloud_app.md).ApiAppManagerRemovedAll

## Hierarchy

- `Omit`\<[`ApiAppManager`](discloud_app.ApiAppManager.md), ``"alreadyOnline"``\>

  ↳ **`ApiAppManagerRemovedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloud_app.ApiAppManagerRemovedAll.md#alreadyinprocess)
- [alreadyOffline](discloud_app.ApiAppManagerRemovedAll.md#alreadyoffline)
- [removealled](discloud_app.ApiAppManagerRemovedAll.md#removealled)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

[packages/api-types/rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L83)

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

[packages/api-types/rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L87)

___

### removealled

• **removealled**: `string`[]

Which of your applications have been `removed`

#### Defined in

[packages/api-types/rest/v2/app.ts:98](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L98)
