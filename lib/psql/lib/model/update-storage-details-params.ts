/**
 * PGSQL Control Plane API
 * A description of the PGSQL Control Plane API
 * OpenAPI spec version: 20220915
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
 * Storage details of the DbSystem.
 */
export interface UpdateStorageDetailsParams {
  /**
   * DbSystem Performance Unit.
   * Only valid for `OCI_OPTIMIZED_STORAGE` dbSystem type.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "iops"?: number;
}

export namespace UpdateStorageDetailsParams {
  export function getJsonObj(obj: UpdateStorageDetailsParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateStorageDetailsParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}