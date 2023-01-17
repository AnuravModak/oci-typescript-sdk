/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The details of the certificate version. This object does not contain the certificate contents.
 */
export interface CertificateVersionSummary {
  /**
   * The OCID of the certificate.
   */
  "certificateId": string;
  /**
   * A unique certificate identifier used in certificate revocation tracking, formatted as octets.
   * Example: `03 AC FC FA CC B3 CB 02 B8 F8 DE F5 85 E7 7B FF`
   *
   */
  "serialNumber"?: string;
  /**
   * A optional property indicating the time when the certificate version was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The version number of the certificate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionNumber": number;
  /**
   * The version number of the issuing certificate authority (CA). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "issuerCaVersionNumber"?: number;
  /**
   * The name of the certificate version. When the value is not null, a name is unique across versions of a given certificate.
   *
   */
  "versionName"?: string;
  /**
   * A list of subject alternative names.
   */
  "subjectAlternativeNames"?: Array<model.CertificateSubjectAlternativeName>;
  /**
   * An optional property indicating when to delete the certificate version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  "validity"?: model.Validity;
  /**
   * A list of rotation states for this certificate version.
   */
  "stages": Array<model.VersionStage>;
  "revocationStatus"?: model.RevocationStatus;
}

export namespace CertificateVersionSummary {
  export function getJsonObj(obj: CertificateVersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "subjectAlternativeNames": obj.subjectAlternativeNames
          ? obj.subjectAlternativeNames.map(item => {
              return model.CertificateSubjectAlternativeName.getJsonObj(item);
            })
          : undefined,

        "validity": obj.validity ? model.Validity.getJsonObj(obj.validity) : undefined,
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.VersionStage.getJsonObj(item);
            })
          : undefined,
        "revocationStatus": obj.revocationStatus
          ? model.RevocationStatus.getJsonObj(obj.revocationStatus)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateVersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "subjectAlternativeNames": obj.subjectAlternativeNames
          ? obj.subjectAlternativeNames.map(item => {
              return model.CertificateSubjectAlternativeName.getDeserializedJsonObj(item);
            })
          : undefined,

        "validity": obj.validity ? model.Validity.getDeserializedJsonObj(obj.validity) : undefined,
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.VersionStage.getDeserializedJsonObj(item);
            })
          : undefined,
        "revocationStatus": obj.revocationStatus
          ? model.RevocationStatus.getDeserializedJsonObj(obj.revocationStatus)
          : undefined
      }
    };

    return jsonObj;
  }
}
