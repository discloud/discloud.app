[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / RESTOptions

# Interface: RESTOptions

[@discloudapp/rest](../modules/discloudapp_rest.md).RESTOptions

## Table of contents

### Properties

- [api](discloudapp_rest.RESTOptions.md#api)
- [dispatcher](discloudapp_rest.RESTOptions.md#dispatcher)
- [globalRequestsPerMinute](discloudapp_rest.RESTOptions.md#globalrequestsperminute)
- [headers](discloudapp_rest.RESTOptions.md#headers)
- [version](discloudapp_rest.RESTOptions.md#version)

## Properties

### api

• **api**: `string`

The base api path, without version

**`Default Value`**

`'https://api.discloud.app'`

#### Defined in

[packages/rest/src/@types/index.ts:14](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/@types/index.ts#L14)

___

### dispatcher

• **dispatcher**: `Dispatcher`

The [Agent](https://undici.nodejs.org/#/docs/api/Agent) to set globally

#### Defined in

[packages/rest/src/@types/index.ts:18](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/@types/index.ts#L18)

___

### globalRequestsPerMinute

• **globalRequestsPerMinute**: `number`

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

**`Default Value`**

`60`

#### Defined in

[packages/rest/src/@types/index.ts:24](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/@types/index.ts#L24)

___

### headers

• **headers**: `Record`\<`string`, `string`\>

Additional headers to send for all API requests

**`Default Value`**

`{}`

#### Defined in

[packages/rest/src/@types/index.ts:30](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/@types/index.ts#L30)

___

### version

• **version**: `string`

The version of the API to use

**`Default Value`**

`{APIVersion}`

#### Defined in

[packages/rest/src/@types/index.ts:36](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/@types/index.ts#L36)
