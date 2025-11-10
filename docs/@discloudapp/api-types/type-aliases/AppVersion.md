[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / AppVersion

# Type Alias: AppVersion\<T\>

> **AppVersion**\<`T`\> = `T` *extends* `"go"` ? `VersionGo` : `T` *extends* `"java"` ? `VersionJava` : `T` *extends* `"js"` ? `VersionJs` : `T` *extends* `"php"` ? `VersionPhp` : `T` *extends* `"py"` ? `VersionPy` : `T` *extends* `"rb"` ? `VersionRb` : `T` *extends* `"rs"` ? `VersionRs` : `BaseVersion`

Defined in: [payload/v2/DiscloudConfig.ts:185](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/payload/v2/DiscloudConfig.ts#L185)

## Type Parameters

### T

`T` *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
