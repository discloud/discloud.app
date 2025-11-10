[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / streamToFile

# Function: streamToFile()

> **streamToFile**(`stream`, `filename?`, `mimeType?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`File`\>

Defined in: [packages/util/src/FileResolver.ts:131](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/util/src/FileResolver.ts#L131)

A function that converts a like Stream parameter to File

## Parameters

### stream

`Stream`

A parameter like Readable or Writable

### filename?

A file name, if you wish

`string` | `null`

### mimeType?

`string`

A mimeType parameter

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`File`\>
