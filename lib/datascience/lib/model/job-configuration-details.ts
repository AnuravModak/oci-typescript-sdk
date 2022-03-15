/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The job configuration details
 *
 */
export interface JobConfigurationDetails {
  "jobType": string;
}

export namespace JobConfigurationDetails {
  export function getJsonObj(obj: JobConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("jobType" in obj && obj.jobType) {
      switch (obj.jobType) {
        case "DEFAULT":
          return model.DefaultJobConfigurationDetails.getJsonObj(
            <model.DefaultJobConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.jobType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("jobType" in obj && obj.jobType) {
      switch (obj.jobType) {
        case "DEFAULT":
          return model.DefaultJobConfigurationDetails.getDeserializedJsonObj(
            <model.DefaultJobConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.jobType);
      }
    }
    return jsonObj;
  }
}