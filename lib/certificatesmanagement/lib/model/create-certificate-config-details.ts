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
 * The details of the contents of the certificate and certificate metadata.
 */
export interface CreateCertificateConfigDetails {
  /**
   * A name for the certificate. When the value is not null, a name is unique across versions of a given certificate.
   */
  "versionName"?: string;

  "configType": string;
}

export namespace CreateCertificateConfigDetails {
  export function getJsonObj(obj: CreateCertificateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "MANAGED_EXTERNALLY_ISSUED_BY_INTERNAL_CA":
          return model.CreateCertificateManagedExternallyIssuedByInternalCaConfigDetails.getJsonObj(
            <model.CreateCertificateManagedExternallyIssuedByInternalCaConfigDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "ISSUED_BY_INTERNAL_CA":
          return model.CreateCertificateIssuedByInternalCaConfigDetails.getJsonObj(
            <model.CreateCertificateIssuedByInternalCaConfigDetails>(<object>jsonObj),
            true
          );
        case "IMPORTED":
          return model.CreateCertificateByImportingConfigDetails.getJsonObj(
            <model.CreateCertificateByImportingConfigDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCertificateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "MANAGED_EXTERNALLY_ISSUED_BY_INTERNAL_CA":
          return model.CreateCertificateManagedExternallyIssuedByInternalCaConfigDetails.getDeserializedJsonObj(
            <model.CreateCertificateManagedExternallyIssuedByInternalCaConfigDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "ISSUED_BY_INTERNAL_CA":
          return model.CreateCertificateIssuedByInternalCaConfigDetails.getDeserializedJsonObj(
            <model.CreateCertificateIssuedByInternalCaConfigDetails>(<object>jsonObj),
            true
          );
        case "IMPORTED":
          return model.CreateCertificateByImportingConfigDetails.getDeserializedJsonObj(
            <model.CreateCertificateByImportingConfigDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
}
