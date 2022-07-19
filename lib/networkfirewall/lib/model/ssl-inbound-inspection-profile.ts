/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20211001
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

/**
 * SSLInboundInspection used on the firewall policy rules.
 */
export interface SslInboundInspectionProfile extends model.DecryptionProfile {
  /**
   * Whether to block sessions if SSL version is not supported.
   */
  "isUnsupportedVersionBlocked": boolean;
  /**
   * Whether to block sessions if SSL cipher suite is not supported.
   */
  "isUnsupportedCipherBlocked": boolean;
  /**
   * Whether to block sessions if the firewall is temporarily unable to decrypt their traffic.
   */
  "isOutOfCapacityBlocked": boolean;

  "type": string;
}

export namespace SslInboundInspectionProfile {
  export function getJsonObj(obj: SslInboundInspectionProfile, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DecryptionProfile.getJsonObj(obj) as SslInboundInspectionProfile)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SSL_INBOUND_INSPECTION";
  export function getDeserializedJsonObj(
    obj: SslInboundInspectionProfile,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DecryptionProfile.getDeserializedJsonObj(obj) as SslInboundInspectionProfile)),
      ...{}
    };

    return jsonObj;
  }
}