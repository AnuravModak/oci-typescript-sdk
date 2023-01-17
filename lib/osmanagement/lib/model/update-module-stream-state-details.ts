/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * A complete description of the state of modules on a managed instance
 */
export interface UpdateModuleStreamStateDetails {
  /**
   * The modules known to a managed instance
   */
  "modules"?: Array<model.UpdateModuleDetails>;
}

export namespace UpdateModuleStreamStateDetails {
  export function getJsonObj(obj: UpdateModuleStreamStateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modules": obj.modules
          ? obj.modules.map(item => {
              return model.UpdateModuleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateModuleStreamStateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modules": obj.modules
          ? obj.modules.map(item => {
              return model.UpdateModuleDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
