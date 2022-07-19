/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Details of EnvironmentLimits.
 */
export interface FusionEnvironmentFamilyLimitsAndUsage {
  "productionLimitAndUsage": model.LimitAndUsage;
  "testLimitAndUsage": model.LimitAndUsage;
  "developmentLimitAndUsage": model.LimitAndUsage;
}

export namespace FusionEnvironmentFamilyLimitsAndUsage {
  export function getJsonObj(obj: FusionEnvironmentFamilyLimitsAndUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "productionLimitAndUsage": obj.productionLimitAndUsage
          ? model.LimitAndUsage.getJsonObj(obj.productionLimitAndUsage)
          : undefined,
        "testLimitAndUsage": obj.testLimitAndUsage
          ? model.LimitAndUsage.getJsonObj(obj.testLimitAndUsage)
          : undefined,
        "developmentLimitAndUsage": obj.developmentLimitAndUsage
          ? model.LimitAndUsage.getJsonObj(obj.developmentLimitAndUsage)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FusionEnvironmentFamilyLimitsAndUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "productionLimitAndUsage": obj.productionLimitAndUsage
          ? model.LimitAndUsage.getDeserializedJsonObj(obj.productionLimitAndUsage)
          : undefined,
        "testLimitAndUsage": obj.testLimitAndUsage
          ? model.LimitAndUsage.getDeserializedJsonObj(obj.testLimitAndUsage)
          : undefined,
        "developmentLimitAndUsage": obj.developmentLimitAndUsage
          ? model.LimitAndUsage.getDeserializedJsonObj(obj.developmentLimitAndUsage)
          : undefined
      }
    };

    return jsonObj;
  }
}
