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
 * Details to access log file in the specified Object Storage bucket, if any.
 *
 */
export interface LogLocationBucketDetails {
  /**
   * Name of the bucket containing the log file.
   *
   */
  "bucketName": string;
  /**
   * Object Storage namespace.
   *
   */
  "namespace": string;
  /**
   * Log object name.
   *
   */
  "objectName": string;
}

export namespace LogLocationBucketDetails {
  export function getJsonObj(obj: LogLocationBucketDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogLocationBucketDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
