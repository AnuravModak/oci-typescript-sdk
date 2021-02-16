/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the count statistic summary object.
 */
export interface CountStatisticSummary {
  /**
   * The type of object for the count statistic object.
   */
  "objectType"?: CountStatisticSummary.ObjectType;
  /**
   * The value for the count statistic object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectCount"?: number;
}

export namespace CountStatisticSummary {
  export enum ObjectType {
    Project = "PROJECT",
    Folder = "FOLDER",
    DataFlow = "DATA_FLOW",
    DataAsset = "DATA_ASSET",
    Connection = "CONNECTION",
    Task = "TASK",
    Application = "APPLICATION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CountStatisticSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
