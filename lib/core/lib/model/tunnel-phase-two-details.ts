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
 * IPsec tunnel detail information specific to phase two.
 */
export interface TunnelPhaseTwoDetails {
  /**
   * Indicates whether custom phase two configuration is enabled.
   * If this option is not enabled, default settings are proposed.
   *
   */
  "isCustomPhaseTwoConfig"?: boolean;
  /**
   * The total configured lifetime of the IKE security association. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lifetime"?: number;
  /**
   * The remaining lifetime before the key is refreshed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "remainingLifetime"?: number;
  /**
   * Phase two authentication algorithm proposed during tunnel negotiation.
   *
   */
  "customAuthenticationAlgorithm"?: string;
  /**
   * The negotiated phase two authentication algorithm.
   */
  "negotiatedAuthenticationAlgorithm"?: string;
  /**
   * The proposed custom phase two encryption algorithm.
   *
   */
  "customEncryptionAlgorithm"?: string;
  /**
   * The negotiated encryption algorithm.
   */
  "negotiatedEncryptionAlgorithm"?: string;
  /**
   * The proposed Diffie-Hellman group.
   *
   */
  "dhGroup"?: string;
  /**
   * The negotiated Diffie-Hellman group.
   */
  "negotiatedDhGroup"?: string;
  /**
   * Indicates that ESP phase two is established.
   */
  "isEspEstablished"?: boolean;
  /**
   * Indicates that PFS (perfect forward secrecy) is enabled.
   */
  "isPfsEnabled"?: boolean;
  /**
    * The date and time the remaining lifetime was last retrieved, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "remainingLifetimeLastRetrieved"?: Date;
}

export namespace TunnelPhaseTwoDetails {
  export function getJsonObj(obj: TunnelPhaseTwoDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TunnelPhaseTwoDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
