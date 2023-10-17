/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * Update Request for SSLForwardProxy used on the firewall policy rules.
 */
export interface UpdateSslForwardProxyProfileDetails extends model.UpdateDecryptionProfileDetails {
  /**
   * Whether to block sessions if server's certificate is expired.
   */
  "isExpiredCertificateBlocked"?: boolean;
  /**
   * Whether to block sessions if server's certificate is issued by an untrusted certificate authority (CA).
   */
  "isUntrustedIssuerBlocked"?: boolean;
  /**
   * Whether to block sessions if the revocation status check for server's certificate
   * does not succeed within the maximum allowed time (defaulting to 5 seconds).
   *
   */
  "isRevocationStatusTimeoutBlocked"?: boolean;
  /**
   * Whether to block sessions if SSL version is not supported.
   */
  "isUnsupportedVersionBlocked"?: boolean;
  /**
   * Whether to block sessions if SSL cipher suite is not supported.
   */
  "isUnsupportedCipherBlocked"?: boolean;
  /**
   * Whether to block sessions if the revocation status check for server's certificate results in \"unknown\".
   */
  "isUnknownRevocationStatusBlocked"?: boolean;
  /**
   * Whether to block sessions if the server's certificate uses extensions other than key usage and/or extended key usage.
   */
  "areCertificateExtensionsRestricted"?: boolean;
  /**
   * Whether to automatically append SAN to impersonating certificate if server certificate is missing SAN.
   */
  "isAutoIncludeAltName"?: boolean;
  /**
   * Whether to block sessions if the firewall is temporarily unable to decrypt their traffic.
   */
  "isOutOfCapacityBlocked"?: boolean;

  "type": string;
}

export namespace UpdateSslForwardProxyProfileDetails {
  export function getJsonObj(
    obj: UpdateSslForwardProxyProfileDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDecryptionProfileDetails.getJsonObj(
            obj
          ) as UpdateSslForwardProxyProfileDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SSL_FORWARD_PROXY";
  export function getDeserializedJsonObj(
    obj: UpdateSslForwardProxyProfileDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDecryptionProfileDetails.getDeserializedJsonObj(
            obj
          ) as UpdateSslForwardProxyProfileDetails)),
      ...{}
    };

    return jsonObj;
  }
}
