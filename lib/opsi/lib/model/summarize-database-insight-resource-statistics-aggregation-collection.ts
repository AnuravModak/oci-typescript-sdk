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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Returns list of the Databases with resource statistics like usage,capacity,utilization and usage change percent.
 */
export interface SummarizeDatabaseInsightResourceStatisticsAggregationCollection {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * Defines the type of resource metric (example: CPU, STORAGE)
   *
   */
  "resourceMetric": SummarizeDatabaseInsightResourceStatisticsAggregationCollection.ResourceMetric;
  /**
   * Displays usage unit ( CORES, GB , PERCENT, MBPS)
   */
  "usageUnit": SummarizeDatabaseInsightResourceStatisticsAggregationCollection.UsageUnit;
  /**
   * Collection of Resource Statistics items
   */
  "items": Array<model.ResourceStatisticsAggregation>;
}

export namespace SummarizeDatabaseInsightResourceStatisticsAggregationCollection {
  export enum ResourceMetric {
    Cpu = "CPU",
    Storage = "STORAGE",
    Io = "IO",
    Memory = "MEMORY",
    MemoryPga = "MEMORY_PGA",
    MemorySga = "MEMORY_SGA",
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

  export function getJsonObj(
    obj: SummarizeDatabaseInsightResourceStatisticsAggregationCollection
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ResourceStatisticsAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeDatabaseInsightResourceStatisticsAggregationCollection
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ResourceStatisticsAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
