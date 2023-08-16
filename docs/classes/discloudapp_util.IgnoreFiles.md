[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / IgnoreFiles

# Class: IgnoreFiles

[@discloudapp/util](../modules/discloudapp_util.md).IgnoreFiles

## Table of contents

### Constructors

- [constructor](discloudapp_util.IgnoreFiles.md#constructor)

### Properties

- [fileName](discloudapp_util.IgnoreFiles.md#filename)
- [filesIgnore](discloudapp_util.IgnoreFiles.md#filesignore)
- [list](discloudapp_util.IgnoreFiles.md#list)
- [paths](discloudapp_util.IgnoreFiles.md#paths)

### Methods

- [#findIgnoreFiles](discloudapp_util.IgnoreFiles.md##findignorefiles)
- [#getIgnoreList](discloudapp_util.IgnoreFiles.md##getignorelist)
- [#makeBothCase](discloudapp_util.IgnoreFiles.md##makebothcase)
- [#normalizePath](discloudapp_util.IgnoreFiles.md##normalizepath)
- [#recursivelyReadDirSync](discloudapp_util.IgnoreFiles.md##recursivelyreaddirsync)
- [#resolveIgnoreFile](discloudapp_util.IgnoreFiles.md##resolveignorefile)
- [#resolveIgnorePatterns](discloudapp_util.IgnoreFiles.md##resolveignorepatterns)

## Constructors

### constructor

• **new IgnoreFiles**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IgnoreFilesOptions`](../interfaces/discloudapp_util.IgnoreFilesOptions.md) |

#### Defined in

[IgnoreFiles.ts:30](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L30)

## Properties

### fileName

• **fileName**: `string`

#### Defined in

[IgnoreFiles.ts:25](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L25)

___

### filesIgnore

• **filesIgnore**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:26](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L26)

___

### list

• **list**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:27](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L27)

___

### paths

• **paths**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:28](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L28)

## Methods

### #findIgnoreFiles

▸ `Private` **#findIgnoreFiles**(`fileName`, `paths`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `paths` | `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:52](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L52)

___

### #getIgnoreList

▸ `Private` **#getIgnoreList**(): `string`[]

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:67](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L67)

___

### #makeBothCase

▸ `Private` **#makeBothCase**(`s`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:57](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L57)

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

[IgnoreFiles.ts:71](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L71)

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

[IgnoreFiles.ts:112](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L112)

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

[IgnoreFiles.ts:90](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L90)

___

### #resolveIgnorePatterns

▸ `Private` **#resolveIgnorePatterns**(`ignore`, `paths`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignore` | `string`[] |
| `paths` | `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:77](https://github.com/discloud/discloud.app/blob/9141dfb/packages/util/src/IgnoreFiles.ts#L77)
