[**@discloudapp/util**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / IgnoreFiles

# Class: IgnoreFiles

## Constructors

### new IgnoreFiles()

> **new IgnoreFiles**(`options`): [`IgnoreFiles`](IgnoreFiles.md)

#### Parameters

• **options**: [`IgnoreFilesOptions`](../interfaces/IgnoreFilesOptions.md)

#### Returns

[`IgnoreFiles`](IgnoreFiles.md)

#### Defined in

[packages/util/src/IgnoreFiles.ts:32](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L32)

## Properties

### fileName

> `readonly` **fileName**: `string`

#### Defined in

[packages/util/src/IgnoreFiles.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L27)

***

### filesIgnore

> `readonly` **filesIgnore**: `Set`\<`string`\>

#### Defined in

[packages/util/src/IgnoreFiles.ts:28](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L28)

***

### list

> `readonly` **list**: `string`[] = `allBlockedFiles`

#### Defined in

[packages/util/src/IgnoreFiles.ts:29](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L29)

***

### paths

> `readonly` **paths**: `Set`\<`string`\>

#### Defined in

[packages/util/src/IgnoreFiles.ts:30](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L30)

## Methods

### processIgnoreFiles()

> **processIgnoreFiles**(`files`): `string`[]

#### Parameters

• **files**: `Set`\<`string`\> = `...`

#### Returns

`string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:103](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L103)

***

### findIgnoreFiles()

> `static` **findIgnoreFiles**(`fileName`, `paths`, `ignore`): `Set`\<`string`\>

#### Parameters

• **fileName**: `string`

• **paths**: `Set`\<`string`\>

• **ignore**: `string`[]

#### Returns

`Set`\<`string`\>

#### Defined in

[packages/util/src/IgnoreFiles.ts:56](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L56)

***

### normalizeIgnore()

> `static` **normalizeIgnore**(`ignore`, `path`): `string`

#### Parameters

• **ignore**: `string`

• **path**: `string` = `"**"`

#### Returns

`string`

#### Defined in

[packages/util/src/IgnoreFiles.ts:70](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L70)

***

### normalizePath()

> `static` **normalizePath**(`path`): `string`

#### Parameters

• **path**: `string`

#### Returns

`string`

#### Defined in

[packages/util/src/IgnoreFiles.ts:74](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L74)

***

### normalizePaths()

> `static` **normalizePaths**(`paths`): `string`[]

#### Parameters

• **paths**: `string`[]

#### Returns

`string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:78](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L78)

***

### processIgnoreFile()

> `static` **processIgnoreFile**(`file`): `string`[]

#### Parameters

• **file**: `string`

#### Returns

`string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:86](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/IgnoreFiles.ts#L86)
