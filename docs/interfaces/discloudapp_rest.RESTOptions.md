[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / RESTOptions

# Interface: RESTOptions

[@discloudapp/rest](../modules/discloudapp_rest.md).RESTOptions

## Table of contents

### Properties

- [api](discloudapp_rest.RESTOptions.md#api)
- [globalRequestsPerMinute](discloudapp_rest.RESTOptions.md#globalrequestsperminute)
- [version](discloudapp_rest.RESTOptions.md#version)

## Properties

### api

• **api**: `string`

The base api path, without version

**`Default Value`**

`'https://api.discloud.app'`

#### Defined in

[packages/rest/src/@types/index.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L14)

___

### globalRequestsPerMinute

• **globalRequestsPerMinute**: `number`

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

**`Default Value`**

`60`

#### Defined in

[packages/rest/src/@types/index.ts:20](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L20)

___

### version

• **version**: `string`

The version of the API to use

**`Default Value`**

`{APIVersion}`

#### Defined in

[packages/rest/src/@types/index.ts:26](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L26)
