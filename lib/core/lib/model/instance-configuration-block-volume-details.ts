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
 * Create new block volumes or attach to an existing volume. Specify either createDetails or volumeId.
 *
 */
export interface InstanceConfigurationBlockVolumeDetails {
  "attachDetails"?:
    | model.InstanceConfigurationIscsiAttachVolumeDetails
    | model.InstanceConfigurationParavirtualizedAttachVolumeDetails;
  "createDetails"?: model.InstanceConfigurationCreateVolumeDetails;
  /**
   * The OCID of the volume.
   */
  "volumeId"?: string;
}

export namespace InstanceConfigurationBlockVolumeDetails {
  export function getJsonObj(obj: InstanceConfigurationBlockVolumeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachDetails": obj.attachDetails
          ? model.InstanceConfigurationAttachVolumeDetails.getJsonObj(obj.attachDetails)
          : undefined,
        "createDetails": obj.createDetails
          ? model.InstanceConfigurationCreateVolumeDetails.getJsonObj(obj.createDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceConfigurationBlockVolumeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachDetails": obj.attachDetails
          ? model.InstanceConfigurationAttachVolumeDetails.getDeserializedJsonObj(obj.attachDetails)
          : undefined,
        "createDetails": obj.createDetails
          ? model.InstanceConfigurationCreateVolumeDetails.getDeserializedJsonObj(obj.createDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
