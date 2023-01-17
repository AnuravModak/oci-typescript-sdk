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
 * Specifies the DRG attachment to another DRG.
 */
export interface RemotePeeringConnectionDrgAttachmentNetworkDetails
  extends model.DrgAttachmentNetworkDetails {
  "type": string;
}

export namespace RemotePeeringConnectionDrgAttachmentNetworkDetails {
  export function getJsonObj(
    obj: RemotePeeringConnectionDrgAttachmentNetworkDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkDetails.getJsonObj(
            obj
          ) as RemotePeeringConnectionDrgAttachmentNetworkDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "REMOTE_PEERING_CONNECTION";
  export function getDeserializedJsonObj(
    obj: RemotePeeringConnectionDrgAttachmentNetworkDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkDetails.getDeserializedJsonObj(
            obj
          ) as RemotePeeringConnectionDrgAttachmentNetworkDetails)),
      ...{}
    };

    return jsonObj;
  }
}
