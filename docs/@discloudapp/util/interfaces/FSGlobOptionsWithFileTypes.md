[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / FSGlobOptionsWithFileTypes

# Interface: FSGlobOptionsWithFileTypes

Defined in: [packages/util/src/glob/types.ts:20](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/types.ts#L20)

## Extends

- `_FSGlobOptions`

## Properties

### cwd?

> `optional` **cwd**: `string`

Defined in: [packages/util/src/glob/types.ts:6](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/types.ts#L6)

Current working directory.

#### Default

```ts
process.cwd()
```

#### Inherited from

`_FSGlobOptions.cwd`

***

### withDirectories?

> `optional` **withDirectories**: `boolean`

Defined in: [packages/util/src/glob/types.ts:10](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/types.ts#L10)

#### Default

```ts
false
```

#### Inherited from

`_FSGlobOptions.withDirectories`

***

### withFileTypes

> **withFileTypes**: `true`

Defined in: [packages/util/src/glob/types.ts:21](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/util/src/glob/types.ts#L21)

`true` if the glob should return paths as `Dirent`s, `false` otherwise.

#### Default

```ts
false
```

#### Overrides

`_FSGlobOptions.withFileTypes`
