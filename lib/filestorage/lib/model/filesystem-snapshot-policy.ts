/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
* A file system snapshot policy is used to automate snapshot creation and deletion.
* It contains a list of snapshot schedules that define the frequency of
* snapshot creation for the associated file systems and the retention period of snapshots taken on schedule.
* <p>
For more information, see [Snapshot Scheduling](https://docs.cloud.oracle.com/iaas/Content/File/Tasks/snapshot-policies-and-schedules.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface FilesystemSnapshotPolicy {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the file system snapshot policy.
   */
  "compartmentId": string;
  /**
    * The availability domain that the file system snapshot policy is in. May be unset using a blank or NULL value.
* <p>
Example: `Uocm:PHX-AD-2`
* 
    */
  "availabilityDomain": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the file system snapshot policy.
   */
  "id": string;
  /**
   * The current state of the file system snapshot policy.
   */
  "lifecycleState": FilesystemSnapshotPolicy.LifecycleState;
  /**
    * The date and time the file system snapshot policy was created, expressed
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `policy1`
* 
    */
  "displayName"?: string;
  /**
    * The prefix to apply to all snapshots created by this policy.
* <p>
Example: `acme`
* 
    */
  "policyPrefix"?: string;
  /**
   * The list of associated snapshot schedules. A maximum of 10 schedules can be associated with a policy.
   *
   */
  "schedules"?: Array<model.SnapshotSchedule>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace FilesystemSnapshotPolicy {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Inactive = "INACTIVE",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FilesystemSnapshotPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.SnapshotSchedule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FilesystemSnapshotPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.SnapshotSchedule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
