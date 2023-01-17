/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Provides the dimensions and their corresponding time and security score.
 */
export interface SecurityScoreTrendAggregation {
  /**
   * The key-value pairs of dimensions and their names.
   */
  "dimensionsMap": { [key: string]: string };
  /**
   * Start Time in epoch seconds Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startTimestamp": number;
  /**
   * Duration Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "durationInSeconds": number;
  /**
   * The security rating with given dimensions and time range
   */
  "securityRating": model.SecurityRating;
  /**
   * The security score with given dimensions and time range Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "securityScore": number;
}

export namespace SecurityScoreTrendAggregation {
  export function getJsonObj(obj: SecurityScoreTrendAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityScoreTrendAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
