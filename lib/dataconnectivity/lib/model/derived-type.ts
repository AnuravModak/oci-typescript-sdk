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
 * A `DerivedType` object represents a more complex type that is derived from a set of simple types, for example an `Address` or `SSN` data type.
 */
export interface DerivedType extends model.BaseType {
  "modelType": string;
}

export namespace DerivedType {
  export function getJsonObj(obj: DerivedType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getJsonObj(obj) as DerivedType)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "DERIVED_TYPE";
  export function getDeserializedJsonObj(obj: DerivedType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getDeserializedJsonObj(obj) as DerivedType)),
      ...{}
    };

    return jsonObj;
  }
}
