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
 * The summary for the record of an OS upgrade action on a DB system.
 *
 */
export interface DbSystemUpgradeHistoryEntrySummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the upgrade history entry.
   */
  "id": string;
  /**
   * The operating system upgrade action.
   */
  "action": DbSystemUpgradeHistoryEntrySummary.Action;
  /**
   * A valid Oracle Grid Infrastructure (GI) software version.
   */
  "newGiVersion": string;
  /**
   * A valid Oracle Grid Infrastructure (GI) software version.
   */
  "oldGiVersion": string;
  /**
   * The retention period, in days, for the snapshot that allows you to perform a rollback of the upgrade operation. After this number of days passes, you cannot roll back the upgrade. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotRetentionPeriodInDays": number;
  /**
   * The current state of the action.
   */
  "lifecycleState": DbSystemUpgradeHistoryEntrySummary.LifecycleState;
  /**
   * A descriptive text associated with the lifecycleState.
   * Typically contains additional displayable text.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time when the upgrade action started.
   */
  "timeStarted": Date;
  /**
   * The date and time when the upgrade action completed
   */
  "timeEnded"?: Date;
}

export namespace DbSystemUpgradeHistoryEntrySummary {
  export enum Action {
    Precheck = "PRECHECK",
    Rollback = "ROLLBACK",
    UpdateSnapshotRetentionDays = "UPDATE_SNAPSHOT_RETENTION_DAYS",
    Upgrade = "UPGRADE",
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
    NeedsAttention = "NEEDS_ATTENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbSystemUpgradeHistoryEntrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystemUpgradeHistoryEntrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
