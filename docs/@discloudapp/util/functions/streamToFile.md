[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / streamToFile

# Function: streamToFile()

> **streamToFile**(`stream`, `fileName?`, `mimeType?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`File`\>

Defined in: [packages/util/src/FileResolver.ts:112](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/FileResolver.ts#L112)

A function that converts a like Stream parameter to File

## Parameters

### stream

`Stream`

A parameter like Readable or Writable

### fileName?

A file name, if you wish

`null` | `string`

### mimeType?

`string`

A mimeType parameter

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`File`\>
