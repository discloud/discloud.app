[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / RawFile

# Interface: RawFile

[@discloudapp/util](../modules/discloudapp_util.md).RawFile

## Table of contents

### Properties

- [contentType](discloudapp_util.RawFile.md#contenttype)
- [data](discloudapp_util.RawFile.md#data)
- [key](discloudapp_util.RawFile.md#key)
- [name](discloudapp_util.RawFile.md#name)

## Properties

### contentType

• `Optional` **contentType**: `string`

Content-Type of the file

#### Defined in

[packages/util/src/FileResolver.ts:24](https://github.com/discloud/discloud.app/blob/482fdb3/packages/util/src/FileResolver.ts#L24)

___

### data

• **data**: `Blob` \| `BinaryLike` \| `Buffer` \| `File`

The actual data for the file

#### Defined in

[packages/util/src/FileResolver.ts:20](https://github.com/discloud/discloud.app/blob/482fdb3/packages/util/src/FileResolver.ts#L20)

___

### key

• `Optional` **key**: `string`

An explicit key to use for key of the formdata field for this file.

#### Defined in

[packages/util/src/FileResolver.ts:16](https://github.com/discloud/discloud.app/blob/482fdb3/packages/util/src/FileResolver.ts#L16)

___

### name

• **name**: `string`

The name of the file

#### Defined in

[packages/util/src/FileResolver.ts:12](https://github.com/discloud/discloud.app/blob/482fdb3/packages/util/src/FileResolver.ts#L12)
