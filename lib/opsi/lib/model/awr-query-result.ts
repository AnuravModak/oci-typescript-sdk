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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The AWR query result.
 */
export interface AwrQueryResult {
  /**
   * The name of the query result.
   */
  "name": string;
  /**
   * The version of the query result.
   */
  "version"?: string;
  /**
   * The time taken to query the database tier (in seconds). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbQueryTimeInSecs"?: number;

  "awrResultType": string;
}

export namespace AwrQueryResult {
  export function getJsonObj(obj: AwrQueryResult): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "awrResultType" in obj && obj.awrResultType) {
      switch (obj.awrResultType) {
        case "AWRDB_ASH_CPU_USAGE_SET":
          return model.AwrDatabaseCpuUsageCollection.getJsonObj(
            <model.AwrDatabaseCpuUsageCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_DB_PARAMETER_SET":
          return model.AwrDatabaseParameterCollection.getJsonObj(
            <model.AwrDatabaseParameterCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_EVENT_HISTOGRAM_SET":
          return model.AwrDatabaseWaitEventBucketCollection.getJsonObj(
            <model.AwrDatabaseWaitEventBucketCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SNAPSHOT_RANGE_SET":
          return model.AwrDatabaseSnapshotRangeCollection.getJsonObj(
            <model.AwrDatabaseSnapshotRangeCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SNAPSHOT_SET":
          return model.AwrDatabaseSnapshotCollection.getJsonObj(
            <model.AwrDatabaseSnapshotCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SYSSTAT_SET":
          return model.AwrDatabaseSysstatCollection.getJsonObj(
            <model.AwrDatabaseSysstatCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_METRICS_SET":
          return model.AwrDatabaseMetricCollection.getJsonObj(
            <model.AwrDatabaseMetricCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_EVENT_SET":
          return model.AwrDatabaseWaitEventCollection.getJsonObj(
            <model.AwrDatabaseWaitEventCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SET":
          return model.AwrDatabaseCollection.getJsonObj(
            <model.AwrDatabaseCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_TOP_EVENT_SET":
          return model.AwrDatabaseTopWaitEventCollection.getJsonObj(
            <model.AwrDatabaseTopWaitEventCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_DB_PARAMETER_CHANGE":
          return model.AwrDatabaseParameterChangeCollection.getJsonObj(
            <model.AwrDatabaseParameterChangeCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_DB_REPORT":
          return model.AwrDatabaseReport.getJsonObj(
            <model.AwrDatabaseReport>(<object>jsonObj),
            true
          );
        case "AWRDB_SQL_REPORT":
          return model.AwrDatabaseSqlReport.getJsonObj(
            <model.AwrDatabaseSqlReport>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.awrResultType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrQueryResult): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "awrResultType" in obj && obj.awrResultType) {
      switch (obj.awrResultType) {
        case "AWRDB_ASH_CPU_USAGE_SET":
          return model.AwrDatabaseCpuUsageCollection.getDeserializedJsonObj(
            <model.AwrDatabaseCpuUsageCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_DB_PARAMETER_SET":
          return model.AwrDatabaseParameterCollection.getDeserializedJsonObj(
            <model.AwrDatabaseParameterCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_EVENT_HISTOGRAM_SET":
          return model.AwrDatabaseWaitEventBucketCollection.getDeserializedJsonObj(
            <model.AwrDatabaseWaitEventBucketCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SNAPSHOT_RANGE_SET":
          return model.AwrDatabaseSnapshotRangeCollection.getDeserializedJsonObj(
            <model.AwrDatabaseSnapshotRangeCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SNAPSHOT_SET":
          return model.AwrDatabaseSnapshotCollection.getDeserializedJsonObj(
            <model.AwrDatabaseSnapshotCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SYSSTAT_SET":
          return model.AwrDatabaseSysstatCollection.getDeserializedJsonObj(
            <model.AwrDatabaseSysstatCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_METRICS_SET":
          return model.AwrDatabaseMetricCollection.getDeserializedJsonObj(
            <model.AwrDatabaseMetricCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_EVENT_SET":
          return model.AwrDatabaseWaitEventCollection.getDeserializedJsonObj(
            <model.AwrDatabaseWaitEventCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_SET":
          return model.AwrDatabaseCollection.getDeserializedJsonObj(
            <model.AwrDatabaseCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_TOP_EVENT_SET":
          return model.AwrDatabaseTopWaitEventCollection.getDeserializedJsonObj(
            <model.AwrDatabaseTopWaitEventCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_DB_PARAMETER_CHANGE":
          return model.AwrDatabaseParameterChangeCollection.getDeserializedJsonObj(
            <model.AwrDatabaseParameterChangeCollection>(<object>jsonObj),
            true
          );
        case "AWRDB_DB_REPORT":
          return model.AwrDatabaseReport.getDeserializedJsonObj(
            <model.AwrDatabaseReport>(<object>jsonObj),
            true
          );
        case "AWRDB_SQL_REPORT":
          return model.AwrDatabaseSqlReport.getDeserializedJsonObj(
            <model.AwrDatabaseSqlReport>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.awrResultType);
      }
    }
    return jsonObj;
  }
}
