/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Details used to add a route distribution statement.
 *
 */
export interface AddDrgRouteDistributionStatementDetails {
  /**
   * The action is applied only if all of the match criteria is met.
   *
   */
  "matchCriteria": Array<model.DrgRouteDistributionMatchCriteria>;
  /**
   * Accept: import/export the route \"as is\"
   *
   */
  "action": AddDrgRouteDistributionStatementDetails.Action;
  /**
   * This field is used to specify the priority of each statement in a route distribution.
   * The priority will be represented as a number between 0 and 65535 where a lower number
   * indicates a higher priority. When a route is processed, statements are applied in the order
   * defined by their priority. The first matching rule dictates the action that will be taken
   * on the route.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority": number;
}

export namespace AddDrgRouteDistributionStatementDetails {
  export enum Action {
    Accept = "ACCEPT"
  }

  export function getJsonObj(obj: AddDrgRouteDistributionStatementDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchCriteria": obj.matchCriteria
          ? obj.matchCriteria.map(item => {
              return model.DrgRouteDistributionMatchCriteria.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddDrgRouteDistributionStatementDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchCriteria": obj.matchCriteria
          ? obj.matchCriteria.map(item => {
              return model.DrgRouteDistributionMatchCriteria.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
