/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The preferences for the flatten operation.
 */
export interface FlattenProjectionPreferences {
  /**
   * Property defining whether to create array indexes in flattened result.
   */
  "createArrayIndex": FlattenProjectionPreferences.CreateArrayIndex;
  /**
   * Property defining whether to retain all attributes in flattened result.
   */
  "retainAllAttributes": FlattenProjectionPreferences.RetainAllAttributes;
  /**
   * Property defining whether to ignore null values in flattened result.
   */
  "ignoreNullValues": FlattenProjectionPreferences.IgnoreNullValues;
  /**
   * Property defining whether to retain parent name lineage.
   */
  "retainParentNameLineage": FlattenProjectionPreferences.RetainParentNameLineage;
}

export namespace FlattenProjectionPreferences {
  export enum CreateArrayIndex {
    Allow = "ALLOW",
    DoNotAllow = "DO_NOT_ALLOW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RetainAllAttributes {
    Allow = "ALLOW",
    DoNotAllow = "DO_NOT_ALLOW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IgnoreNullValues {
    Allow = "ALLOW",
    DoNotAllow = "DO_NOT_ALLOW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RetainParentNameLineage {
    Allow = "ALLOW",
    DoNotAllow = "DO_NOT_ALLOW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FlattenProjectionPreferences): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FlattenProjectionPreferences): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
