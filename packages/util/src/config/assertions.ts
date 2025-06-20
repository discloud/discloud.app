import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import z from "zod";

const VERSION_REGEXP = /^(current|latest|lts|suja|(?:\d+(?:\.(?:\d+|x)){0,2}))$/;

const APTPredicate = z.union([
  z.array(z.string()),
  z.string().trim().refine(arg => arg.split(/\s*,\s*/)),
]);

const AVATARPredicate = z.union([
  z.string().trim().url(),
  z.string().max(0),
]);

const VERSIONPredicate = z.string().trim().regex(VERSION_REGEXP);

const DiscloudConfigCommonRequiredPredicate = z.object({
  [DiscloudConfigScopes.MAIN]: z.string().min(1),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(100),
  [DiscloudConfigScopes.TYPE]: z.enum(["bot", "site"]),
});

const DiscloudConfigOptionalPredicate = z.object({
  [DiscloudConfigScopes.APT]: APTPredicate,
  [DiscloudConfigScopes.AUTORESTART]: z.coerce.boolean(),
  [DiscloudConfigScopes.AVATAR]: AVATARPredicate,
  [DiscloudConfigScopes.HOSTNAME]: z.string(),
  [DiscloudConfigScopes.NAME]: z.string(),
  [DiscloudConfigScopes.START]: z.string(),
  [DiscloudConfigScopes.STORAGE]: z.string(),
  [DiscloudConfigScopes.VERSION]: VERSIONPredicate,
  [DiscloudConfigScopes.VLAN]: z.string(),
}).partial();

const DiscloudConfigBotPredicate = z.object({
  [DiscloudConfigScopes.MAIN]: z.string().min(1),
  [DiscloudConfigScopes.TYPE]: z.string().refine(arg => arg === "bot"),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(100),
});

const DiscloudConfigSitePredicate = z.object({
  [DiscloudConfigScopes.MAIN]: z.string().min(1),
  [DiscloudConfigScopes.TYPE]: z.string().refine(arg => arg === "site"),
  [DiscloudConfigScopes.ID]: z.string().min(1),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(512),
});

export const DiscloudConfigPredicate =
  DiscloudConfigCommonRequiredPredicate
    .and(DiscloudConfigOptionalPredicate)
    .and(z.union([
      DiscloudConfigSitePredicate,
      DiscloudConfigBotPredicate,
    ]));
