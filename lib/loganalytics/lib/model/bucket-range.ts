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
 * Represents querylanguage bucket command input arguments in parse output.
 *
 */
export interface BucketRange {
  /**
   * Lower bound of the bucket range specified in the querystring for the numeric field referenced in tbe bucket command.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lower"?: number;
  /**
   * Upper bound of the bucket range specified in the querystring for the numeric field referenced in tbe bucket command.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "upper"?: number;
  /**
   * Optional alias of the bucket range if specified in the querystring.
   *
   */
  "alias"?: string;
}

export namespace BucketRange {
  export function getJsonObj(obj: BucketRange): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BucketRange): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
