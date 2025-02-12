[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTOptions

# Interface: RESTOptions

Defined in: packages/rest/out/@types/index.d.ts:5

## Properties

### api

> **api**: `string`

Defined in: packages/rest/out/@types/index.d.ts:10

The base api path, without version

#### Default Value

`'https://api.discloud.app'`

***

### globalRequestsPerMinute

> **globalRequestsPerMinute**: `number`

Defined in: packages/rest/out/@types/index.d.ts:16

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

#### Default Value

`60`

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in: packages/rest/out/@types/index.d.ts:22

Additional headers to send for all API requests

#### Default Value

`{}`

***

### version

> **version**: `string`

Defined in: packages/rest/out/@types/index.d.ts:28

The version of the API to use

#### Default Value

`{APIVersion}`
