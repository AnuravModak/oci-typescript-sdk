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
 * A usage plan entitlement, comprising of rate limits, quotas and the deployments they are applied to.
 *
 */
export interface Entitlement {
  /**
   * An entitlement name, unique within a usage plan.
   *
   */
  "name": string;
  /**
   * A user-friendly description. To provide some insight about the resource.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  "rateLimit"?: model.RateLimit;
  "quota"?: model.Quota;
  /**
   * A collection of targeted deployments that the entitlement will be applied to.
   *
   */
  "targets"?: Array<model.EntitlementTarget>;
}

export namespace Entitlement {
  export function getJsonObj(obj: Entitlement): object {
    const jsonObj = {
      ...obj,
      ...{
        "rateLimit": obj.rateLimit ? model.RateLimit.getJsonObj(obj.rateLimit) : undefined,
        "quota": obj.quota ? model.Quota.getJsonObj(obj.quota) : undefined,
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.EntitlementTarget.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Entitlement): object {
    const jsonObj = {
      ...obj,
      ...{
        "rateLimit": obj.rateLimit
          ? model.RateLimit.getDeserializedJsonObj(obj.rateLimit)
          : undefined,
        "quota": obj.quota ? model.Quota.getDeserializedJsonObj(obj.quota) : undefined,
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.EntitlementTarget.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
