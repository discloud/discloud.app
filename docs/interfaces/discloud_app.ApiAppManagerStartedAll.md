[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

[discloud.app](../modules/discloud_app.md).ApiAppManagerStartedAll

## Hierarchy

- `Omit`\<[`ApiAppManager`](discloud_app.ApiAppManager.md), ``"alreadyOffline"``\>

  ↳ **`ApiAppManagerStartedAll`**

## Table of contents

### Properties

- [alreadyInProcess](discloud_app.ApiAppManagerStartedAll.md#alreadyinprocess)
- [alreadyOnline](discloud_app.ApiAppManagerStartedAll.md#alreadyonline)
- [started](discloud_app.ApiAppManagerStartedAll.md#started)

## Properties

### alreadyInProcess

• **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

Omit.alreadyInProcess

#### Defined in

[packages/api-types/rest/v2/app.ts:83](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L83)

___

### alreadyOnline

• **alreadyOnline**: `string`[]

Which of your applications are currently `online`

#### Inherited from

Omit.alreadyOnline

#### Defined in

[packages/api-types/rest/v2/app.ts:91](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L91)

___

### started

• **started**: `string`[]

Which of your applications have been `started`

#### Defined in

[packages/api-types/rest/v2/app.ts:112](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L112)
