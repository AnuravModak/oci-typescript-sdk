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
* A collection of related resources. Compartments are a fundamental component of Oracle Cloud Infrastructure
* for organizing and isolating your cloud resources. You use them to clearly separate resources for the purposes
* of measuring usage and billing, access (through the use of IAM Service policies), and isolation (separating the
* resources for one project or business unit from another). A common approach is to create a compartment for each
* major part of your organization. For more information, see
* [Overview of the IAM Service](https://docs.cloud.oracle.com/Content/Identity/Concepts/overview.htm) and also
* [Setting Up Your Tenancy](https://docs.cloud.oracle.com/Content/GSG/Concepts/settinguptenancy.htm).
* <p>
To place a resource in a compartment, simply specify the compartment ID in the \"Create\" request object when
* initially creating the resource. For example, to launch an instance into a particular compartment, specify
* that compartment's OCID in the `LaunchInstance` request. You can't move an existing resource from one
* compartment to another.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values
* using the API.
* 
*/
export interface Compartment {
  /**
   * The OCID of the compartment.
   */
  "id": string;
  /**
   * The OCID of the parent compartment containing the compartment.
   */
  "compartmentId": string;
  /**
   * The name you assign to the compartment during creation. The name must be unique across all
   * compartments in the parent. Avoid entering confidential information.
   *
   */
  "name": string;
  /**
   * The description you assign to the compartment. Does not have to be unique, and it's changeable.
   */
  "description": string;
  /**
    * Date and time the compartment was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The compartment's current state. After creating a compartment, make sure its `lifecycleState` changes from
   * CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState": Compartment.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
  /**
   * Indicates whether or not the compartment is accessible for the user making the request.
   * Returns true when the user has INSPECT permissions directly on a resource in the
   * compartment or indirectly (permissions can be on a resource in a subcompartment).
   *
   */
  "isAccessible"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
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

export namespace Compartment {
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

  export function getJsonObj(obj: Compartment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
