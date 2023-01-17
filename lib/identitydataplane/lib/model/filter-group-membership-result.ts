/**
 * Identity Service
 * API for the Identity Dataplane
 * OpenAPI spec version: v1
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

export interface FilterGroupMembershipResult {
  /**
   * Return passed-in resolved principal object
   */
  "principal": model.Principal;
  /**
   * An array of group or dynamic group Ids which present the intersection between the passed-in group/dynamic-group and the actual group/dynamic-group the resovled principal belongs to.
   */
  "groupIds": Array<string>;
}

export namespace FilterGroupMembershipResult {
  export function getJsonObj(obj: FilterGroupMembershipResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "principal": obj.principal ? model.Principal.getJsonObj(obj.principal) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FilterGroupMembershipResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "principal": obj.principal
          ? model.Principal.getDeserializedJsonObj(obj.principal)
          : undefined
      }
    };

    return jsonObj;
  }
}
