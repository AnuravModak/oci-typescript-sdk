/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LogAnalyticsSourceMetric
 */
export interface LogAnalyticsSourceMetric {
  /**
   * is enabled flag
   */
  "isMetricSourceEnabled"?: boolean;
  /**
   * metric name
   */
  "metricName"?: string;
  /**
   * source internal name
   */
  "sourceName"?: string;
  /**
   * entity type
   */
  "entityType"?: string;
}

export namespace LogAnalyticsSourceMetric {
  export function getJsonObj(obj: LogAnalyticsSourceMetric): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}