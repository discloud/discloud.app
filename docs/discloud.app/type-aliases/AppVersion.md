[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppVersion

# Type Alias: AppVersion\<T\>

> **AppVersion**\<`T`\> = `T` *extends* `"go"` ? `VersionGo` : `T` *extends* `"java"` ? `VersionJava` : `T` *extends* `"js"` ? `VersionJs` : `T` *extends* `"php"` ? `VersionPhp` : `T` *extends* `"py"` ? `VersionPy` : `T` *extends* `"rb"` ? `VersionRb` : `T` *extends* `"rs"` ? `VersionRs` : `BaseVersion`

Defined in: [packages/api-types/payload/v2/DiscloudConfig.ts:181](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/payload/v2/DiscloudConfig.ts#L181)

## Type Parameters

### T

`T` *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
