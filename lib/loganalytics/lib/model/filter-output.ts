/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Query builder api response object containing updated querystring's
 *
 */
export interface FilterOutput {
  /**
   * Modified user visible query string.
   *
   */
  "displayQueryString": string;
  /**
   * Modified localization agnostic query string.
   *
   */
  "internalQueryString": string;
  /**
   * Operation response time.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "responseTimeInMs"?: number;
}

export namespace FilterOutput {
  export function getJsonObj(obj: FilterOutput): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
