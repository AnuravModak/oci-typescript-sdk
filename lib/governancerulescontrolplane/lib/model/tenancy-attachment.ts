/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * Tenancy attachment associates a tenancy to a governance rule via an inclusion criterion.
 */
export interface TenancyAttachment {
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the tenancy attachment.
   */
  "id": string;
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the root compartment containing the tenancy attachment.
   */
  "compartmentId": string;
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the governance rule. Every tenancy attachment is associated with a governance rule.
   */
  "governanceRuleId": string;
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the tenancy to which the governance rule is attached.
   */
  "tenancyId": string;
  /**
   * The current state of the tenancy attachment.
   */
  "lifecycleState": TenancyAttachment.LifecycleState;
  /**
    * Date and time the tenancy attachment was created. An RFC3339 formatted datetime string.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * Date and time the tenancy attachment was updated. An RFC3339 formatted datetime string.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeUpdated": Date;
  /**
    * Date and time the tenancy attachment was last attempted. An RFC3339 formatted datetime string.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeLastAttempted"?: Date;
}

export namespace TenancyAttachment {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    NeedsAttention = "NEEDS_ATTENTION",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TenancyAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TenancyAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
