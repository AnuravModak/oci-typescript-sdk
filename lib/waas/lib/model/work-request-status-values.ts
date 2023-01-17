/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The possible status values for a work request.
 **/
export enum WorkRequestStatusValues {
  Accepted = "ACCEPTED",
  InProgress = "IN_PROGRESS",
  Failed = "FAILED",
  Succeeded = "SUCCEEDED",
  Canceling = "CANCELING",
  Canceled = "CANCELED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace WorkRequestStatusValues {
  export function getJsonObj(obj: WorkRequestStatusValues): WorkRequestStatusValues {
    return obj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestStatusValues): WorkRequestStatusValues {
    return obj;
  }
}
