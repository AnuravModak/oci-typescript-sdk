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
 * The details of a job execution.
 */
export interface JobExecution {
  /**
   * The identifier of the job execution.
   */
  "id": string;
  /**
   * The name of the job execution.
   */
  "name": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the parent job resides.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database Group where the parent job has to be executed.
   */
  "managedDatabaseGroupId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database associated with the job execution.
   */
  "managedDatabaseId": string;
  /**
   * The name of the Managed Database associated with the job execution.
   */
  "managedDatabaseName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the parent job.
   */
  "jobId": string;
  /**
   * The name of the parent job.
   */
  "jobName": string;
  /**
   * The identifier of the associated job run.
   */
  "jobRunId": string;
  /**
   * The status of the job execution.
   */
  "status": JobExecution.Status;
  /**
   * The error message that is returned if the job execution fails. Null is returned if the job is
   * still running or if the job execution is successful.
   *
   */
  "errorMessage"?: string;
  "resultDetails"?: model.ObjectStorageJobExecutionResultDetails;
  /**
   * The date and time when the job execution was created.
   */
  "timeCreated": Date;
  /**
   * The date and time when the job execution completed.
   */
  "timeCompleted"?: Date;
}

export namespace JobExecution {
  export enum Status {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JobExecution): object {
    const jsonObj = {
      ...obj,
      ...{
        "resultDetails": obj.resultDetails
          ? model.JobExecutionResultDetails.getJsonObj(obj.resultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
