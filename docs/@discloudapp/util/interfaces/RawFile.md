[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / RawFile

# Interface: RawFile

Defined in: [packages/util/src/FileResolver.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/FileResolver.ts#L18)

## Properties

### ~~contentType?~~

> `optional` **contentType?**: `string`

Defined in: [packages/util/src/FileResolver.ts:31](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/FileResolver.ts#L31)

Content-Type of the file

#### Deprecated

use mimeType instead.

***

### data

> **data**: `BinaryLike` \| `Blob`

Defined in: [packages/util/src/FileResolver.ts:26](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/FileResolver.ts#L26)

The actual data for the file

***

### mimeType?

> `optional` **mimeType?**: `string`

Defined in: [packages/util/src/FileResolver.ts:35](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/FileResolver.ts#L35)

Content-Type of the file

***

### name

> **name**: `string`

Defined in: [packages/util/src/FileResolver.ts:22](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/FileResolver.ts#L22)

The name of the file
