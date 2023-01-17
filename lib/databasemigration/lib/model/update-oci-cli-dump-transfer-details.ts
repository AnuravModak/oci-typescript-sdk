/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Optional dump transfer details for OCI-CLI-based dump transfer in source or target host.
 *
 */
export interface UpdateOciCliDumpTransferDetails extends model.UpdateHostDumpTransferDetails {
  /**
   * Path to the OCI CLI installation in the node.
   *
   */
  "ociHome": string;

  "kind": string;
}

export namespace UpdateOciCliDumpTransferDetails {
  export function getJsonObj(
    obj: UpdateOciCliDumpTransferDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateHostDumpTransferDetails.getJsonObj(obj) as UpdateOciCliDumpTransferDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "OCI_CLI";
  export function getDeserializedJsonObj(
    obj: UpdateOciCliDumpTransferDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateHostDumpTransferDetails.getDeserializedJsonObj(
            obj
          ) as UpdateOciCliDumpTransferDetails)),
      ...{}
    };

    return jsonObj;
  }
}
