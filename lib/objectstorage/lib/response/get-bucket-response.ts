/**
 *
 *
 * OpenAPI spec version: 20160918
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

export interface GetBucketResponse {
  /**
   * Echoes back the value passed in the opc-client-request-id header, for use by clients when debugging.
   */
  "opcClientRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular
   * request, provide this request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The current entity tag (ETag) for the bucket.
   */
  "eTag": string;
  /**
   * The returned model.Bucket instance, or null if {@link #isNotModified()} is true.
   */
  "bucket": model.Bucket;

  /**
   * Flag to indicate whether or not the object was modified.  If this is true,
   * the getter for the object itself will return null.  Callers should check this
   * if they specified one of the request params that might result in a conditional
   * response (like 'if-match'/'if-none-match').
   */
  "isNotModified": boolean;
}
