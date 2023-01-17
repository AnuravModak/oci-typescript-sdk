/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
* An object that represents the action of returning a specified response code when the requested HTTP method is not in
* the list of allowed methods for the listener. The load balancer does not forward a disallowed request to the back end
* servers. The default response code is `405 Method Not Allowed`.
* <p>
If you set the response code to `405` or leave it blank, the system adds an \"allow\" response header that contains a
* list of the allowed methods for the listener. If you set the response code to anything other than `405` (or blank),
* the system does not add the \"allow\" response header with a list of allowed methods.
* <p>
This rule applies only to HTTP listeners. No more than one `ControlAccessUsingHttpMethodsRule` object can be present in
* a given listener.
* 
*/
export interface ControlAccessUsingHttpMethodsRule extends model.Rule {
  /**
    * The list of HTTP methods allowed for this listener.
* <p>
By default, you can specify only the standard HTTP methods defined in the
* [HTTP Method Registry](http://www.iana.org/assignments/http-methods/http-methods.xhtml). You can also
* see a list of supported standard HTTP methods in the Load Balancing service documentation at
* [Managing Rule Sets](https://docs.cloud.oracle.com/Content/Balance/Tasks/managingrulesets.htm).
* <p>
Your backend application must be able to handle the methods specified in this list.
* <p>
The list of HTTP methods is extensible. If you need to configure custom HTTP methods, contact
* [My Oracle Support](http://support.oracle.com/) to remove the restriction for your tenancy.
* <p>
Example: [\"GET\", \"PUT\", \"POST\", \"PROPFIND\"]
* 
    */
  "allowedMethods": Array<string>;
  /**
    * The HTTP status code to return when the requested HTTP method is not in the list of allowed methods.
* The associated status line returned with the code is mapped from the standard HTTP specification. The
* default value is `405 (Method Not Allowed)`.
* <p>
Example: 403
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "statusCode"?: number;

  "action": string;
}

export namespace ControlAccessUsingHttpMethodsRule {
  export function getJsonObj(
    obj: ControlAccessUsingHttpMethodsRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Rule.getJsonObj(obj) as ControlAccessUsingHttpMethodsRule)),
      ...{}
    };

    return jsonObj;
  }
  export const action = "CONTROL_ACCESS_USING_HTTP_METHODS";
  export function getDeserializedJsonObj(
    obj: ControlAccessUsingHttpMethodsRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Rule.getDeserializedJsonObj(obj) as ControlAccessUsingHttpMethodsRule)),
      ...{}
    };

    return jsonObj;
  }
}
