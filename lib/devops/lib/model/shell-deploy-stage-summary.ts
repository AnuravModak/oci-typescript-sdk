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
 * Specifies the shell stage.
 */
export interface ShellDeployStageSummary extends model.DeployStageSummary {
  "containerConfig": model.ContainerInstanceConfig;
  /**
   * The OCID of the artifact that contains the command specification.
   */
  "commandSpecDeployArtifactId": string;
  /**
   * Time to wait for execution of a shell stage. Defaults to 36000 seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds"?: number;

  "deployStageType": string;
}

export namespace ShellDeployStageSummary {
  export function getJsonObj(obj: ShellDeployStageSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getJsonObj(obj) as ShellDeployStageSummary)),
      ...{
        "containerConfig": obj.containerConfig
          ? model.ContainerConfig.getJsonObj(obj.containerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "SHELL";
  export function getDeserializedJsonObj(
    obj: ShellDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getDeserializedJsonObj(obj) as ShellDeployStageSummary)),
      ...{
        "containerConfig": obj.containerConfig
          ? model.ContainerConfig.getDeserializedJsonObj(obj.containerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
