[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / streamToFile

# Function: streamToFile()

> **streamToFile**(`stream`, `filename?`, `mimeType?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`File`\>

Defined in: [packages/util/src/FileResolver.ts:131](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/FileResolver.ts#L131)

A function that converts a like Stream parameter to File

## Parameters

### stream

`Stream`

A parameter like Readable or Writable

### filename?

A file name, if you wish

`null` | `string`

### mimeType?

`string`

A mimeType parameter

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`File`\>
