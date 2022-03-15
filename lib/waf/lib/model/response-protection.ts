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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Module that allows to enable OCI-managed protection capabilities for HTTP responses.
 */
export interface ResponseProtection {
  /**
   * Ordered list of ProtectionRules. Rules are executed in order of appearance in this array.
   * ProtectionRules in this array can only use protection capabilities of RESPONSE_PROTECTION_CAPABILITY type.
   *
   */
  "rules"?: Array<model.ProtectionRule>;
}

export namespace ResponseProtection {
  export function getJsonObj(obj: ResponseProtection): object {
    const jsonObj = {
      ...obj,
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.ProtectionRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResponseProtection): object {
    const jsonObj = {
      ...obj,
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.ProtectionRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}