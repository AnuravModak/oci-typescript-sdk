/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The log rule task.
 *
 */
export interface LogRuleTaskDetails extends model.TaskDetails {
  /**
   * A filter or mask to limit the source used in the flow defined by the service connector.
   *
   */
  "condition": string;

  "kind": string;
}

export namespace LogRuleTaskDetails {
  export function getJsonObj(obj: LogRuleTaskDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TaskDetails.getJsonObj(obj) as LogRuleTaskDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "logRule";
}