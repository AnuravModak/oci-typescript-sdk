/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * This is the recall count statistics for a given tenant
 *
 */
export interface RecallCount {
  /**
   * This is the total number of recalls made so far Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recallCount": number;
  /**
   * This is the number of recalls that succeeded Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recallSucceeded": number;
  /**
   * This is the number of recalls that failed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recallFailed": number;
  /**
   * This is the number of recalls in pending state Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recallPending": number;
  /**
   * This is the maximum number of recalls (including successful and pending recalls) allowed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recallLimit": number;
}

export namespace RecallCount {
  export function getJsonObj(obj: RecallCount): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecallCount): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}