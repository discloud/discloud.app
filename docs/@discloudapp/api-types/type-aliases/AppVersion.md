[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / AppVersion

# Type Alias: AppVersion\<T\>

> **AppVersion**\<`T`\> = `T` *extends* `"go"` ? `VersionGo` : `T` *extends* `"java"` ? `VersionJava` : `T` *extends* `"js"` ? `VersionJs` : `T` *extends* `"php"` ? `VersionPhp` : `T` *extends* `"py"` ? `VersionPy` : `T` *extends* `"rb"` ? `VersionRb` : `T` *extends* `"rs"` ? `VersionRs` : `BaseVersion`

Defined in: [payload/v2/DiscloudConfig.ts:190](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/payload/v2/DiscloudConfig.ts#L190)

## Type Parameters

### T

`T` *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
