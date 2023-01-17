/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
 * Information about a VNIC that belongs to a network security group.
 *
 */
export interface NetworkSecurityGroupVnic {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the parent resource that the VNIC
   * is attached to (for example, a Compute instance).
   *
   */
  "resourceId"?: string;
  /**
    * The date and time the VNIC was added to the network security group, in the format
* defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeAssociated"?: Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VNIC.
   */
  "vnicId": string;
}

export namespace NetworkSecurityGroupVnic {
  export function getJsonObj(obj: NetworkSecurityGroupVnic): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkSecurityGroupVnic): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
