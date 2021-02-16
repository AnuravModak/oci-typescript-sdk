/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The details of a HTTP Redirect configured to redirect traffic from one hostname to another.
 * **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 */
export interface CreateHttpRedirectDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the HTTP Redirects compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name of the HTTP Redirect. The name can be changed and does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The domain from which traffic will be redirected.
   */
  "domain": string;
  /**
   * The redirect target object including all the redirect data.
   */
  "target": model.HttpRedirectTarget;
  /**
   * The response code returned for the redirect to the client. For more information, see [RFC 7231](https://tools.ietf.org/html/rfc7231#section-6.4). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "responseCode"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateHttpRedirectDetails {
  export function getJsonObj(obj: CreateHttpRedirectDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.HttpRedirectTarget.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
}
