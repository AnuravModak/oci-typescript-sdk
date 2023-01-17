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
 * Migration tablespace settings valid for TARGET_DEFAULTS_AUTOCREATE target type. The service will compute
 * the targetType that corresponds to the targetDatabaseConnectionId type, and set the corresponding default values. When
 * target type is ADB_D or NON_ADB the default will be set to auto-create feature ADB_D_AUTOCREATE or NON_ADB_AUTOCREATE.
 *
 */
export interface UpdateTargetDefaultsAutoCreateTablespaceDetails
  extends model.UpdateTargetTypeTablespaceDetails {
  "targetType": string;
}

export namespace UpdateTargetDefaultsAutoCreateTablespaceDetails {
  export function getJsonObj(
    obj: UpdateTargetDefaultsAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as UpdateTargetDefaultsAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "TARGET_DEFAULTS_AUTOCREATE";
  export function getDeserializedJsonObj(
    obj: UpdateTargetDefaultsAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateTargetDefaultsAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
