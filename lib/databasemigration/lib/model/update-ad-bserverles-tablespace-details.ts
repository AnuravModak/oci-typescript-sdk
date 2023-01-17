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
 * Migration tablespace settings valid for ADB-S target type using remap feature.
 *
 */
export interface UpdateADBServerlesTablespaceDetails
  extends model.UpdateTargetTypeTablespaceDetails {
  "targetType": string;
}

export namespace UpdateADBServerlesTablespaceDetails {
  export function getJsonObj(
    obj: UpdateADBServerlesTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as UpdateADBServerlesTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "ADB_S_REMAP";
  export function getDeserializedJsonObj(
    obj: UpdateADBServerlesTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateADBServerlesTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
