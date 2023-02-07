/**
 *
 *
 * OpenAPI spec version: 20210201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/queue/UpdateMessage.ts.html |here} to see how to use UpdateMessageRequest.
 */
export interface UpdateMessageRequest extends common.BaseRequest {
  /**
   * unique Queue identifier
   */
  "queueId": string;
  /**
   * The receipt of the message retrieved from a GetMessages call.
   */
  "messageReceipt": string;
  /**
   * Details for the message to update.
   */
  "updateMessageDetails": model.UpdateMessageDetails;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}