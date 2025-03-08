[**@discloudapp/api-types**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / AppVersion

# Type Alias: AppVersion\<T\>

> **AppVersion**\<`T`\>: `T` *extends* `"go"` ? `VersionGo` : `T` *extends* `"java"` ? `VersionJava` : `T` *extends* `"js"` ? `VersionJs` : `T` *extends* `"php"` ? `VersionPhp` : `T` *extends* `"py"` ? `VersionPy` : `T` *extends* `"rb"` ? `VersionRb` : `T` *extends* `"rs"` ? `VersionRs` : `BaseVersion`

Defined in: [payload/v2/DiscloudConfig.ts:181](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/payload/v2/DiscloudConfig.ts#L181)

## Type Parameters

• **T** *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
