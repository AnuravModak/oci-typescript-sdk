/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
 * The configuration details of the health checker.
 */
export interface UpdateHealthCheckerDetails {
  /**
    * The protocol that the health check must use; either HTTP, UDP, or TCP.
* <p>
Example: `HTTP`
* 
    */
  "protocol"?: model.HealthCheckProtocols;
  /**
    * The backend server port against which to run the health check.
* <p>
Example: `8080`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "port"?: number;
  /**
    * The number of retries to attempt before a backend server is considered \"unhealthy\". This number also applies
* when recovering a server to the \"healthy\" state.
* <p>
Example: `3`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "retries"?: number;
  /**
    * The maximum time, in milliseconds, to wait for a reply to a health check. A health check is successful only if a reply
* returns within this timeout period.
* <p>
Example: `3000`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "timeoutInMillis"?: number;
  /**
    * The interval between health checks, in milliseconds.
* <p>
Example: `10000`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "intervalInMillis"?: number;
  /**
    * The path against which to run the health check.
* <p>
Example: `/healthcheck`
* 
    */
  "urlPath"?: string;
  /**
    * A regular expression for parsing the response body from the backend server.
* <p>
Example: `^((?!false).|\\s)*$`
* 
    */
  "responseBodyRegex"?: string;
  /**
    * The status code a healthy backend server should return. If you configure the health check policy to use the HTTP protocol,
* then you can use common HTTP status codes such as \"200\".
* <p>
Example: `200`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "returnCode"?: number;
  /**
   * Base64 encoded pattern to be sent as UDP or TCP health check probe.
   */
  "requestData"?: string;
  /**
   * Base64 encoded pattern to be validated as UDP or TCP health check probe response.
   */
  "responseData"?: string;
}

export namespace UpdateHealthCheckerDetails {
  export function getJsonObj(obj: UpdateHealthCheckerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateHealthCheckerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
