import z from "zod";
import { validAvatarURLExtensions } from "./constants";
import { extname } from "path";

export type ProfileOptions = z.infer<typeof ProfileOptions>

export const ProfileOptions = z.object({
  avatarURL: z.url().refine((url) => validAvatarURLExtensions.has(extname(new URL(url).pathname))),
  name: z.string().max(30),
}).partial();
