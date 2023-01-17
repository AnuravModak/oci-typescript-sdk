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
 * The execution progress details of a deployment.
 */
export interface DeploymentExecutionProgress {
  /**
   * Time the deployment is started. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeStarted"?: Date;
  /**
   * Time the deployment is finished. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeFinished"?: Date;
  /**
   * Map of stage OCIDs to deploy stage execution progress model.
   */
  "deployStageExecutionProgress"?: { [key: string]: model.DeployStageExecutionProgress };
}

export namespace DeploymentExecutionProgress {
  export function getJsonObj(obj: DeploymentExecutionProgress): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStageExecutionProgress": obj.deployStageExecutionProgress
          ? common.mapContainer(
              obj.deployStageExecutionProgress,
              model.DeployStageExecutionProgress.getJsonObj
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeploymentExecutionProgress): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStageExecutionProgress": obj.deployStageExecutionProgress
          ? common.mapContainer(
              obj.deployStageExecutionProgress,
              model.DeployStageExecutionProgress.getDeserializedJsonObj
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
