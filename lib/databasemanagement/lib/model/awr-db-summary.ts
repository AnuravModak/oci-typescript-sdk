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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The AWR summary for a database.
 */
export interface AwrDbSummary {
  /**
   * The internal ID of the database. The internal ID of the database is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbs
   *
   */
  "awrDbId": string;
  /**
   * The name of the database.
   */
  "dbName": string;
  /**
   * The database instance numbers.
   */
  "instanceList"?: Array<number>;
  /**
   * The timestamp of the database startup.
   */
  "timeDbStartup"?: Date;
  /**
   * The start time of the earliest snapshot.
   */
  "timeFirstSnapshotBegin"?: Date;
  /**
   * The end time of the latest snapshot.
   */
  "timeLatestSnapshotEnd"?: Date;
  /**
   * The ID of the earliest snapshot. The snapshot ID is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbs/{awrDbId}/awrDbSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "firstSnapshotId"?: number;
  /**
   * The ID of the latest snapshot. The snapshot ID is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbs/{awrDbId}/awrDbSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "latestSnapshotId"?: number;
  /**
   * The total number of snapshots. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotCount"?: number;
  /**
   * The interval time between snapshots (in minutes). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotIntervalInMin"?: number;
  /**
   * ID of the database container. The database container ID is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbSnapshotRanges
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "containerId"?: number;
  /**
   * The version of the database.
   */
  "dbVersion"?: string;
  /**
   * The time zone of the snapshot.
   */
  "snapshotTimezone"?: string;
}

export namespace AwrDbSummary {
  export function getJsonObj(obj: AwrDbSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}