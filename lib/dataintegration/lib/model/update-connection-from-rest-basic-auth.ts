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
 * The details to update a basic auth rest connection.
 */
export interface UpdateConnectionFromRestBasicAuth extends model.UpdateConnectionDetails {
  /**
   * Username for the connection.
   */
  "username": string;
  "passwordSecret": model.SensitiveAttribute;
  /**
   * Optional header name if used other than default header(Authorization).
   */
  "authHeader"?: string;

  "modelType": string;
}

export namespace UpdateConnectionFromRestBasicAuth {
  export function getJsonObj(
    obj: UpdateConnectionFromRestBasicAuth,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateConnectionFromRestBasicAuth)),
      ...{
        "passwordSecret": obj.passwordSecret
          ? model.SensitiveAttribute.getJsonObj(obj.passwordSecret)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "REST_BASIC_AUTH_CONNECTION";
  export function getDeserializedJsonObj(
    obj: UpdateConnectionFromRestBasicAuth,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateConnectionFromRestBasicAuth)),
      ...{
        "passwordSecret": obj.passwordSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.passwordSecret)
          : undefined
      }
    };

    return jsonObj;
  }
}
