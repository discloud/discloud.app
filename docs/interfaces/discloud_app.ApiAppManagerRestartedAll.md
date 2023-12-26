[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppManagerRestartedAll

# Interface: ApiAppManagerRestartedAll

[discloud.app](../modules/discloud_app.md).ApiAppManagerRestartedAll

## Hierarchy

- `Omit`\<[`ApiAppManager`](discloud_app.ApiAppManager.md), ``"alreadyOnline"``\>

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:83

___

### alreadyOffline

• **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

Omit.alreadyOffline

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:87

___

### restarted

• **restarted**: `string`[]

Which of your applications have been `restarted`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/app.ts:105
