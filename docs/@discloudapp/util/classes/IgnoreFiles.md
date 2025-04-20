[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / IgnoreFiles

# Class: IgnoreFiles

Defined in: [packages/util/src/IgnoreFiles.ts:26](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L26)

## Constructors

### Constructor

> **new IgnoreFiles**(`options`): `IgnoreFiles`

Defined in: [packages/util/src/IgnoreFiles.ts:32](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L32)

#### Parameters

##### options

[`IgnoreFilesOptions`](../interfaces/IgnoreFilesOptions.md)

#### Returns

`IgnoreFiles`

## Properties

### fileName

> `readonly` **fileName**: `string`

Defined in: [packages/util/src/IgnoreFiles.ts:27](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L27)

***

### filesIgnore

> `readonly` **filesIgnore**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/util/src/IgnoreFiles.ts:28](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L28)

***

### list

> `readonly` **list**: `string`[] = `allBlockedFiles`

Defined in: [packages/util/src/IgnoreFiles.ts:29](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L29)

***

### paths

> `readonly` **paths**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/util/src/IgnoreFiles.ts:30](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L30)

## Methods

### processIgnoreFiles()

> **processIgnoreFiles**(`files`): `string`[]

Defined in: [packages/util/src/IgnoreFiles.ts:103](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L103)

#### Parameters

##### files

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\> = `...`

#### Returns

`string`[]

***

### findIgnoreFiles()

> `static` **findIgnoreFiles**(`fileName`, `paths`, `ignore`): [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/util/src/IgnoreFiles.ts:56](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L56)

#### Parameters

##### fileName

`string`

##### paths

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

##### ignore

`string`[]

#### Returns

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

***

### normalizeIgnore()

> `static` **normalizeIgnore**(`ignore`, `path`): `string`

Defined in: [packages/util/src/IgnoreFiles.ts:70](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L70)

#### Parameters

##### ignore

`string`

##### path

`string` = `"**"`

#### Returns

`string`

***

### normalizePath()

> `static` **normalizePath**(`path`): `string`

Defined in: [packages/util/src/IgnoreFiles.ts:74](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L74)

#### Parameters

##### path

`string`

#### Returns

`string`

***

### normalizePaths()

> `static` **normalizePaths**(`paths`): `string`[]

Defined in: [packages/util/src/IgnoreFiles.ts:78](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L78)

#### Parameters

##### paths

`string`[]

#### Returns

`string`[]

***

### processIgnoreFile()

> `static` **processIgnoreFile**(`file`): `string`[]

Defined in: [packages/util/src/IgnoreFiles.ts:86](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/IgnoreFiles.ts#L86)

#### Parameters

##### file

`string`

#### Returns

`string`[]
