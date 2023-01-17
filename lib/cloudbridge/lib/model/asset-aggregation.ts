/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * The result of an analytics aggregation on a set of assets.
 */
export interface AssetAggregation {
  /**
   * The dimensions along which assets can be aggregated for analytics.
   */
  "dimensions"?: { [key: string]: string };
  /**
   * Returns the total number of observations from the group of assets. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count"?: number;
  /**
   * Returns the highest value from all the assets. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "max"?: number;
  /**
   * Returns the value of sum divided by count from the group of assets. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mean"?: number;
  /**
   * Returns the lowest value from the group of assets. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "min"?: number;
  /**
   * Returns all values added together from the group of assets. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sum"?: number;
  /**
   * Aggregated property.
   */
  "aggregatedProperty": string;
}

export namespace AssetAggregation {
  export function getJsonObj(obj: AssetAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssetAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
