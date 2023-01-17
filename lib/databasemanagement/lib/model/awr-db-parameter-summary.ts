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
 * The summary of the AWR change history data for a single database parameter.
 */
export interface AwrDbParameterSummary {
  /**
   * The name of the parameter.
   */
  "name": string;
  /**
   * The database instance number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceNumber"?: number;
  /**
   * The parameter value when the period began.
   */
  "beginValue"?: string;
  /**
   * The parameter value when the period ended.
   */
  "endValue"?: string;
  /**
   * Indicates whether the parameter value changed within the period.
   */
  "isChanged"?: boolean;
  /**
   * Indicates whether the parameter has been modified after instance startup:
   *  - MODIFIED - Parameter has been modified with ALTER SESSION
   *  - SYSTEM_MOD - Parameter has been modified with ALTER SYSTEM (which causes all the currently logged in sessions\u2019 values to be modified)
   *  - FALSE - Parameter has not been modified after instance startup
   *
   */
  "valueModified"?: string;
  /**
   * Indicates whether the parameter value in the end snapshot is the default.
   */
  "isDefault"?: boolean;
}

export namespace AwrDbParameterSummary {
  export function getJsonObj(obj: AwrDbParameterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDbParameterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
