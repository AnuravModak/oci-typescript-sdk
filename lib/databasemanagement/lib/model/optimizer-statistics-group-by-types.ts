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
 * Indicates which type of Gather Optimizer Statistics Collection or Optimizer Statistics Advisor tasks or its objects should be aggregated.
 **/
export enum OptimizerStatisticsGroupByTypes {
  TaskStatus = "TASK_STATUS",
  TaskObjectsStatus = "TASK_OBJECTS_STATUS",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OptimizerStatisticsGroupByTypes {
  export function getJsonObj(
    obj: OptimizerStatisticsGroupByTypes
  ): OptimizerStatisticsGroupByTypes {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: OptimizerStatisticsGroupByTypes
  ): OptimizerStatisticsGroupByTypes {
    return obj;
  }
}
