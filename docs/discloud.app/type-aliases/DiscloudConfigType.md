[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DiscloudConfigType

# Type Alias: DiscloudConfigType\<T, V\>

> **DiscloudConfigType**\<`T`, `V`\>: `T` *extends* `"bot"` ? `DiscloudConfigBot`\<`V`\> : `T` *extends* `"site"` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

Defined in: [packages/api-types/payload/v2/DiscloudConfig.ts:98](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/payload/v2/DiscloudConfig.ts#L98)

## Type Parameters

• **T** *extends* [`AppTypes`](AppTypes.md) = [`AppTypes`](AppTypes.md)

• **V** *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
