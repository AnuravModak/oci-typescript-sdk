/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The current lifecycle state of the CA bundle.
 **/
export enum CaBundleLifecycleState {
  Creating = "CREATING",
  Active = "ACTIVE",
  Updating = "UPDATING",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Failed = "FAILED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace CaBundleLifecycleState {
  export function getJsonObj(obj: CaBundleLifecycleState): CaBundleLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(obj: CaBundleLifecycleState): CaBundleLifecycleState {
    return obj;
  }
}
