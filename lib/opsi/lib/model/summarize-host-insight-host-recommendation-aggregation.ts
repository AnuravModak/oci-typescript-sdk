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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Returns list of hosts with resource statistics like usage, capacity, utilization, usage change percent and load.
 *
 */
export interface SummarizeHostInsightHostRecommendationAggregation {
  /**
   * Defines the type of resource metric (CPU, Physical Memory, Logical Memory)
   *
   */
  "resourceMetric": SummarizeHostInsightHostRecommendationAggregation.ResourceMetric;
  /**
   * Displays usage unit ( CORES, GB , PERCENT, MBPS)
   */
  "usageUnit": SummarizeHostInsightHostRecommendationAggregation.UsageUnit;
  /**
   * Time duration in milliseconds between data points (one hour or one day).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "itemDurationInMs": number;
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  "details"?: model.HostCpuRecommendations;
}

export namespace SummarizeHostInsightHostRecommendationAggregation {
  export enum ResourceMetric {
    Cpu = "CPU",
    Memory = "MEMORY",
    LogicalMemory = "LOGICAL_MEMORY",
    Storage = "STORAGE",
    Network = "NETWORK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum UsageUnit {
    Cores = "CORES",
    Gb = "GB",
    Mbps = "MBPS",
    Iops = "IOPS",
    Percent = "PERCENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SummarizeHostInsightHostRecommendationAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? model.HostInsightHostRecommendations.getJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeHostInsightHostRecommendationAggregation
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? model.HostInsightHostRecommendations.getDeserializedJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
}