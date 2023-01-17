/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of the ADDM task, which include the beginning and ending AWR snapshot IDs.
 *
 */
export interface RunHistoricAddmDetails {
  /**
   * The ID number of the beginning AWR snapshot. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startSnapshotId": number;
  /**
   * The ID of the ending AWR snapshot. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endSnapshotId": number;
}

export namespace RunHistoricAddmDetails {
  export function getJsonObj(obj: RunHistoricAddmDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RunHistoricAddmDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
