/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies wait criteria for the Wait stage.
 */
export interface UpdateWaitCriteriaDetails {
  "waitType": string;
}

export namespace UpdateWaitCriteriaDetails {
  export function getJsonObj(obj: UpdateWaitCriteriaDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("waitType" in obj && obj.waitType) {
      switch (obj.waitType) {
        case "ABSOLUTE_WAIT":
          return model.UpdateAbsoluteWaitCriteriaDetails.getJsonObj(
            <model.UpdateAbsoluteWaitCriteriaDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.waitType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateWaitCriteriaDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("waitType" in obj && obj.waitType) {
      switch (obj.waitType) {
        case "ABSOLUTE_WAIT":
          return model.UpdateAbsoluteWaitCriteriaDetails.getDeserializedJsonObj(
            <model.UpdateAbsoluteWaitCriteriaDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.waitType);
      }
    }
    return jsonObj;
  }
}