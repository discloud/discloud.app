import { DiscloudConfigScopes } from "@discloudapp/api-types/v2";
import z from "zod";

const _emptyText = "";

const _bot = "bot";
const _site = "site";

const _appTypes = [_bot, _site] as const;

const _versionRegexp = /^(current|latest|lts|suja|(?:\d+(?:\.(?:\d+|x)){0,2}))$/;

const _stringArrayRegexp = /\s*,\s*/;

const _emptyTextPredicate = z.literal(_emptyText);

const _appTypesPredicate = z.literal(_appTypes);

const _APTPredicate = z.union([
  z.array(z.string()),
  z.string().trim().refine(arg => arg.split(_stringArrayRegexp)),
]);

const _discloudConfigCommonRequiredPredicate = z.object({
  [DiscloudConfigScopes.MAIN]: z.string().min(1),
});

const _discloudConfigOptionalPredicate = z.object({
  [DiscloudConfigScopes.APT]: _APTPredicate,
  [DiscloudConfigScopes.AUTORESTART]: z.coerce.boolean(),
  [DiscloudConfigScopes.AVATAR]: z.url().or(_emptyTextPredicate),
  [DiscloudConfigScopes.HOSTNAME]: z.string(),
  [DiscloudConfigScopes.ID]: z.string(),
  [DiscloudConfigScopes.MAIN]: z.string(),
  [DiscloudConfigScopes.NAME]: z.string(),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(100),
  [DiscloudConfigScopes.START]: z.string(),
  [DiscloudConfigScopes.STORAGE]: z.string(),
  [DiscloudConfigScopes.TYPE]: _appTypesPredicate.or(_emptyTextPredicate),
  [DiscloudConfigScopes.VERSION]: z.string().trim().regex(_versionRegexp).or(_emptyTextPredicate),
  [DiscloudConfigScopes.VLAN]: z.coerce.boolean(),
}).partial();

const _discloudConfigBotPredicate = z.object({
  [DiscloudConfigScopes.TYPE]: z.literal(_bot).or(_emptyTextPredicate).optional(),
});

const _discloudConfigSitePredicate = z.object({
  [DiscloudConfigScopes.TYPE]: z.literal(_site),
  [DiscloudConfigScopes.ID]: z.string().min(1).max(30),
  [DiscloudConfigScopes.RAM]: z.coerce.number().min(512).optional(),
});

export const DiscloudConfigPredicate =
  _discloudConfigCommonRequiredPredicate
    .and(_discloudConfigOptionalPredicate)
    .and(z.union([
      _discloudConfigSitePredicate,
      _discloudConfigBotPredicate,
    ]));
