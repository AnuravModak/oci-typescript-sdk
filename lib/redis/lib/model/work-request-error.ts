/**
 * Redis Service API
 * Use the Redis Service API to create and manage Redis clusters. A Redis cluster is a memory-based storage solution. For more information, see [OCI Caching Service with Redis](/iaas/Content/redis/home.htm).
 * OpenAPI spec version: 20220315
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
 * An error encountered while executing an operation that is tracked by a work request.
 */
export interface WorkRequestError {
  /**
   * A machine-usable code for the error that occured. Error codes are listed at [API Errors](https://docs.cloud.oracle.com/iaas/Content/API/References/apierrors.htm).
   *
   */
  "code": string;
  /**
   * A human-readable error string for the error that occured.
   */
  "message": string;
  /**
   * The time and time the error occured.
   */
  "timestamp": Date;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
