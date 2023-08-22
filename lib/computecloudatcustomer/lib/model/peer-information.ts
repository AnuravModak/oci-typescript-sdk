/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer Infrastructure deployments
and scheduled upgrades. For more information see 
[Compute Cloud@Customer documentation](/iaas/Content/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * Routing information for peer nodes using the Border Gateway Protocol (BGP).
 *
 */
export interface PeerInformation {
  /**
   * The Autonomous System Number (ASN) of the peer network. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "asn"?: number;
  /**
   * Neighbor Border Gateway Protocal (BGP) IP address.
   * The IP address usually refers to the customer data center router.
   *
   */
  "ip"?: string;
}

export namespace PeerInformation {
  export function getJsonObj(obj: PeerInformation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PeerInformation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
