/**
 *
 *
 * OpenAPI spec version: 20220919
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudmigrations/GetReplicationSchedule.ts.html |here} to see how to use GetReplicationScheduleRequest.
 */
export interface GetReplicationScheduleRequest extends common.BaseRequest {
  /**
   * Unique replication schedule identifier in path
   */
  "replicationScheduleId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
