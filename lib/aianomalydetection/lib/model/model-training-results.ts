/**
 * Oracle Cloud AI Services API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * Specifies the details for an Anomaly Detection model trained with MSET.
 */
export interface ModelTrainingResults {
  /**
   * The final-achieved model accuracy metric on individual value level Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fap": number;
  /**
   * The model accuracy metric on timestamp level. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "multivariateFap"?: number;
  /**
   * A boolean value to indicate if train goal/targetFap is achieved for trained model
   */
  "isTrainingGoalAchieved"?: boolean;
  /**
   * A warning message to explain the reason when targetFap cannot be achieved for trained model
   */
  "warning"?: string;
  /**
   * The list of signal details.
   */
  "signalDetails"?: Array<model.PerSignalDetails>;
  "rowReductionDetails"?: model.RowReductionDetails;
}

export namespace ModelTrainingResults {
  export function getJsonObj(obj: ModelTrainingResults): object {
    const jsonObj = {
      ...obj,
      ...{
        "signalDetails": obj.signalDetails
          ? obj.signalDetails.map(item => {
              return model.PerSignalDetails.getJsonObj(item);
            })
          : undefined,
        "rowReductionDetails": obj.rowReductionDetails
          ? model.RowReductionDetails.getJsonObj(obj.rowReductionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelTrainingResults): object {
    const jsonObj = {
      ...obj,
      ...{
        "signalDetails": obj.signalDetails
          ? obj.signalDetails.map(item => {
              return model.PerSignalDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "rowReductionDetails": obj.rowReductionDetails
          ? model.RowReductionDetails.getDeserializedJsonObj(obj.rowReductionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}