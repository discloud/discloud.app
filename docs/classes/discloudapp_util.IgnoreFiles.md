[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / IgnoreFiles

# Class: IgnoreFiles

[@discloudapp/util](../modules/discloudapp_util.md).IgnoreFiles

## Table of contents

### Constructors

- [constructor](discloudapp_util.IgnoreFiles.md#constructor)

### Properties

- [fileName](discloudapp_util.IgnoreFiles.md#filename)
- [filesIgnore](discloudapp_util.IgnoreFiles.md#filesignore)
- [list](discloudapp_util.IgnoreFiles.md#list)
- [path](discloudapp_util.IgnoreFiles.md#path)

### Methods

- [#findIgnoreFiles](discloudapp_util.IgnoreFiles.md##findignorefiles)
- [#getIgnoreList](discloudapp_util.IgnoreFiles.md##getignorelist)
- [#normalizePath](discloudapp_util.IgnoreFiles.md##normalizepath)
- [#recursivelyReadDirSync](discloudapp_util.IgnoreFiles.md##recursivelyreaddirsync)
- [#resolveIgnoreFile](discloudapp_util.IgnoreFiles.md##resolveignorefile)

## Constructors

### constructor

• **new IgnoreFiles**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IgnoreFilesOptions`](../interfaces/discloudapp_util.IgnoreFilesOptions.md) |

#### Defined in

[packages/util/src/IgnoreFiles.ts:31](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L31)

## Properties

### fileName

• **fileName**: `string`

#### Defined in

[packages/util/src/IgnoreFiles.ts:26](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L26)

___

### filesIgnore

• **filesIgnore**: `string`[] = `[]`

#### Defined in

[packages/util/src/IgnoreFiles.ts:27](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L27)

___

### list

• **list**: `string`[] = `[]`

#### Defined in

[packages/util/src/IgnoreFiles.ts:28](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L28)

___

### path

• **path**: `string`

#### Defined in

[packages/util/src/IgnoreFiles.ts:29](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L29)

## Methods

### #findIgnoreFiles

▸ `Private` **#findIgnoreFiles**(`fileName`, `path`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `path` | `string` |

#### Returns

`string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:45](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L45)

___

### #getIgnoreList

▸ `Private` **#getIgnoreList**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:50](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L50)

___

### #normalizePath

▸ `Private` **#normalizePath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[packages/util/src/IgnoreFiles.ts:54](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L54)

___

### #recursivelyReadDirSync

▸ `Private` **#recursivelyReadDirSync**(`path`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:77](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L77)

___

### #resolveIgnoreFile

▸ `Private` **#resolveIgnoreFile**(`ignoreFile`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreFile` | `string` \| `string`[] |

#### Returns

`string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:58](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/IgnoreFiles.ts#L58)
