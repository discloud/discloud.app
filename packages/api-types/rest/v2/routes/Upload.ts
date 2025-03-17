import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Upload = OmitNewableFunctionKeys<typeof UploadRoutes>

abstract class UploadRoutes {
  /**
   * - POST - `/upload`
   */
  static upload(): "/upload" {
    return "/upload";
  }
}

export const Upload: Upload = UploadRoutes;
