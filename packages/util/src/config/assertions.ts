import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import z from "zod";

const VERSION_REGEXP = /^(current|latest|suja|(?:\d+(?:\.[\dx]+){0,2}))$/;

const APTPredicate = z.union([
  z.array(z.string()),
  z.string().trim().refine(arg => arg.split(/\s*,\s*/)),
]);

const AVATARPredicate = z.string().trim().url();

const VERSIONPredicate = z.string().trim().regex(VERSION_REGEXP);

const DiscloudConfigCommonRequiredPredicate = z.object({
  [DiscloudConfigScopes.MAIN]: z.string().min(1),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(100),
  [DiscloudConfigScopes.TYPE]: z.enum(["bot", "site"]),
  [DiscloudConfigScopes.VERSION]: VERSIONPredicate,
});

const DiscloudConfigOptionalPredicate = z.object({
  [DiscloudConfigScopes.APT]: APTPredicate,
  [DiscloudConfigScopes.AUTORESTART]: z.coerce.boolean(),
  [DiscloudConfigScopes.AVATAR]: AVATARPredicate,
  [DiscloudConfigScopes.BUILD]: z.string(),
  [DiscloudConfigScopes.START]: z.string(),
}).partial();

const DiscloudConfigBotPredicate = z.object({
  [DiscloudConfigScopes.TYPE]: z.string().refine(arg => arg === "bot"),
  [DiscloudConfigScopes.NAME]: z.string().min(1).max(30),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(100),
});

const DiscloudConfigSitePredicate = z.object({
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
