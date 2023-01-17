/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * The mTLS authentication mode to use when receiving requests from other virtual services or ingress gateways within the mesh.
 *
 */
export interface VirtualServiceMutualTransportLayerSecurityDetails {
  /**
   * The number of days the mTLS certificate is valid.  This value should be less than the Maximum Validity Duration
   * for Certificates (Days) setting on the Certificate Authority associated with this Mesh.  The certificate will
   * be automatically renewed after 2/3 of the validity period, so a certificate with a maximum validity of 45 days
   * will be renewed every 30 days.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maximumValidity"?: number;
  /**
   * DISABLED: Connection is not tunneled.
   * PERMISSIVE: Connection can be either plaintext or an mTLS tunnel.
   * STRICT: Connection is an mTLS tunnel.  Clients without a valid certificate will be rejected.
   *
   */
  "mode": string;
}

export namespace VirtualServiceMutualTransportLayerSecurityDetails {
  export function getJsonObj(obj: VirtualServiceMutualTransportLayerSecurityDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: VirtualServiceMutualTransportLayerSecurityDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
