[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RawFile

# Interface: RawFile

[discloud.app](../modules/discloud_app.md).RawFile

## Table of contents

### Properties

- [contentType](discloud_app.RawFile.md#contenttype)
- [data](discloud_app.RawFile.md#data)
- [key](discloud_app.RawFile.md#key)
- [name](discloud_app.RawFile.md#name)

## Properties

### contentType

• `Optional` **contentType**: `string`

Content-Type of the file

#### Defined in

packages/util/out/FileResolver.d.ts:27

___

### data

• **data**: `Blob` \| `File` \| `Buffer` \| `BinaryLike`

The actual data for the file

#### Defined in

packages/util/out/FileResolver.d.ts:23

___

### key

• `Optional` **key**: `string`

An explicit key to use for key of the formdata field for this file.

#### Defined in

packages/util/out/FileResolver.d.ts:19

___

### name

• **name**: `string`

The name of the file

#### Defined in

packages/util/out/FileResolver.d.ts:15
