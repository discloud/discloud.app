[**@discloudapp/api-types**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / AppVersion

# Type Alias: AppVersion\<T\>

> **AppVersion**\<`T`\>: `T` *extends* `"go"` ? `VersionGo` : `T` *extends* `"java"` ? `VersionJava` : `T` *extends* `"js"` ? `VersionJs` : `T` *extends* `"php"` ? `VersionPhp` : `T` *extends* `"py"` ? `VersionPy` : `T` *extends* `"rb"` ? `VersionRb` : `T` *extends* `"rs"` ? `VersionRs` : `BaseVersion`

## Type Parameters

• **T** *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)

## Defined in

[payload/v2/DiscloudConfig.ts:190](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/payload/v2/DiscloudConfig.ts#L190)
