/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/core/AttachInstancePoolInstance.ts.html |here} to see how to use AttachInstancePoolInstanceRequest.
 */
export interface AttachInstancePoolInstanceRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the instance pool.
   */
  "instancePoolId": string;
  /**
   * Attach an instance to a pool
   */
  "attachInstancePoolInstanceDetails": model.AttachInstancePoolInstanceDetails;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations (for example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * may be rejected).
   *
   */
  "opcRetryToken"?: string;
}