/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Summary of the progress of a Migration Job.
 *
 */
export interface MigrationJobProgressSummary {
  /**
   * Current phase of the job.
   *
   */
  "currentPhase": model.OdmsJobPhases;
  /**
   * Current status of the job.
   *
   */
  "currentStatus": model.JobPhaseStatus;
  /**
   * Job progress percentage (0 - 100)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "jobProgress": number;
}

export namespace MigrationJobProgressSummary {
  export function getJsonObj(obj: MigrationJobProgressSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MigrationJobProgressSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
