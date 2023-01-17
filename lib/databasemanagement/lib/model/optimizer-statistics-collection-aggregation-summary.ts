/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The summary of the Optimizer Statistics Collection, which includes the aggregated number of tasks grouped by status.
 */
export interface OptimizerStatisticsCollectionAggregationSummary {
  /**
   * The optimizer statistics tasks grouped by type.
   */
  "groupBy"?: model.OptimizerStatisticsGroupByTypes;
  /**
   * Indicates the start of the hour as the statistics are aggregated per hour.
   */
  "timeStart": Date;
  /**
   * Indicates the end of the hour as the statistics are aggregated per hour.
   */
  "timeEnd"?: Date;
  /**
   * The number of tasks or objects for which statistics are yet to be gathered. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pending"?: number;
  /**
   * The number of tasks or objects for which statistics gathering is in progress. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inProgress"?: number;
  /**
   * The number of tasks or objects for which statistics gathering is completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "completed"?: number;
  /**
   * The number of tasks or objects for which statistics gathering failed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failed"?: number;
  /**
   * The number of tasks or objects for which statistics gathering was skipped. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "skipped"?: number;
  /**
   * The number of tasks or objects for which statistics gathering timed out. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timedOut"?: number;
  /**
   * The number of tasks or objects for which the status of statistics gathering is unknown. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "unknown"?: number;
  /**
   * The total number of tasks or objects for which statistics collection is finished. This number is the
   * sum of all the tasks or objects with various statuses: pending, inProgress, completed, failed, skipped,
   * timedOut, and unknown.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "total"?: number;
}

export namespace OptimizerStatisticsCollectionAggregationSummary {
  export function getJsonObj(obj: OptimizerStatisticsCollectionAggregationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: OptimizerStatisticsCollectionAggregationSummary
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
