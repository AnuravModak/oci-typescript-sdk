/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details of the tenancy level global settings in Data Safe.
 *
 */
export interface GlobalSettings {
  /**
   * The paid usage option chosen by the customer admin.
   */
  "isPaidUsage"?: boolean;
  /**
   * The online retention period in months. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "onlineRetentionPeriod"?: number;
  /**
   * The offline retention period in months. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "offlineRetentionPeriod"?: number;
}

export namespace GlobalSettings {
  export function getJsonObj(obj: GlobalSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GlobalSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
