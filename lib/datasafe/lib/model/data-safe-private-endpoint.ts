/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A Data Safe private endpoint that allows Data Safe to connect to databases in a customer's virtual cloud network (VCN).
 */
export interface DataSafePrivateEndpoint {
  /**
   * The OCID of the Data Safe private endpoint.
   */
  "id": string;
  /**
   * The display name of the private endpoint.
   */
  "displayName": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The OCID of the VCN.
   */
  "vcnId": string;
  /**
   * The OCID of the subnet.
   */
  "subnetId": string;
  /**
   * The OCID of the underlying private endpoint.
   */
  "privateEndpointId": string;
  /**
   * The private IP address of the private endpoint.
   *
   */
  "privateEndpointIp"?: string;
  /**
   * The three-label fully qualified domain name (FQDN) of the private endpoint. The customer VCN's DNS records are updated with this FQDN.
   */
  "endpointFqdn"?: string;
  /**
   * The description of the private endpoint.
   */
  "description"?: string;
  /**
   * The date and time the private endpoint was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The current state of the private endpoint.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The OCIDs of the network security groups that the private endpoint belongs to.
   *
   */
  "nsgIds"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DataSafePrivateEndpoint {
  export function getJsonObj(obj: DataSafePrivateEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataSafePrivateEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
