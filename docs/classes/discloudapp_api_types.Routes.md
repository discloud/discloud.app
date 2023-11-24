[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / Routes

# Class: Routes

[@discloudapp/api-types](../modules/discloudapp_api_types.md).Routes

## Table of contents

### Constructors

- [constructor](discloudapp_api_types.Routes.md#constructor)

### Properties

- [app](discloudapp_api_types.Routes.md#app)
- [appApt](discloudapp_api_types.Routes.md#appapt)
- [appBackup](discloudapp_api_types.Routes.md#appbackup)
- [appCommit](discloudapp_api_types.Routes.md#appcommit)
- [appDelete](discloudapp_api_types.Routes.md#appdelete)
- [appLogs](discloudapp_api_types.Routes.md#applogs)
- [appProfile](discloudapp_api_types.Routes.md#appprofile)
- [appRam](discloudapp_api_types.Routes.md#appram)
- [appRestart](discloudapp_api_types.Routes.md#apprestart)
- [appStart](discloudapp_api_types.Routes.md#appstart)
- [appStatus](discloudapp_api_types.Routes.md#appstatus)
- [appStop](discloudapp_api_types.Routes.md#appstop)
- [appTeam](discloudapp_api_types.Routes.md#appteam)
- [locale](discloudapp_api_types.Routes.md#locale)
- [team](discloudapp_api_types.Routes.md#team)
- [teamBackup](discloudapp_api_types.Routes.md#teambackup)
- [teamCommit](discloudapp_api_types.Routes.md#teamcommit)
- [teamLogs](discloudapp_api_types.Routes.md#teamlogs)
- [teamRam](discloudapp_api_types.Routes.md#teamram)
- [teamRestart](discloudapp_api_types.Routes.md#teamrestart)
- [teamStart](discloudapp_api_types.Routes.md#teamstart)
- [teamStatus](discloudapp_api_types.Routes.md#teamstatus)
- [teamStop](discloudapp_api_types.Routes.md#teamstop)
- [upload](discloudapp_api_types.Routes.md#upload)
- [user](discloudapp_api_types.Routes.md#user)

## Constructors

### constructor

• **new Routes**(): [`Routes`](discloudapp_api_types.Routes.md)

#### Returns

[`Routes`](discloudapp_api_types.Routes.md)

## Properties

### app

▪ `Static` **app**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}\` = `App.app`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}\`

- GET - `/app/{appID}`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}\`

#### Defined in

[rest/v2/routes/index.ts:9](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L9)

___

### appApt

▪ `Static` **appApt**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/apt\` = `App.apt`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/apt\`

- PUT - `/app/{appID}/apt`
- DELETE - `/app/{appID}/apt`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/apt\`

#### Defined in

[rest/v2/routes/index.ts:10](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L10)

___

### appBackup

▪ `Static` **appBackup**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/backup\` = `App.backup`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/backup\`

- GET - `/app/{appID}/backup`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/backup\`

#### Defined in

[rest/v2/routes/index.ts:11](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L11)

___

### appCommit

▪ `Static` **appCommit**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/commit\` = `App.commit`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/commit\`

- PUT - `/app/{appID}/commit`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/commit\`

#### Defined in

[rest/v2/routes/index.ts:12](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L12)

___

### appDelete

▪ `Static` **appDelete**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/delete\` = `App.delete`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/delete\`

- DELETE - `/app/{appID}/delete`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/delete\`

#### Defined in

[rest/v2/routes/index.ts:13](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L13)

___

### appLogs

▪ `Static` **appLogs**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/logs\` = `App.logs`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/logs\`

- GET - `/app/{appID}/logs`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/logs\`

#### Defined in

[rest/v2/routes/index.ts:14](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L14)

___

### appProfile

▪ `Static` **appProfile**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/profile\` = `App.profile`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/profile\`

- PUT - `/app/{appID}/profile`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/profile\`

#### Defined in

[rest/v2/routes/index.ts:15](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L15)

___

### appRam

▪ `Static` **appRam**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/ram\` = `App.ram`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/ram\`

- PUT - `/app/{appID}/ram`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/ram\`

#### Defined in

[rest/v2/routes/index.ts:16](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L16)

___

### appRestart

▪ `Static` **appRestart**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/restart\` = `App.restart`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/restart\`

- PUT - `/app/{appID}/restart`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/restart\`

#### Defined in

[rest/v2/routes/index.ts:17](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L17)

___

### appStart

▪ `Static` **appStart**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/start\` = `App.start`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/start\`

- PUT - `/app/{appID}/start`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/start\`

#### Defined in

[rest/v2/routes/index.ts:18](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L18)

___

### appStatus

▪ `Static` **appStatus**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/status\` = `App.status`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/status\`

- GET - `/app/{appID}/status`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/status\`

#### Defined in

[rest/v2/routes/index.ts:19](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L19)

___

### appStop

▪ `Static` **appStop**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/stop\` = `App.stop`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/stop\`

- PUT - `/app/{appID}/stop`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/stop\`

#### Defined in

[rest/v2/routes/index.ts:20](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L20)

___

### appTeam

▪ `Static` **appTeam**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/team\`\<appID, modID\>(`appID`: `appID`, `modID`: `modID`) => \`/app/$\{appID}/team/$\{modID}\` = `App.team`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/team\`

- GET - `/app/{appID}/team`
- POST - `/app/{appID}/team`
- PUT - `/app/{appID}/team`
- DELETE - `/app/{appID}/team/{modID}`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/team\`

▸ \<`appID`, `modID`\>(`appID`, `modID`): \`/app/$\{appID}/team/$\{modID}\`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |
| `modID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |
| `modID` | `modID` |

##### Returns

\`/app/$\{appID}/team/$\{modID}\`

#### Defined in

[rest/v2/routes/index.ts:21](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L21)

___

### locale

▪ `Static` **locale**: \<locale\>(`locale`: `locale`) => \`/locale/$\{locale}\` = `Locale.locale`

#### Type declaration

▸ \<`locale`\>(`locale`): \`/locale/$\{locale}\`

- PUT - `/locale/{locale}`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `locale` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `locale` |

##### Returns

\`/locale/$\{locale}\`

#### Defined in

[rest/v2/routes/index.ts:24](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L24)

___

### team

▪ `Static` **team**: () => ``"/team"`` = `Team.team`

#### Type declaration

▸ (): ``"/team"``

- GET - `/team`

##### Returns

``"/team"``

#### Defined in

[rest/v2/routes/index.ts:27](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L27)

___

### teamBackup

▪ `Static` **teamBackup**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/backup\` = `Team.backup`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/backup\`

- GET - `/app/{appID}/backup`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/backup\`

#### Defined in

[rest/v2/routes/index.ts:28](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L28)

___

### teamCommit

▪ `Static` **teamCommit**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/commit\` = `Team.commit`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/commit\`

- PUT - `/app/{appID}/commit`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/commit\`

#### Defined in

[rest/v2/routes/index.ts:29](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L29)

___

### teamLogs

▪ `Static` **teamLogs**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/logs\` = `Team.logs`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/logs\`

- GET - `/team/{appID}/logs`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/logs\`

#### Defined in

[rest/v2/routes/index.ts:30](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L30)

___

### teamRam

▪ `Static` **teamRam**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/ram\` = `Team.ram`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/ram\`

- PUT - `/team/{appID}/ram`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/ram\`

#### Defined in

[rest/v2/routes/index.ts:31](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L31)

___

### teamRestart

▪ `Static` **teamRestart**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/restart\` = `Team.restart`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/restart\`

- PUT - `/app/{appID}/restart`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/restart\`

#### Defined in

[rest/v2/routes/index.ts:32](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L32)

___

### teamStart

▪ `Static` **teamStart**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/start\` = `Team.start`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/start\`

- PUT - `/app/{appID}/start`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/start\`

#### Defined in

[rest/v2/routes/index.ts:33](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L33)

___

### teamStatus

▪ `Static` **teamStatus**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/status\` = `Team.status`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/status\`

- PUT - `/app/{appID}/status`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/status\`

#### Defined in

[rest/v2/routes/index.ts:34](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L34)

___

### teamStop

▪ `Static` **teamStop**: \<appID\>(`appID`: `appID`) => \`/team/$\{appID}/stop\` = `Team.stop`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/team/$\{appID}/stop\`

- PUT - `/app/{appID}/stop`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/team/$\{appID}/stop\`

#### Defined in

[rest/v2/routes/index.ts:35](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L35)

___

### upload

▪ `Static` **upload**: () => ``"/upload"`` = `Upload.upload`

#### Type declaration

▸ (): ``"/upload"``

- POST - `/upload`

##### Returns

``"/upload"``

#### Defined in

[rest/v2/routes/index.ts:38](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L38)

___

### user

▪ `Static` **user**: () => ``"/user"`` = `User.user`

#### Type declaration

▸ (): ``"/user"``

- GET - `/user`

##### Returns

``"/user"``

#### Defined in

[rest/v2/routes/index.ts:41](https://github.com/discloud/discloud.app/blob/78281f4/packages/api-types/rest/v2/routes/index.ts#L41)
