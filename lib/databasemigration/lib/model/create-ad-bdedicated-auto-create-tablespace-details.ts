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
 * Migration tablespace settings valid for ADB-D target type using auto create feature.
 *
 */
export interface CreateADBDedicatedAutoCreateTablespaceDetails
  extends model.CreateTargetTypeTablespaceDetails {
  /**
   * True to auto-create tablespace in the target Database.
   *
   */
  "isAutoCreate"?: boolean;
  /**
   * True set tablespace to big file.
   *
   */
  "isBigFile"?: boolean;
  /**
   * Size of extend in MB. Can only be specified if 'isBigFile' property is set to true.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "extendSizeInMBs"?: number;

  "targetType": string;
}

export namespace CreateADBDedicatedAutoCreateTablespaceDetails {
  export function getJsonObj(
    obj: CreateADBDedicatedAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as CreateADBDedicatedAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "ADB_D_AUTOCREATE";
  export function getDeserializedJsonObj(
    obj: CreateADBDedicatedAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as CreateADBDedicatedAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
