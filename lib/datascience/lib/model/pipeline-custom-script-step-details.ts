/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The type of step where user provides the step artifact to be executed on an execution engine managed by the pipelines service.
 */
export interface PipelineCustomScriptStepDetails extends model.PipelineStepDetails {
  "stepInfrastructureConfigurationDetails"?: model.PipelineInfrastructureConfigurationDetails;
  /**
   * A flag to indicate whether the artifact has been uploaded for this step or not.
   */
  "isArtifactUploaded"?: boolean;

  "stepType": string;
}

export namespace PipelineCustomScriptStepDetails {
  export function getJsonObj(
    obj: PipelineCustomScriptStepDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PipelineStepDetails.getJsonObj(obj) as PipelineCustomScriptStepDetails)),
      ...{
        "stepInfrastructureConfigurationDetails": obj.stepInfrastructureConfigurationDetails
          ? model.PipelineInfrastructureConfigurationDetails.getJsonObj(
              obj.stepInfrastructureConfigurationDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export const stepType = "CUSTOM_SCRIPT";
  export function getDeserializedJsonObj(
    obj: PipelineCustomScriptStepDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PipelineStepDetails.getDeserializedJsonObj(
            obj
          ) as PipelineCustomScriptStepDetails)),
      ...{
        "stepInfrastructureConfigurationDetails": obj.stepInfrastructureConfigurationDetails
          ? model.PipelineInfrastructureConfigurationDetails.getDeserializedJsonObj(
              obj.stepInfrastructureConfigurationDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}