/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20211001
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
 * Possible lifecycle states.
 **/
export enum LifecycleState {
  Creating = "CREATING",
  Updating = "UPDATING",
  Active = "ACTIVE",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Failed = "FAILED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace LifecycleState {
  export function getJsonObj(obj: LifecycleState): LifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(obj: LifecycleState): LifecycleState {
    return obj;
  }
}
