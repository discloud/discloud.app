<!-- markdownlint-disable MD024 -->

# Migration Guide: Discloud.app v1.x to v2.x

Welcome to the migration guide for Discloud.app. This guide covers the major breaking changes introduced in version 2.x, which brings significant improvements to the API structure and introduces new features for custom domains and subdomains.

## Table of Contents

1. [Overview](#overview)
2. [Manager Renaming](#manager-renaming)
3. [Structure Renaming](#structure-renaming)
4. [Deprecated Properties](#deprecated-properties)
5. [New Features](#new-features)
6. [API Return Type Changes](#api-return-type-changes)
7. [Code Examples](#code-examples)

---

## Overview

Version 2.x introduces a major restructuring to make the SDK more intuitive and scalable. The main goals were:

- Rename managers and structures for better clarity
- Introduce support for custom domains and subdomains
- Organize team-related features under a new "SharedApps" concept
- Add deprecation warnings for backwards compatibility
- Improve type safety and manager organization

---

## Manager Renaming

### Application Managers

| Old Name         | New Name                | Notes                                 |
| ---------------- | ----------------------- | ------------------------------------- |
| `AppManager`     | `AppsManager`           | Main manager for your applications    |
| `AppAptManager`  | `AppsAptsManager`       | Manager for APT package installations |
| `AppTeamManager` | `AppsModeratorsManager` | Manager for app moderators            |
| `TeamAppManager` | `SharedAppsManager`     | Manager for team/shared applications  |

### Manager Migration Examples

#### Before (v1.x)

```ts
// Accessing old managers
await discloud.appApt.install(appId, "ffmpeg"); // Promise<RESTPutApiAppAptResult>
await discloud.appTeam.create(appId, modId, permissions); // Promise<ApiAppTeamManager>
await discloud.teamApps.fetch(); // Promise<Map<string, TeamApp>>
```

#### After (v2.x)

```ts
// Using new manager structure
await discloud.apps.apts.install(appId, "ffmpeg"); // Promise<void>
await discloud.apps.moderators.create(appId, modId, permissions); // Promise<AppModerator>
await discloud.sharedApps.fetch(); // Promise<Map<string, SharedApp>>
```

### Sub-Manager Access

Managers now have hierarchical sub-managers for better organization:

```ts
// Old way (v1.x)
await discloud.appApt.install(appId, "package"); // Promise<RESTPutApiAppAptResult>

// New way (v2.x)
await discloud.apps.apts.install(appId, "package"); // Promise<void>

// Old way (v1.x)
await discloud.appTeam.fetch(appId); // Promise<ApiAppTeam[]>

// New way (v2.x)
await discloud.apps.moderators.fetch(appId); // Promise<Map<string, AppModerator>>
```

---

## Structure Renaming

### Application Structures

| Old Name        | New Name          | Deprecation Status            |
| --------------- | ----------------- | ----------------------------- |
| `TeamApp`       | `SharedApp`       | Deprecated (alias maintained) |
| `AppTeam`       | `AppModerator`    | Deprecated (alias maintained) |
| `TeamAppStatus` | `SharedAppStatus` | Deprecated (alias maintained) |
| `TeamAppOwner`  | `SharedAppOwner`  | Deprecated (alias maintained) |
| `BaseTeamApp`   | `BaseSharedApp`   | Deprecated (alias maintained) |

### Structure Migration Examples

#### Before (v1.x)

```ts
import { AppTeam, TeamApp, TeamAppStatus } from "discloud.app";

const teamApp: TeamApp = await discloud.teamApps.fetch(appId); // Promise<TeamApp>

const appTeam: AppTeam = await discloud.appTeam.fetch(appId); // Promise<AppTeam>

const status: TeamAppStatus = await teamApp.status(); // Promise<TeamAppStatus>
```

#### After (v2.x)

```ts
import { AppModerator, SharedApp, SharedAppStatus } from "discloud.app";

const moderator: Map<string, AppModerator> =
  await discloud.apps.moderators.fetch(appId); // Promise<Map<string, AppModerator>>

const sharedApp: SharedApp = await discloud.sharedApps.fetch(appId); // Promise<SharedApp>

const status: SharedAppStatus = await sharedApp.status.fetch(); // Promise<SharedAppStatus>
```

---

## Deprecated Properties

### DiscloudApp Properties

Several properties in `DiscloudApp` have been deprecated and moved to more logical locations:

#### Before (v1.x)

```ts
await discloud.appApt.install(appId, "ffmpeg"); // Promise<RESTPutApiAppAptResult>

await discloud.appTeam.fetch(appId); // Promise<ApiAppTeam[]>

await discloud.teamApps.fetch(); // Promise<Map<string, TeamApp>>
```

#### After (v2.x)

```ts
// Replacement for discloud.appApt
await discloud.apps.apts.install(appId, "ffmpeg"); // Promise<void>

// Replacement for discloud.appTeam
await discloud.apps.moderators.fetch(appId); // Promise<Map<string, AppModerator>>

// Replacement for discloud.teamApps
await discloud.sharedApps.fetch(); // Promise<Map<string, SharedApp>>
```

### Using Deprecated Properties (Compatibility)

The old properties are still available but will emit deprecation warnings:

```ts
// This still works but will log a warning:
// "The appApt property is deprecated. Use apps.apts instead."
await discloud.appApt.install(appId, "ffmpeg");
```

### App Instance Properties

In the `App` structure, the `apt` property is now accessible through a deprecation wrapper:

#### Before (v1.x)

```ts
const app = await discloud.apps.fetch(appId); // Promise<App>

await app.apt.install("ffmpeg"); // Promise<RESTPutApiAppAptResult>
```

#### After (v2.x)

```ts
const app = await discloud.apps.fetch(appId); // Promise<App>

// New way
await app.apts.install("ffmpeg"); // Promise<void>

// Old way (still works with deprecation warning)
await app.apt.install("ffmpeg"); // Promise<void> (returns same as apts)
```

---

## New Features

### Custom Domains

Version 2.x introduces full support for managing custom domains:

```ts
// Create a custom domain
const customdomain = await discloud.customdomains.create(appId, "example.com");

// Fetch all custom domains
const allDomains = await discloud.customdomains.fetch("all");

// Verify a custom domain
const verified = await discloud.customdomains.verify("example.com");

// Edit a custom domain (change associated app)
await discloud.customdomains.edit("example.com", newAppId);

// Delete a custom domain
await discloud.customdomains.delete("example.com");

// Access domain properties
console.log(customdomain.id); // "example.com"
console.log(customdomain.dns_status); // DNS status
console.log(customdomain.app); // Associated app info
console.log(customdomain.instructions); // DNS setup instructions
```

### Subdomains

Version 2.x introduces subdomain management:

```ts
// Create a subdomain
const subdomain = await discloud.subdomains.create("myapp");

// Fetch all subdomains
const allSubdomains = await discloud.subdomains.fetch("all");

// Fetch a specific subdomain
const specific = await discloud.subdomains.fetch("myapp");

// Delete a subdomain
await discloud.subdomains.delete("myapp");

// Access subdomain properties
console.log(subdomain.id); // "myapp"
console.log(subdomain.userID); // User ID
console.log(subdomain.status); // Subdomain status (1=available, 2=using)
console.log(subdomain.date); // Creation date
```

---

## API Return Type Changes

Several methods now return more specific types:

### Status Methods

#### Before (v1.x)

```ts
// Returned complex object with status field
const result = await discloud.apps.status(appId); // Promise<RESTGetApiAppStatusResult>
// Structure: { status: "ok" | "error", apps: ApiStatusApp[] }
```

#### After (v2.x)

```ts
// Returns AppStatus instance directly
const status = await discloud.apps.status.fetch(appId); // Promise<AppStatus>

// Access properties
console.log(status.cpu); // Type: string
console.log(status.memory); // Type: string
console.log(status.container); // Type: string
```

### Manager Methods

#### APT Methods

##### **Install/Uninstall**

```ts
// Before (v1.x)
const result = await discloud.appApt.install(appId, "ffmpeg"); // Promise<RESTPutApiAppAptResult>
// Structure: { status: "ok" | "error", ... }

const uninstallResult = await discloud.appApt.uninstall(appId, "ffmpeg"); // Promise<RESTDeleteApiAppAptResult>

// After (v2.x)
await discloud.apps.apts.install(appId, "ffmpeg"); // Promise<void>

await discloud.apps.apts.uninstall(appId, "ffmpeg"); // Promise<void>
```

#### Moderator Methods

##### **Create/Edit**

```ts
// Before (v1.x)
const mod = await discloud.appTeam.create(appId, modId, perms); // Promise<ApiAppTeamManager>

const editMod = await discloud.appTeam.edit(appId, modId, newPerms); // Promise<ApiAppTeamManager>

// After (v2.x)
const mod = await discloud.apps.moderators.create(appId, modId, perms); // Promise<AppModerator>

const editMod = await discloud.apps.moderators.edit(appId, modId, newPerms); // Promise<AppModerator>
```

##### **Delete**

```ts
// Before (v1.x)
const result = await discloud.appTeam.delete(appId, modId); // Promise<RESTDeleteApiAppTeamResult>
// Structure: { status: "ok" | "error" }

// After (v2.x)
await discloud.apps.moderators.delete(appId, modId); // Promise<void>
```

##### **Fetch**

```ts
// Before (v1.x)
const mods = await discloud.appTeam.fetch(appId); // Promise<ApiAppTeam[]>
// Returns array of raw API objects

// After (v2.x)
const mods = await discloud.apps.moderators.fetch(appId); // Promise<Map<string, AppModerator>>
// Returns Map for better accessibility and caching
```

---

## Code Examples

### Complete Migration Example

#### Before (v1.x)

```ts
import { discloud } from "discloud.app";

async function main() {
  // Manage APT packages
  const aptResult = await discloud.appApt.install(appId, ["ffmpeg", "libopus"]); // Promise<RESTPutApiAppAptResult>

  // Manage team/app members
  const mods = await discloud.appTeam.fetch(appId); // Promise<ApiAppTeam[]>

  const mod = await discloud.appTeam.create(appId, modId); // Promise<ApiAppTeamManager>

  // Access team apps
  const teamApps = await discloud.teamApps.fetch(); // Promise<Map<string, TeamApp>>

  const app = teamApps.get(appId);

  console.log(`Team app: ${app.name}`);

  const status = await discloud.teamApps.status(id); // Promise<TeamAppStatus>

  console.log(`CPU: ${status.cpu}`);
}

main().catch(console.error);
```

#### After (v2.x)

```ts
import { discloud } from "discloud.app";

async function main() {
  // Manage APT packages
  const aptSuccess = await discloud.apps.apts.install(appId, [
    "ffmpeg",
    "libopus",
  ]); // Promise<boolean>

  // Manage app moderators
  const mods = await discloud.apps.moderators.fetch(appId); // Promise<Map<string, AppModerator>>

  const mod = await discloud.apps.moderators.create(appId, modId); // Promise<AppModerator>

  // Access shared/team apps
  const sharedApps = await discloud.sharedApps.fetch(); // Promise<Map<string, SharedApp>>

  const app = sharedApps.get(appId);

  console.log(`Shared app: ${app.name}`);

  const status = await app.status.fetch(); // Promise<SharedAppStatus>

  console.log(`CPU: ${status.cpu}`);

  // NEW: Manage subdomains
  const subdomain = await discloud.subdomains.create("example"); // Promise<Subdomain>
  console.log(`Subdomain created: ${subdomain.id}`);

  // NEW: Manage custom domains
  const customdomain = await discloud.customdomains.create(
    subdomain.id,
    "example.com",
  ); // Promise<Customdomain>
  console.log(`Custom domain DNS status: ${customdomain.dns_status}`);
}

main().catch(console.error);
```

### Handling Deprecation Warnings

To suppress or handle deprecation warnings:

```ts
// Option 1: Use new APIs directly (recommended)
await discloud.apps.apts.install(appId, "ffmpeg"); // Promise<void>

// Option 2: Handle warnings with listeners
process.on("warning", (warning) => {
  if (warning.code === "Deprecation") {
    console.warn(`Deprecation: ${warning.message}`);
  }
});

// Old code will still work but emit warnings
const result = await discloud.appApt.install(appId, "ffmpeg"); // Promise<RESTPutApiAppAptResult> - still works but deprecated
```

---

## Troubleshooting

### Issue: "The appApt property is deprecated"

**Solution:** Use `discloud.apps.apts` instead:

```ts
// ❌ Old way (returns RESTPutApiAppAptResult)
const result = await discloud.appApt.install(appId, "ffmpeg"); // Promise<RESTPutApiAppAptResult>

// ✅ New way (returns void)
await discloud.apps.apts.install(appId, "ffmpeg"); // Promise<void>
```

### Issue: Cannot find TeamApp import

**Solution:** Import `SharedApp` instead:

```ts
// ❌ Old way
import { TeamApp } from "discloud.app";

// ✅ New way
import { SharedApp } from "discloud.app";

// ✓ Also still works (deprecated alias)
import { TeamApp } from "discloud.app";
```

### Issue: Status method returns different type

**Solution:** Use the new sub-manager access:

```ts
// ❌ Old way (returns RESTGetApiAppStatusResult object)
const result = await discloud.apps.status(appId); // Promise<RESTGetApiAppStatusResult>
const status = result.status; // Accessing nested status field

// ✅ New way (returns AppStatus instance directly)
const status = await discloud.apps.status.fetch(appId); // Promise<AppStatus>
console.log(status.cpu); // Direct property access
```

---

## Return Type Reference

This table provides a quick reference for all return type changes between v1.x and v2.x:

| Method                      | Old Return Type                       | New Return Type                      | Simplification                         |
| --------------------------- | ------------------------------------- | ------------------------------------ | -------------------------------------- |
| `appApt.install()`          | `Promise<RESTPutApiAppAptResult>`     | `Promise<void>`                      | ✓ Simplified to void                   |
| `appApt.uninstall()`        | `Promise<RESTDeleteApiAppAptResult>`  | `Promise<void>`                      | ✓ Simplified to void                   |
| `appTeam.create()`          | `Promise<ApiAppTeamManager>`          | `Promise<AppModerator>`              | ✓ Renamed structure                    |
| `appTeam.edit()`            | `Promise<ApiAppTeamManager>`          | `Promise<AppModerator>`              | ✓ Renamed structure                    |
| `appTeam.delete()`          | `Promise<RESTDeleteApiAppTeamResult>` | `Promise<void>`                      | ✓ Simplified, no return                |
| `appTeam.fetch()`           | `Promise<ApiAppTeam[]>`               | `Promise<Map<string, AppModerator>>` | ✓ Better structure for cache           |
| `apps.status()`             | `Promise<RESTGetApiAppStatusResult>`  | N/A (removed)                        | ✓ Moved to `apps.status.fetch()`       |
| `apps.status.fetch()`       | N/A (new)                             | `Promise<AppStatus>`                 | ✓ Returns instance directly            |
| `teamApps.status()`         | `Promise<TeamAppStatus>`              | N/A (removed)                        | ✓ Moved to `sharedApps.status.fetch()` |
| `sharedApps.status.fetch()` | N/A (new)                             | `Promise<SharedAppStatus>`           | ✓ Returns instance directly            |
| `teamApps.start()`          | `Promise<RESTPutApiAppStartResult>`   | `Promise<void>`                      | ✓ Simplified for single app            |
| `teamApps.stop()`           | `Promise<RESTPutApiAppStopResult>`    | `Promise<void>`                      | ✓ Simplified for single app            |
| `teamApps.restart()`        | `Promise<RESTPutApiAppRestartResult>` | `Promise<void>`                      | ✓ Simplified, no return                |
| `customdomains.create()`    | N/A (new)                             | `Promise<Customdomain>`              | ✓ New feature                          |
| `customdomains.fetch()`     | N/A (new)                             | `Promise<Map<string, Customdomain>>` | ✓ New feature                          |
| `customdomains.verify()`    | N/A (new)                             | `Promise<Customdomain>`              | ✓ New feature                          |
| `subdomains.create()`       | N/A (new)                             | `Promise<Subdomain>`                 | ✓ New feature                          |
| `subdomains.fetch()`        | N/A (new)                             | `Promise<Map<string, Subdomain>>`    | ✓ New feature                          |

---

## Need Help?

For more information about the new API structure, consult:

- [Discloud API Documentation](https://docs.discloud.com)
- [GitHub Issues](https://github.com/discloud/discloud.app/issues)
- [GitHub Discussions](https://github.com/discloud/discloud.app/discussions)

---

## Summary of Changes

| Category      | Change                | Impact                             |
| ------------- | --------------------- | ---------------------------------- |
| Managers      | Reorganized hierarchy | Must update manager access paths   |
| Structures    | Renamed for clarity   | Must update imports and usage      |
| Properties    | Moved to sub-managers | Use new access patterns            |
| Features      | Added custom domains  | New functionality available        |
| Features      | Added subdomains      | New functionality available        |
| Compatibility | Maintained aliases    | Old code still works with warnings |

Happy migrating! 🚀
