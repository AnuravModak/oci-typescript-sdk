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
 * Sql bucket type object.
 */
export interface SqlBucket {
  /**
   * Version
   * Example: `1`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
  /**
   * Operations Insights internal representation of the database type.
   */
  "databaseType"?: string;
  /**
   * Collection timestamp
   * Example: `\"2020-03-31T00:00:00.000Z\"`
   *
   */
  "timeCollected": Date;
  /**
   * Unique SQL_ID for a SQL Statement.
   *
   */
  "sqlIdentifier": string;
  /**
   * Plan hash value for the SQL Execution Plan Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "planHash": number;
  /**
   * SQL Bucket ID, examples <= 3 secs, 3-10 secs, 10-60 secs, 1-5 min, > 5 min
   * Example: `\"<= 3 secs\"`
   *
   */
  "bucketId": string;
  /**
   * Total number of executions
   * Example: `60`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "executionsCount"?: number;
  /**
   * Total CPU time
   * Example: `1046`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuTimeInSec"?: number;
  /**
   * Total IO time
   * Example: `5810`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ioTimeInSec"?: number;
  /**
   * Total other wait time
   * Example: `24061`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "otherWaitTimeInSec"?: number;
  /**
   * Total time
   * Example: `30917`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalTimeInSec"?: number;
}

export namespace SqlBucket {
  export function getJsonObj(obj: SqlBucket): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
