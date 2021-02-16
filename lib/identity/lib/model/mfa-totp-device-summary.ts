/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
 *
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
 * As the name suggests, a `MfaTotpDeviceSummary` object contains information about a `MfaTotpDevice`.
 *
 */
export interface MfaTotpDeviceSummary {
  /**
   * The OCID of the MFA TOTP Device.
   */
  "id": string;
  /**
   * The OCID of the user the MFA TOTP device belongs to.
   */
  "userId": string;
  /**
    * Date and time the `MfaTotpDevice` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * Date and time when this MFA TOTP device will expire, in the format defined by RFC3339.
* Null if it never expires.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeExpires"?: Date;
  /**
   * The MFA TOTP device's current state.
   *
   */
  "lifecycleState": MfaTotpDeviceSummary.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState.
   * Allowed values are:
   *  - 1 - SUSPENDED
   *  - 2 - DISABLED
   *  - 4 - BLOCKED
   *  - 8 - LOCKED
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
  /**
   * Flag to indicate if the MFA TOTP device has been activated
   */
  "isActivated": boolean;
}

export namespace MfaTotpDeviceSummary {
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

  export function getJsonObj(obj: MfaTotpDeviceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
