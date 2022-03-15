/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * A rule that imposes constraints on certificate renewal.
 */
export interface CertificateRenewalRule extends model.CertificateRule {
  /**
   * A property specifying how often, in days, a certificate should be renewed.
   * Expressed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) format.
   *
   */
  "renewalInterval": string;
  /**
   * A property specifying the period of time, in days, before the certificate's targeted renewal that the process should occur.
   * Expressed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) format.
   *
   */
  "advanceRenewalPeriod": string;

  "ruleType": string;
}

export namespace CertificateRenewalRule {
  export function getJsonObj(obj: CertificateRenewalRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CertificateRule.getJsonObj(obj) as CertificateRenewalRule)),
      ...{}
    };

    return jsonObj;
  }
  export const ruleType = "CERTIFICATE_RENEWAL_RULE";
  export function getDeserializedJsonObj(
    obj: CertificateRenewalRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CertificateRule.getDeserializedJsonObj(obj) as CertificateRenewalRule)),
      ...{}
    };

    return jsonObj;
  }
}