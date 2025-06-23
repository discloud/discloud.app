[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / FSGlobOptionsWithoutFileTypes

# Interface: FSGlobOptionsWithoutFileTypes

Defined in: [packages/util/src/glob/types.ts:24](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/types.ts#L24)

## Extends

- `_FSGlobOptions`

## Properties

### cwd?

> `optional` **cwd**: `string`

Defined in: [packages/util/src/glob/types.ts:6](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/types.ts#L6)

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

Defined in: [packages/util/src/glob/types.ts:10](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/types.ts#L10)

#### Default

```ts
false
```

#### Inherited from

`_FSGlobOptions.withDirectories`

***

### withFileTypes?

> `optional` **withFileTypes**: `false`

Defined in: [packages/util/src/glob/types.ts:25](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/glob/types.ts#L25)

`true` if the glob should return paths as `Dirent`s, `false` otherwise.

#### Default

```ts
false
```

#### Overrides

`_FSGlobOptions.withFileTypes`
