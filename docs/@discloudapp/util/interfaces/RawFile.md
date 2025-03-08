[**@discloudapp/util**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / RawFile

# Interface: RawFile

Defined in: [packages/util/src/FileResolver.ts:7](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/FileResolver.ts#L7)

## Properties

### contentType?

> `optional` **contentType**: `string`

Defined in: [packages/util/src/FileResolver.ts:23](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/FileResolver.ts#L23)

Content-Type of the file

***

### data

> **data**: `Buffer`\<`ArrayBufferLike`\> \| `Blob` \| `BinaryLike` \| `File`

Defined in: [packages/util/src/FileResolver.ts:19](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/FileResolver.ts#L19)

The actual data for the file

***

### key?

> `optional` **key**: `string`

Defined in: [packages/util/src/FileResolver.ts:15](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/FileResolver.ts#L15)

An explicit key to use for key of the formdata field for this file.

***

### name

> **name**: `string`

Defined in: [packages/util/src/FileResolver.ts:11](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/FileResolver.ts#L11)

The name of the file
