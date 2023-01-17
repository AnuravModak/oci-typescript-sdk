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
 * IPSec tunnel details specific to ISAKMP phase one.
 */
export interface TunnelPhaseOneDetails {
  /**
   * Indicates whether custom phase one configuration is enabled.
   * If this option is not enabled, default settings are proposed.
   *
   */
  "isCustomPhaseOneConfig"?: boolean;
  /**
   * The total configured lifetime of the IKE security association. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lifetime"?: number;
  /**
   * The remaining lifetime before the key is refreshed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "remainingLifetime"?: number;
  /**
   * The proposed custom authentication algorithm.
   */
  "customAuthenticationAlgorithm"?: string;
  /**
   * The negotiated authentication algorithm.
   */
  "negotiatedAuthenticationAlgorithm"?: string;
  /**
   * The proposed custom encryption algorithm.
   */
  "customEncryptionAlgorithm"?: string;
  /**
   * The negotiated encryption algorithm.
   */
  "negotiatedEncryptionAlgorithm"?: string;
  /**
   * The proposed custom Diffie-Hellman group.
   */
  "customDhGroup"?: string;
  /**
   * The negotiated Diffie-Hellman group.
   */
  "negotiatedDhGroup"?: string;
  /**
   * Indicates whether IKE phase one is established.
   */
  "isIkeEstablished"?: boolean;
  /**
    * The date and time we retrieved the remaining lifetime, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "remainingLifetimeLastRetrieved"?: Date;
}

export namespace TunnelPhaseOneDetails {
  export function getJsonObj(obj: TunnelPhaseOneDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TunnelPhaseOneDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
