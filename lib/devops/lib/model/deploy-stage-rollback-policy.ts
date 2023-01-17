/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies the rollback policy. This is initiated on the failure of certain stage types.
 */
export interface DeployStageRollbackPolicy {
  "policyType": string;
}

export namespace DeployStageRollbackPolicy {
  export function getJsonObj(obj: DeployStageRollbackPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "NO_STAGE_ROLLBACK_POLICY":
          return model.NoDeployStageRollbackPolicy.getJsonObj(
            <model.NoDeployStageRollbackPolicy>(<object>jsonObj),
            true
          );
        case "AUTOMATED_STAGE_ROLLBACK_POLICY":
          return model.AutomatedDeployStageRollbackPolicy.getJsonObj(
            <model.AutomatedDeployStageRollbackPolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.policyType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeployStageRollbackPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "NO_STAGE_ROLLBACK_POLICY":
          return model.NoDeployStageRollbackPolicy.getDeserializedJsonObj(
            <model.NoDeployStageRollbackPolicy>(<object>jsonObj),
            true
          );
        case "AUTOMATED_STAGE_ROLLBACK_POLICY":
          return model.AutomatedDeployStageRollbackPolicy.getDeserializedJsonObj(
            <model.AutomatedDeployStageRollbackPolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.policyType}`);
      }
    }
    return jsonObj;
  }
}
