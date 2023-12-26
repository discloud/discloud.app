[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / Routes

# Class: Routes

[discloud.app](../modules/discloud_app.md).Routes

## Table of contents

### Constructors

- [constructor](discloud_app.Routes.md#constructor)

### Properties

- [app](discloud_app.Routes.md#app)
- [appApt](discloud_app.Routes.md#appapt)
- [appBackup](discloud_app.Routes.md#appbackup)
- [appCommit](discloud_app.Routes.md#appcommit)
- [appConsole](discloud_app.Routes.md#appconsole)
- [appDelete](discloud_app.Routes.md#appdelete)
- [appLogs](discloud_app.Routes.md#applogs)
- [appProfile](discloud_app.Routes.md#appprofile)
- [appRam](discloud_app.Routes.md#appram)
- [appRestart](discloud_app.Routes.md#apprestart)
- [appStart](discloud_app.Routes.md#appstart)
- [appStatus](discloud_app.Routes.md#appstatus)
- [appStop](discloud_app.Routes.md#appstop)
- [appTeam](discloud_app.Routes.md#appteam)
- [locale](discloud_app.Routes.md#locale)
- [team](discloud_app.Routes.md#team)
- [teamBackup](discloud_app.Routes.md#teambackup)
- [teamCommit](discloud_app.Routes.md#teamcommit)
- [teamLogs](discloud_app.Routes.md#teamlogs)
- [teamRam](discloud_app.Routes.md#teamram)
- [teamRestart](discloud_app.Routes.md#teamrestart)
- [teamStart](discloud_app.Routes.md#teamstart)
- [teamStatus](discloud_app.Routes.md#teamstatus)
- [teamStop](discloud_app.Routes.md#teamstop)
- [upload](discloud_app.Routes.md#upload)
- [user](discloud_app.Routes.md#user)

## Constructors

### constructor

• **new Routes**(): [`Routes`](discloud_app.Routes.md)

#### Returns

[`Routes`](discloud_app.Routes.md)

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:9

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:10

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:11

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:12

___

### appConsole

▪ `Static` **appConsole**: \<appID\>(`appID`: `appID`) => \`/app/$\{appID}/console\` = `App.console`

#### Type declaration

▸ \<`appID`\>(`appID`): \`/app/$\{appID}/console\`

- PUT - `/app/{appID}/console`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `appID` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `appID` | `appID` |

##### Returns

\`/app/$\{appID}/console\`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:13

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:14

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:15

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:16

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:17

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:18

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:19

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:20

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:21

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:22

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:25

___

### team

▪ `Static` **team**: () => ``"/team"`` = `Team.team`

#### Type declaration

▸ (): ``"/team"``

- GET - `/team`

##### Returns

``"/team"``

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:28

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:29

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:30

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:31

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:32

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:33

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:34

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:35

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

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:36

___

### upload

▪ `Static` **upload**: () => ``"/upload"`` = `Upload.upload`

#### Type declaration

▸ (): ``"/upload"``

- POST - `/upload`

##### Returns

``"/upload"``

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:39

___

### user

▪ `Static` **user**: () => ``"/user"`` = `User.user`

#### Type declaration

▸ (): ``"/user"``

- GET - `/user`

##### Returns

``"/user"``

#### Defined in

packages/discloud.app/node_modules/@discloudapp/api-types/rest/v2/routes/index.ts:42
