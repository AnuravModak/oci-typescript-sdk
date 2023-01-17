/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * Details of the tag that is being created.
 *
 */
export interface Tag {
  /**
   * The name you assign to the tag during creation. This is the tag key definition.
   * The name must be unique within the tag namespace and cannot be changed.
   *
   */
  "name": string;
  /**
   * The description assigned to the tag during creation.
   */
  "description"?: string;
  /**
   * Indicates whether the tag is enabled for cost tracking.
   *
   */
  "isCostTracking"?: boolean;
  "validator"?: model.DefaultTagDefinitionValidator | model.EnumTagDefinitionValidator;
}

export namespace Tag {
  export function getJsonObj(obj: Tag): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseTagDefinitionValidator.getJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Tag): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseTagDefinitionValidator.getDeserializedJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
}
