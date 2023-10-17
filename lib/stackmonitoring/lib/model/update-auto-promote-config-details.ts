/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Change the details of an AUTO_PROMOTE config
 *
 */
export interface UpdateAutoPromoteConfigDetails extends model.UpdateConfigDetails {
  /**
   * True if automatic promotion is enabled, false if it is not enabled.
   */
  "isEnabled"?: boolean;

  "configType": string;
}

export namespace UpdateAutoPromoteConfigDetails {
  export function getJsonObj(
    obj: UpdateAutoPromoteConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigDetails.getJsonObj(obj) as UpdateAutoPromoteConfigDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configType = "AUTO_PROMOTE";
  export function getDeserializedJsonObj(
    obj: UpdateAutoPromoteConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigDetails.getDeserializedJsonObj(
            obj
          ) as UpdateAutoPromoteConfigDetails)),
      ...{}
    };

    return jsonObj;
  }
}