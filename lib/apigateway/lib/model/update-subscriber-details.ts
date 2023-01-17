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
 * The information to be updated.
 */
export interface UpdateSubscriberDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: `My new resource`
* 
    */
  "displayName"?: string;
  /**
   * The clients belonging to the subscriber.
   */
  "clients"?: Array<model.Client>;
  /**
   * An array of [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)s of usage
   * plan resources.
   *
   */
  "usagePlans"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair
* with no predefined name, type, or namespace. For more information, see
* [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see
* [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateSubscriberDetails {
  export function getJsonObj(obj: UpdateSubscriberDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "clients": obj.clients
          ? obj.clients.map(item => {
              return model.Client.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSubscriberDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "clients": obj.clients
          ? obj.clients.map(item => {
              return model.Client.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
