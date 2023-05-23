/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, agent configurations, log data models,
continuous queries, and managed continuous queries.

For more information, see [Logging Overview](/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * Categories for resources.
 */
export interface Category {
  /**
   * Category name.
   */
  "name"?: string;
  /**
   * Category display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Parameters the category supports.
   */
  "parameters"?: Array<model.Parameter>;
}

export namespace Category {
  export function getJsonObj(obj: Category): object {
    const jsonObj = {
      ...obj,
      ...{
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Category): object {
    const jsonObj = {
      ...obj,
      ...{
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
