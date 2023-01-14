[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTOptions

# Interface: RESTOptions

[discloud.app](../modules/discloud_app.md).RESTOptions

## Table of contents

### Properties

- [api](discloud_app.RESTOptions.md#api)
- [globalRequestsPerMinute](discloud_app.RESTOptions.md#globalrequestsperminute)
- [version](discloud_app.RESTOptions.md#version)

## Properties

### api

• **api**: `string`

The base api path, without version

**`Default Value`**

`'https://api.discloud.app'`

#### Defined in

packages/rest/dist/@types/index.d.ts:12

___

### globalRequestsPerMinute

• **globalRequestsPerMinute**: `number`

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

**`Default Value`**

`60`

#### Defined in

packages/rest/dist/@types/index.d.ts:18

___

### version

• **version**: `string`

The version of the API to use

**`Default Value`**

`{APIVersion}`

#### Defined in

packages/rest/dist/@types/index.d.ts:24
