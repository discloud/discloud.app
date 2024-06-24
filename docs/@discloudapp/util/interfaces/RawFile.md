[**@discloudapp/util**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / RawFile

# Interface: RawFile

## Properties

### contentType?

> `optional` **contentType**: `string`

Content-Type of the file

#### Defined in

[packages/util/src/FileResolver.ts:23](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/FileResolver.ts#L23)

***

### data

> **data**: `Buffer` \| `Blob` \| `BinaryLike` \| `File`

The actual data for the file

#### Defined in

[packages/util/src/FileResolver.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/FileResolver.ts#L19)

***

### key?

> `optional` **key**: `string`

An explicit key to use for key of the formdata field for this file.

#### Defined in

[packages/util/src/FileResolver.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/FileResolver.ts#L15)

***

### name

> **name**: `string`

The name of the file

#### Defined in

[packages/util/src/FileResolver.ts:11](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/FileResolver.ts#L11)
