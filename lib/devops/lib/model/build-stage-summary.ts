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
 * Specifies the build stage.
 */
export interface BuildStageSummary extends model.BuildPipelineStageSummary {
  /**
   * Image for the build environment.
   */
  "image": string;
  /**
   * The path to the build specification file for this environment. The default location of the file if not specified is build_spec.yaml.
   */
  "buildSpecFile"?: string;
  /**
   * Timeout for the build stage execution. Specify value in seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "stageExecutionTimeoutInSeconds"?: number;
  "buildSourceCollection"?: model.BuildSourceCollection;
  /**
   * Name of the build source where the build_spec.yml file is located. If not specified, the first entry in the build source collection is chosen as primary build source.
   */
  "primaryBuildSource"?: string;
  "privateAccessConfig"?: model.ServiceVnicChannel | model.PrivateEndpointChannel;

  "buildPipelineStageType": string;
}

export namespace BuildStageSummary {
  export function getJsonObj(obj: BuildStageSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildPipelineStageSummary.getJsonObj(obj) as BuildStageSummary)),
      ...{
        "buildSourceCollection": obj.buildSourceCollection
          ? model.BuildSourceCollection.getJsonObj(obj.buildSourceCollection)
          : undefined,

        "privateAccessConfig": obj.privateAccessConfig
          ? model.NetworkChannel.getJsonObj(obj.privateAccessConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const buildPipelineStageType = "BUILD";
  export function getDeserializedJsonObj(
    obj: BuildStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildPipelineStageSummary.getDeserializedJsonObj(obj) as BuildStageSummary)),
      ...{
        "buildSourceCollection": obj.buildSourceCollection
          ? model.BuildSourceCollection.getDeserializedJsonObj(obj.buildSourceCollection)
          : undefined,

        "privateAccessConfig": obj.privateAccessConfig
          ? model.NetworkChannel.getDeserializedJsonObj(obj.privateAccessConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
