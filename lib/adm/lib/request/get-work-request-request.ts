/**
 *
 *
 * OpenAPI spec version: 20220421
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/adm/GetWorkRequest.ts.html |here} to see how to use GetWorkRequestRequest.
 */
export interface GetWorkRequestRequest extends common.BaseRequest {
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the asynchronous request.
   */
  "workRequestId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
