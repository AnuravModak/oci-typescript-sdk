/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * How a response from a backend is cached in the Response Cache.
 *
 */
export interface FixedTTLResponseCacheStorePolicy extends model.ResponseCacheStorePolicy {
  /**
   * Sets the number of seconds for a response from a backend being stored in the Response Cache before it expires.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeToLiveInSeconds": number;

  "type": string;
}

export namespace FixedTTLResponseCacheStorePolicy {
  export function getJsonObj(
    obj: FixedTTLResponseCacheStorePolicy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResponseCacheStorePolicy.getJsonObj(obj) as FixedTTLResponseCacheStorePolicy)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "FIXED_TTL_STORE_POLICY";
  export function getDeserializedJsonObj(
    obj: FixedTTLResponseCacheStorePolicy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResponseCacheStorePolicy.getDeserializedJsonObj(
            obj
          ) as FixedTTLResponseCacheStorePolicy)),
      ...{}
    };

    return jsonObj;
  }
}
