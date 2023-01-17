/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The configuration for handling schema drift in a Source or Target operator.
 */
export interface SchemaDriftConfig {
  /**
   * The setting to handle extra columns/fields.  NULL_FILLUP means that nulls will be loaded into the target for extra columns.
   */
  "extraColumnHandling"?: SchemaDriftConfig.ExtraColumnHandling;
  /**
   * The setting to handle missing columns/fields.  NULL_SELECT means that null values will be selected from the source for missing columns.
   */
  "missingColumnHandling"?: SchemaDriftConfig.MissingColumnHandling;
  /**
   * The setting to handle columns/fields with changed data types.
   */
  "dataTypeChangeHandling"?: SchemaDriftConfig.DataTypeChangeHandling;
  /**
   * If true, display a validation warning for schema changes, even if they are allowed.
   */
  "isValidationWarningIfAllowed"?: boolean;
}

export namespace SchemaDriftConfig {
  export enum ExtraColumnHandling {
    Allow = "ALLOW",
    NullFillup = "NULL_FILLUP",
    DoNotAllow = "DO_NOT_ALLOW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MissingColumnHandling {
    Allow = "ALLOW",
    NullSelect = "NULL_SELECT",
    DoNotAllow = "DO_NOT_ALLOW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DataTypeChangeHandling {
    Allow = "ALLOW",
    DoCastIfPossible = "DO_CAST_IF_POSSIBLE",
    DoNotAllow = "DO_NOT_ALLOW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SchemaDriftConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SchemaDriftConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
