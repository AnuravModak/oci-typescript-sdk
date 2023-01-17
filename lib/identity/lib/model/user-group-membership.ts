/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
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
 * An object that represents the membership of a user in a group. When you add a user to a group, the result is a
 * `UserGroupMembership` with its own OCID. To remove a user from a group, you delete the `UserGroupMembership` object.
 *
 */
export interface UserGroupMembership {
  /**
   * The OCID of the membership.
   */
  "id": string;
  /**
   * The OCID of the tenancy containing the user, group, and membership object.
   */
  "compartmentId": string;
  /**
   * The OCID of the group.
   */
  "groupId": string;
  /**
   * The OCID of the user.
   */
  "userId": string;
  /**
    * Date and time the membership was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The membership's current state.  After creating a membership object, make sure its `lifecycleState` changes
   * from CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState": UserGroupMembership.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
}

export namespace UserGroupMembership {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UserGroupMembership): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserGroupMembership): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
