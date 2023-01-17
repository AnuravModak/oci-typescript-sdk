/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
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
 * Access levels.
 **/
export enum AccessLevel {
  Accessible = "ACCESSIBLE",
  Restricted = "RESTRICTED"
}

export namespace AccessLevel {
  export function getJsonObj(obj: AccessLevel): AccessLevel {
    return obj;
  }
  export function getDeserializedJsonObj(obj: AccessLevel): AccessLevel {
    return obj;
  }
}
