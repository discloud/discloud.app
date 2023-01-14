[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppManagerRestartedAll

# Interface: ApiAppManagerRestartedAll

[discloud.app](../modules/discloud_app.md).ApiAppManagerRestartedAll

## Hierarchy

- `Omit`<[`ApiAppManager`](discloud_app.ApiAppManager.md), ``"alreadyOnline"``\>

  ↳ **`ApiAppManagerRestartedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloud_app.ApiAppManagerRestartedAll.md#alreadyinprocess)
- [alreadyOffline](discloud_app.ApiAppManagerRestartedAll.md#alreadyoffline)
- [restarted](discloud_app.ApiAppManagerRestartedAll.md#restarted)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

[packages/api-types/rest/v2/app.ts:79](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L79)

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

[packages/api-types/rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L83)

___

### restarted

• **restarted**: `string`[]

Which of your applications have been `restarted`

#### Defined in

[packages/api-types/rest/v2/app.ts:101](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L101)
