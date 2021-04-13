/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * CPU Usage metric for the host
 *
 */
export interface HostCpuUsage extends model.HostPerformanceMetricGroup {
  /**
   * Percentage of CPU time spent in user mode Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUserModeInPercent"?: number;
  /**
   * Percentage of CPU time spent in system mode Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuSystemModeInPercent"?: number;
  /**
   * Amount of CPU Time spent in seconds Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUsageInSec"?: number;
  /**
   * Amount of CPU Time spent in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUtilizationInPercent"?: number;
  /**
   * Amount of CPU time stolen in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuStolenInPercent"?: number;
  /**
   * Amount of CPU idle time in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuIdleInPercent"?: number;
  /**
   * Load average in the last 1 minute Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuLoad1min"?: number;
  /**
   * Load average in the last 5 minutes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuLoad5min"?: number;
  /**
   * Load average in the last 15 minutes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuLoad15min"?: number;

  "metricName": string;
}

export namespace HostCpuUsage {
  export function getJsonObj(obj: HostCpuUsage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostPerformanceMetricGroup.getJsonObj(obj) as HostCpuUsage)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_CPU_USAGE";
}
