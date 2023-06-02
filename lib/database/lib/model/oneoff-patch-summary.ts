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
* An Oracle one-off patch for a specified database version.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface OneoffPatchSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the one-off patch.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * One-off patch name.
   */
  "displayName": string;
  /**
    * A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "dbVersion": string;
  /**
   * The PSU or PBP or Release Updates. To get a list of supported versions, use the {@link #listDbVersions(ListDbVersionsRequest) listDbVersions} operation.
   */
  "releaseUpdate": string;
  /**
   * List of one-off patches for Database Homes.
   */
  "oneOffPatches"?: Array<string>;
  /**
   * The size of one-off patch in kilobytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInKBs"?: number;
  /**
   * The current state of the one-off patch.
   */
  "lifecycleState": OneoffPatchSummary.LifecycleState;
  /**
   * Detailed message for the lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * SHA-256 checksum of the one-off patch.
   */
  "sha256Sum"?: string;
  /**
   * The date and time one-off patch was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The date and time one-off patch was created.
   */
  "timeCreated": Date;
  /**
   * The date and time until which the one-off patch will be available for download.
   */
  "timeOfExpiration"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OneoffPatchSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Inactive = "INACTIVE",
    Failed = "FAILED",
    Expired = "EXPIRED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OneoffPatchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OneoffPatchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}