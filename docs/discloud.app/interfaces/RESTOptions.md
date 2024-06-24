[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTOptions

# Interface: RESTOptions

## Properties

### api

> **api**: `string`

The base api path, without version

#### Default Value

`'https://api.discloud.app'`

#### Defined in

packages/rest/out/@types/index.d.ts:12

***

### globalRequestsPerMinute

> **globalRequestsPerMinute**: `number`

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

#### Default Value

`60`

#### Defined in

packages/rest/out/@types/index.d.ts:18

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Additional headers to send for all API requests

#### Default Value

`{}`

#### Defined in

packages/rest/out/@types/index.d.ts:24

***

### version

> **version**: `string`

The version of the API to use

#### Default Value

`{APIVersion}`

#### Defined in

packages/rest/out/@types/index.d.ts:30
