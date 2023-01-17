/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * An operator for task
 */
export interface TaskOperator extends model.Operator {
  /**
   * The number of retry attempts. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retryAttempts"?: number;
  /**
   * The unit for the retry delay.
   */
  "retryDelayUnit"?: TaskOperator.RetryDelayUnit;
  /**
   * The retry delay, the unit for measurement is in the property retry delay unit. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retryDelay"?: number;
  /**
   * The expected duration for the task run. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "expectedDuration"?: number;
  /**
   * The expected duration unit of measure.
   */
  "expectedDurationUnit"?: TaskOperator.ExpectedDurationUnit;
  /**
   * The type of the task referenced in the task property.
   */
  "taskType"?: TaskOperator.TaskType;
  "task"?:
    | model.TaskFromPipelineTaskDetails
    | model.TaskFromIntegrationTaskDetails
    | model.TaskFromSQLTaskDetails
    | model.TaskFromRestTaskDetails
    | model.TaskFromOCIDataflowTaskDetails
    | model.TaskFromDataLoaderTaskDetails;
  /**
   * The merge condition. The conditions are
   * ALL_SUCCESS - All the preceeding operators need to be successful.
   * ALL_FAILED - All the preceeding operators should have failed.
   * ALL_COMPLETE - All the preceeding operators should have completed. It could have executed successfully or failed.
   *
   */
  "triggerRule"?: TaskOperator.TriggerRule;
  "configProviderDelegate"?: model.ConfigProvider;

  "modelType": string;
}

export namespace TaskOperator {
  export enum RetryDelayUnit {
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS",
    Days = "DAYS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExpectedDurationUnit {
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS",
    Days = "DAYS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TaskType {
    PipelineTask = "PIPELINE_TASK",
    IntegrationTask = "INTEGRATION_TASK",
    DataLoaderTask = "DATA_LOADER_TASK",
    SqlTask = "SQL_TASK",
    OciDataflowTask = "OCI_DATAFLOW_TASK",
    RestTask = "REST_TASK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TriggerRule {
    AllSuccess = "ALL_SUCCESS",
    AllFailed = "ALL_FAILED",
    AllComplete = "ALL_COMPLETE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TaskOperator, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as TaskOperator)),
      ...{
        "task": obj.task ? model.Task.getJsonObj(obj.task) : undefined,

        "configProviderDelegate": obj.configProviderDelegate
          ? model.ConfigProvider.getJsonObj(obj.configProviderDelegate)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "TASK_OPERATOR";
  export function getDeserializedJsonObj(obj: TaskOperator, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getDeserializedJsonObj(obj) as TaskOperator)),
      ...{
        "task": obj.task ? model.Task.getDeserializedJsonObj(obj.task) : undefined,

        "configProviderDelegate": obj.configProviderDelegate
          ? model.ConfigProvider.getDeserializedJsonObj(obj.configProviderDelegate)
          : undefined
      }
    };

    return jsonObj;
  }
}
