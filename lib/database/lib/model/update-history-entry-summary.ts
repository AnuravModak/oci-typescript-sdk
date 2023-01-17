/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The record of an maintenance update action on a specified cloud VM cluster. Applies to Exadata Cloud Service instances only.
 *
 */
export interface UpdateHistoryEntrySummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the maintenance update history entry.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the maintenance update.
   */
  "updateId": string;
  /**
   * The update action.
   */
  "updateAction"?: UpdateHistoryEntrySummary.UpdateAction;
  /**
   * The type of cloud VM cluster maintenance update.
   */
  "updateType": UpdateHistoryEntrySummary.UpdateType;
  /**
   * The current lifecycle state of the maintenance update operation.
   */
  "lifecycleState": UpdateHistoryEntrySummary.LifecycleState;
  /**
   * Descriptive text providing additional details about the lifecycle state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time when the maintenance update action started.
   */
  "timeStarted": Date;
  /**
   * The date and time when the maintenance update action completed.
   */
  "timeCompleted"?: Date;
}

export namespace UpdateHistoryEntrySummary {
  export enum UpdateAction {
    RollingApply = "ROLLING_APPLY",
    NonRollingApply = "NON_ROLLING_APPLY",
    Precheck = "PRECHECK",
    Rollback = "ROLLBACK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum UpdateType {
    GiUpgrade = "GI_UPGRADE",
    GiPatch = "GI_PATCH",
    OsUpdate = "OS_UPDATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UpdateHistoryEntrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateHistoryEntrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
