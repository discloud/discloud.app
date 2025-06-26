import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import z from "zod";

const VERSION_REGEXP = /^(current|latest|lts|suja|(?:\d+(?:\.(?:\d+|x)){0,2}))$/;

const STRING_ARRAY_REGEXP = /\s*,\s*/;

const APTPredicate = z.union([
  z.array(z.string()),
  z.string().trim().refine(arg => arg.split(STRING_ARRAY_REGEXP)),
]);

const DiscloudConfigCommonRequiredPredicate = z.object({
  [DiscloudConfigScopes.MAIN]: z.string().min(1),
});

const DiscloudConfigOptionalPredicate = z.object({
  [DiscloudConfigScopes.APT]: APTPredicate,
  [DiscloudConfigScopes.AUTORESTART]: z.coerce.boolean(),
  [DiscloudConfigScopes.AVATAR]: z.string().trim().url(),
  [DiscloudConfigScopes.HOSTNAME]: z.string(),
  [DiscloudConfigScopes.ID]: z.string(),
  [DiscloudConfigScopes.MAIN]: z.string(),
  [DiscloudConfigScopes.NAME]: z.string(),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(100),
  [DiscloudConfigScopes.START]: z.string(),
  [DiscloudConfigScopes.STORAGE]: z.string(),
  [DiscloudConfigScopes.TYPE]: z.enum(["bot", "site"]),
  [DiscloudConfigScopes.VERSION]: z.string().trim().regex(VERSION_REGEXP),
  [DiscloudConfigScopes.VLAN]: z.coerce.boolean(),
}).partial();

const DiscloudConfigBotPredicate = z.object({
  [DiscloudConfigScopes.TYPE]: z.string().refine(arg => !arg || arg === "bot").optional(),
});

const DiscloudConfigSitePredicate = z.object({
  [DiscloudConfigScopes.TYPE]: z.string().refine(arg => arg === "site"),
  [DiscloudConfigScopes.ID]: z.string().min(1),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(512).optional(),
});

export const DiscloudConfigPredicate =
  DiscloudConfigCommonRequiredPredicate
    .and(DiscloudConfigOptionalPredicate)
    .and(z.union([
      DiscloudConfigSitePredicate,
      DiscloudConfigBotPredicate,
    ]));
