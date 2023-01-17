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
 * TLS enforcement config for the ingress listener.
 */
export interface IngressListenerTlsConfig {
  /**
   * DISABLED: Connection can only be plaintext.
   * PERMISSIVE: Connection can be either plaintext or TLS/mTLS. If the clientValidation.trustedCaBundle property is configured for the listener, mTLS is performed and the client's certificates are validated by the gateway.
   * TLS: Connection can only be TLS.
   * MUTUAL_TLS: Connection can only be MTLS.
   *
   */
  "mode": IngressListenerTlsConfig.Mode;
  "serverCertificate"?: model.OciTlsCertificate | model.LocalFileTlsCertificate;
  "clientValidation"?: model.IngressListenerClientValidationConfig;
}

export namespace IngressListenerTlsConfig {
  export enum Mode {
    Disabled = "DISABLED",
    Permissive = "PERMISSIVE",
    Tls = "TLS",
    MutualTls = "MUTUAL_TLS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IngressListenerTlsConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "serverCertificate": obj.serverCertificate
          ? model.TlsCertificate.getJsonObj(obj.serverCertificate)
          : undefined,
        "clientValidation": obj.clientValidation
          ? model.IngressListenerClientValidationConfig.getJsonObj(obj.clientValidation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IngressListenerTlsConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "serverCertificate": obj.serverCertificate
          ? model.TlsCertificate.getDeserializedJsonObj(obj.serverCertificate)
          : undefined,
        "clientValidation": obj.clientValidation
          ? model.IngressListenerClientValidationConfig.getDeserializedJsonObj(obj.clientValidation)
          : undefined
      }
    };

    return jsonObj;
  }
}
