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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface CreateBootVolumeDetails {
  /**
    * The availability domain of the volume. Omissible for cloning a volume. The new volume will be created in the availability domain of the source volume.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * If provided, specifies the ID of the boot volume backup policy to assign to the newly
   * created boot volume. If omitted, no policy will be assigned.
   *
   */
  "backupPolicyId"?: string;
  /**
   * The OCID of the compartment that contains the boot volume.
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
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the Key Management key to assign as the master encryption key
   * for the boot volume.
   *
   */
  "kmsKeyId"?: string;
  /**
   * The size of the volume in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs"?: number;
  /**
    * The number of volume performance units (VPUs) that will be applied to this volume per GB,
* representing the Block Volume service's elastic performance options.
* See [Block Volume Performance Levels](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/blockvolumeperformance.htm#perf_levels) for more information.
* <p>
Allowed values:
* <p>
  * `10`: Represents Balanced option.
* <p>
  * `20`: Represents Higher Performance option.
* <p>
  * `30`-`120`: Represents the Ultra High Performance option.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vpusPerGB"?: number;
  "sourceDetails":
    | model.BootVolumeSourceFromBootVolumeBackupDetails
    | model.BootVolumeSourceFromBootVolumeDetails
    | model.BootVolumeSourceFromBootVolumeReplicaDetails;
  /**
   * Specifies whether the auto-tune performance is enabled for this boot volume.
   *
   */
  "isAutoTuneEnabled"?: boolean;
  /**
   * The list of boot volume replicas to be enabled for this boot volume
   * in the specified destination availability domains.
   *
   */
  "bootVolumeReplicas"?: Array<model.BootVolumeReplicaDetails>;
}

export namespace CreateBootVolumeDetails {
  export function getJsonObj(obj: CreateBootVolumeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.BootVolumeSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "bootVolumeReplicas": obj.bootVolumeReplicas
          ? obj.bootVolumeReplicas.map(item => {
              return model.BootVolumeReplicaDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateBootVolumeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.BootVolumeSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "bootVolumeReplicas": obj.bootVolumeReplicas
          ? obj.bootVolumeReplicas.map(item => {
              return model.BootVolumeReplicaDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
