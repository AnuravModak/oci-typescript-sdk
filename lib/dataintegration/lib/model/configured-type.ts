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
 * A `ConfiguredType` represents a type that has built-in configuration to the type itself. An example is a `SSN` type whose basic type is `VARCHAR`, but the type itself also has a built-in configuration like length=10.
 */
export interface ConfiguredType extends model.BaseType {
  /**
   * A wrapped type, may be a string or a BaseType.
   */
  "wrappedType"?: any;
  "configValues"?: model.ConfigValues;
  "configDefinition"?: model.ConfigDefinition;

  "modelType": string;
}

export namespace ConfiguredType {
  export function getJsonObj(obj: ConfiguredType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getJsonObj(obj) as ConfiguredType)),
      ...{
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined,
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "CONFIGURED_TYPE";
  export function getDeserializedJsonObj(obj: ConfiguredType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getDeserializedJsonObj(obj) as ConfiguredType)),
      ...{
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined,
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getDeserializedJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
}
