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
 * Specifies the VCN Attachment
 */
export interface VcnDrgAttachmentNetworkCreateDetails
  extends model.DrgAttachmentNetworkCreateDetails {
  /**
    * This is the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table that is used to route the traffic as it enters a VCN through this attachment.
* <p>
For information about why you would associate a route table with a DRG attachment, see
* [Advanced Scenario: Transit Routing](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitrouting.htm).
* For information about why you would associate a route table with a DRG attachment, see:
* <p>
  * [Transit Routing: Access to Multiple VCNs in Same Region](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitrouting.htm)
*   * [Transit Routing: Private Access to Oracle Services](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitroutingoracleservices.htm)
* 
    */
  "routeTableId"?: string;
  /**
   * Indicates whether the VCN CIDRs or the individual subnet CIDRs are imported from the attachment.
   * Routes from the VCN ingress route table are always imported.
   *
   */
  "vcnRouteType"?: string;

  "type": string;
}

export namespace VcnDrgAttachmentNetworkCreateDetails {
  export function getJsonObj(
    obj: VcnDrgAttachmentNetworkCreateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkCreateDetails.getJsonObj(
            obj
          ) as VcnDrgAttachmentNetworkCreateDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VCN";
  export function getDeserializedJsonObj(
    obj: VcnDrgAttachmentNetworkCreateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkCreateDetails.getDeserializedJsonObj(
            obj
          ) as VcnDrgAttachmentNetworkCreateDetails)),
      ...{}
    };

    return jsonObj;
  }
}
