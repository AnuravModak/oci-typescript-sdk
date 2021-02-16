/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of the SSL certificate.
 * **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 */
export interface Certificate {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the certificate.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the certificate's compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name of the certificate.
   */
  "displayName": string;
  "issuedBy"?: string;
  "subjectName"?: model.CertificateSubjectName;
  "issuerName"?: model.CertificateIssuerName;
  /**
   * A unique, positive integer assigned by the Certificate Authority (CA). The issuer name and serial number identify a unique certificate.
   */
  "serialNumber": string;
  /**
   * The version of the encoded certificate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version": number;
  /**
   * The identifier for the cryptographic algorithm used by the Certificate Authority (CA) to sign this certificate.
   */
  "signatureAlgorithm": string;
  /**
   * The date and time the certificate will become valid, expressed in RFC 3339 timestamp format.
   */
  "timeNotValidBefore": Date;
  /**
   * The date and time the certificate will expire, expressed in RFC 3339 timestamp format.
   */
  "timeNotValidAfter": Date;
  "publicKeyInfo"?: model.CertificatePublicKeyInfo;
  /**
   * Additional attributes associated with users or public keys for managing relationships between Certificate Authorities.
   */
  "extensions"?: Array<model.CertificateExtensions>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current lifecycle state of the SSL certificate.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * The date and time the certificate was created, expressed in RFC 3339 timestamp format.
   */
  "timeCreated"?: Date;
}

export namespace Certificate {
  export function getJsonObj(obj: Certificate): object {
    const jsonObj = {
      ...obj,
      ...{
        "subjectName": obj.subjectName
          ? model.CertificateSubjectName.getJsonObj(obj.subjectName)
          : undefined,
        "issuerName": obj.issuerName
          ? model.CertificateIssuerName.getJsonObj(obj.issuerName)
          : undefined,

        "publicKeyInfo": obj.publicKeyInfo
          ? model.CertificatePublicKeyInfo.getJsonObj(obj.publicKeyInfo)
          : undefined,
        "extensions": obj.extensions
          ? obj.extensions.map(item => {
              return model.CertificateExtensions.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
