/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of the Optimizer Statistics Advisor findings and recommendations.
 */
export interface Recommendation {
  /**
   * An overview of the Optimizer Statistics Advisor recommendation.
   */
  "message": string;
  "example"?: model.RecommendationExample;
  /**
   * The rationale of the recommendation.
   */
  "rationales"?: Array<model.RecommendationRationale>;
}

export namespace Recommendation {
  export function getJsonObj(obj: Recommendation): object {
    const jsonObj = {
      ...obj,
      ...{
        "example": obj.example ? model.RecommendationExample.getJsonObj(obj.example) : undefined,
        "rationales": obj.rationales
          ? obj.rationales.map(item => {
              return model.RecommendationRationale.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Recommendation): object {
    const jsonObj = {
      ...obj,
      ...{
        "example": obj.example
          ? model.RecommendationExample.getDeserializedJsonObj(obj.example)
          : undefined,
        "rationales": obj.rationales
          ? obj.rationales.map(item => {
              return model.RecommendationRationale.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
