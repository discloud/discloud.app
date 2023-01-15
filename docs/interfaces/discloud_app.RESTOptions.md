[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTOptions

# Interface: RESTOptions

[discloud.app](../modules/discloud_app.md).RESTOptions

## Table of contents

### Properties

- [agent](discloud_app.RESTOptions.md#agent)
- [api](discloud_app.RESTOptions.md#api)
- [globalRequestsPerMinute](discloud_app.RESTOptions.md#globalrequestsperminute)
- [headers](discloud_app.RESTOptions.md#headers)
- [version](discloud_app.RESTOptions.md#version)

## Properties

### agent

• **agent**: `Dispatcher`

The agent to set globally

#### Defined in

packages/rest/dist/@types/index.d.ts:16

___

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

packages/rest/dist/@types/index.d.ts:22

___

### headers

• **headers**: `Record`<`string`, `string`\>

Additional headers to send for all API requests

**`Default Value`**

`{}`

#### Defined in

packages/rest/dist/@types/index.d.ts:28

___

### version

• **version**: `string`

The version of the API to use

**`Default Value`**

`{APIVersion}`

#### Defined in

packages/rest/dist/@types/index.d.ts:34
