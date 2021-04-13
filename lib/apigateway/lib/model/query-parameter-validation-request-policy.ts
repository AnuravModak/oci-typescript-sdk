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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Validate the URL query parameters on the incoming API requests on a specific route.
 */
export interface QueryParameterValidationRequestPolicy {
  "parameters"?: Array<model.QueryParameterValidationItem>;
  /**
    * Validation behavior mode.
* <p>
In `ENFORCING` mode, upon a validation failure, the request will be rejected with a 4xx response
* and not sent to the backend.
* <p>
In `PERMISSIVE` mode, the result of the validation will be exposed as metrics while the request
* will follow the normal path.
* <p>
`DISABLED` type turns the validation off.
* 
    */
  "validationMode"?: QueryParameterValidationRequestPolicy.ValidationMode;
}

export namespace QueryParameterValidationRequestPolicy {
  export enum ValidationMode {
    Enforcing = "ENFORCING",
    Permissive = "PERMISSIVE",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: QueryParameterValidationRequestPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.QueryParameterValidationItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
