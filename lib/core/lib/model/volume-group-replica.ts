/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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
* An asynchronous replica of a volume group that can then be used to create a new volume group
* or recover a volume group. For more information, see [Volume Group Replication](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/volumegroupreplication.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface VolumeGroupReplica {
  /**
   * The availability domain of the volume group replica.
   */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the volume group replica.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID for the volume group replica.
   */
  "id": string;
  /**
   * The current state of a volume group.
   */
  "lifecycleState": VolumeGroupReplica.LifecycleState;
  /**
   * The aggregate size of the volume group replica in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs": number;
  /**
   * The OCID of the source volume group.
   */
  "volumeGroupId": string;
  /**
   * The date and time the volume group replica was created. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * Volume replicas within this volume group replica.
   */
  "memberReplicas": Array<model.MemberReplica>;
  /**
   * The date and time the volume group replica was last synced from the source volume group.
   * Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeLastSynced": Date;
}

export namespace VolumeGroupReplica {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Activating = "ACTIVATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Faulty = "FAULTY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VolumeGroupReplica): object {
    const jsonObj = {
      ...obj,
      ...{
        "memberReplicas": obj.memberReplicas
          ? obj.memberReplicas.map(item => {
              return model.MemberReplica.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VolumeGroupReplica): object {
    const jsonObj = {
      ...obj,
      ...{
        "memberReplicas": obj.memberReplicas
          ? obj.memberReplicas.map(item => {
              return model.MemberReplica.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
