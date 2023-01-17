/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
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
 * An object that represents an action which does not stop the execution of rules in current module,
 * just emits a log message documenting result of rule execution.
 *
 */
export interface CheckAction extends model.Action {
  "type": string;
}

export namespace CheckAction {
  export function getJsonObj(obj: CheckAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getJsonObj(obj) as CheckAction)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "CHECK";
  export function getDeserializedJsonObj(obj: CheckAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getDeserializedJsonObj(obj) as CheckAction)),
      ...{}
    };

    return jsonObj;
  }
}
