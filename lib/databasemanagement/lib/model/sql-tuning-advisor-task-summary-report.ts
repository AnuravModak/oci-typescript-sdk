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
 * The content of the SQL Tuning Advisor summary report.
 */
export interface SqlTuningAdvisorTaskSummaryReport {
  "taskInfo": model.SqlTuningAdvisorTaskSummaryReportTaskInfo;
  "statistics": model.SqlTuningAdvisorTaskSummaryReportStatistics;
  /**
   * The list of object findings related to statistics.
   */
  "objectStatFindings"?: Array<model.SqlTuningAdvisorTaskSummaryReportObjectStatFindingSummary>;
  /**
   * The list of object findings related to indexes.
   */
  "indexFindings"?: Array<model.SqlTuningAdvisorTaskSummaryReportIndexFindingSummary>;
}

export namespace SqlTuningAdvisorTaskSummaryReport {
  export function getJsonObj(obj: SqlTuningAdvisorTaskSummaryReport): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskInfo": obj.taskInfo
          ? model.SqlTuningAdvisorTaskSummaryReportTaskInfo.getJsonObj(obj.taskInfo)
          : undefined,
        "statistics": obj.statistics
          ? model.SqlTuningAdvisorTaskSummaryReportStatistics.getJsonObj(obj.statistics)
          : undefined,
        "objectStatFindings": obj.objectStatFindings
          ? obj.objectStatFindings.map(item => {
              return model.SqlTuningAdvisorTaskSummaryReportObjectStatFindingSummary.getJsonObj(
                item
              );
            })
          : undefined,
        "indexFindings": obj.indexFindings
          ? obj.indexFindings.map(item => {
              return model.SqlTuningAdvisorTaskSummaryReportIndexFindingSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningAdvisorTaskSummaryReport): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskInfo": obj.taskInfo
          ? model.SqlTuningAdvisorTaskSummaryReportTaskInfo.getDeserializedJsonObj(obj.taskInfo)
          : undefined,
        "statistics": obj.statistics
          ? model.SqlTuningAdvisorTaskSummaryReportStatistics.getDeserializedJsonObj(obj.statistics)
          : undefined,
        "objectStatFindings": obj.objectStatFindings
          ? obj.objectStatFindings.map(item => {
              return model.SqlTuningAdvisorTaskSummaryReportObjectStatFindingSummary.getDeserializedJsonObj(
                item
              );
            })
          : undefined,
        "indexFindings": obj.indexFindings
          ? obj.indexFindings.map(item => {
              return model.SqlTuningAdvisorTaskSummaryReportIndexFindingSummary.getDeserializedJsonObj(
                item
              );
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
