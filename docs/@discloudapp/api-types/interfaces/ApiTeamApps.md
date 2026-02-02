[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiTeamApps

# Interface: ApiTeamApps

Defined in: [rest/v2/team.ts:7](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L7)

## Properties

### exitCode

> **exitCode**: `number`

Defined in: [rest/v2/team.ts:31](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L31)

Your team's app exit code on stop

***

### id

> **id**: `string`

Defined in: [rest/v2/team.ts:11](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L11)

Your team application id

***

### lang

> **lang**: `string`

Defined in: [rest/v2/team.ts:35](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L35)

Your team's app programming language

***

### name

> **name**: `string`

Defined in: [rest/v2/team.ts:15](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L15)

Your team application name

***

### online

> **online**: `boolean`

Defined in: [rest/v2/team.ts:19](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L19)

If your team application is online

***

### owner

> **owner**: [`ApiTeamAppOwner`](ApiTeamAppOwner.md)

Defined in: [rest/v2/team.ts:37](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L37)

The app owner

***

### perms

> **perms**: `string`[]

Defined in: [rest/v2/team.ts:41](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L41)

Your permissions to manage this application.

***

### ram

> **ram**: `number`

Defined in: [rest/v2/team.ts:23](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L23)

The RAM quantity for your team's app

***

### ramKilled

> **ramKilled**: `boolean`

Defined in: [rest/v2/team.ts:27](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L27)

If your team's app stopped due to low RAM

***

### type

> **type**: `number`

Defined in: [rest/v2/team.ts:45](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/rest/v2/team.ts#L45)

Your team's app type
