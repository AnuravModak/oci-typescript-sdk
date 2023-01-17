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
 * The details of the historic ADDM task.
 *
 */
export interface HistoricAddmResult {
  /**
   * Specifies whether the ADDM task returned had already existed or was newly created by the api call.
   */
  "isNewlyCreated"?: boolean;
  /**
   * The name of the historic ADDM task.
   */
  "taskName"?: string;
  /**
   * The ID of the historic ADDM task. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "taskId": number;
  /**
   * The description of the ADDM task.
   */
  "description"?: string;
  /**
   * The database user who owns the historic ADDM task.
   */
  "dbUser"?: string;
  /**
   * The status of the ADDM task.
   */
  "status"?: HistoricAddmResult.Status;
  /**
   * The creation date of the ADDM task.
   */
  "timeCreated": Date;
  /**
   * A description of how the task was created.
   */
  "howCreated"?: HistoricAddmResult.HowCreated;
  /**
   * The timestamp of the beginning AWR snapshot used in the ADDM task as defined by date-time RFC3339 format.
   *
   */
  "startSnapshotTime"?: Date;
  /**
   * The timestamp of the ending AWR snapshot used in the ADDM task as defined by date-time RFC3339 format.
   *
   */
  "endSnapshotTime"?: Date;
  /**
   * The ID number of the beginning AWR snapshot.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "beginSnapshotId"?: number;
  /**
   * The ID number of the ending AWR snapshot.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endSnapshotId"?: number;
  /**
   * The number of ADDM findings. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "findings"?: number;
}

export namespace HistoricAddmResult {
  export enum Status {
    Initial = "INITIAL",
    Executing = "EXECUTING",
    Interrupted = "INTERRUPTED",
    Completed = "COMPLETED",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum HowCreated {
    Auto = "AUTO",
    Manual = "MANUAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HistoricAddmResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HistoricAddmResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
