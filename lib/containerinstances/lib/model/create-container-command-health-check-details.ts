/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * Container Health Check Command type.
 */
export interface CreateContainerCommandHealthCheckDetails
  extends model.CreateContainerHealthCheckDetails {
  /**
   * The list of strings which will be concatenated to a single command for checking container's status.
   *
   */
  "command": Array<string>;

  "healthCheckType": string;
}

export namespace CreateContainerCommandHealthCheckDetails {
  export function getJsonObj(
    obj: CreateContainerCommandHealthCheckDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerHealthCheckDetails.getJsonObj(
            obj
          ) as CreateContainerCommandHealthCheckDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const healthCheckType = "COMMAND";
  export function getDeserializedJsonObj(
    obj: CreateContainerCommandHealthCheckDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerHealthCheckDetails.getDeserializedJsonObj(
            obj
          ) as CreateContainerCommandHealthCheckDetails)),
      ...{}
    };

    return jsonObj;
  }
}
