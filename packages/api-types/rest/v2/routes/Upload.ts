import { type OmitNewableFunctionKeys } from "../../../util/types";

const _upload = "/upload" as const;

export type Upload = OmitNewableFunctionKeys<typeof UploadRoutes>

abstract class UploadRoutes {
  /**
   * - POST - `/upload`
   */
  static upload() {
    return _upload;
  }
}

export const Upload: Upload = UploadRoutes;
