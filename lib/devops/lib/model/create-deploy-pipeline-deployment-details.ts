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
 * Details of the new deployment to be created that will run all the stages in the pipeline.
 */
export interface CreateDeployPipelineDeploymentDetails extends model.CreateDeploymentDetails {
  "deploymentArguments"?: model.DeploymentArgumentCollection;
  "deployStageOverrideArguments"?: model.DeployStageOverrideArgumentCollection;
  "deployArtifactOverrideArguments"?: model.DeployArtifactOverrideArgumentCollection;

  "deploymentType": string;
}

export namespace CreateDeployPipelineDeploymentDetails {
  export function getJsonObj(
    obj: CreateDeployPipelineDeploymentDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeploymentDetails.getJsonObj(obj) as CreateDeployPipelineDeploymentDetails)),
      ...{
        "deploymentArguments": obj.deploymentArguments
          ? model.DeploymentArgumentCollection.getJsonObj(obj.deploymentArguments)
          : undefined,
        "deployStageOverrideArguments": obj.deployStageOverrideArguments
          ? model.DeployStageOverrideArgumentCollection.getJsonObj(obj.deployStageOverrideArguments)
          : undefined,
        "deployArtifactOverrideArguments": obj.deployArtifactOverrideArguments
          ? model.DeployArtifactOverrideArgumentCollection.getJsonObj(
              obj.deployArtifactOverrideArguments
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export const deploymentType = "PIPELINE_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: CreateDeployPipelineDeploymentDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeploymentDetails.getDeserializedJsonObj(
            obj
          ) as CreateDeployPipelineDeploymentDetails)),
      ...{
        "deploymentArguments": obj.deploymentArguments
          ? model.DeploymentArgumentCollection.getDeserializedJsonObj(obj.deploymentArguments)
          : undefined,
        "deployStageOverrideArguments": obj.deployStageOverrideArguments
          ? model.DeployStageOverrideArgumentCollection.getDeserializedJsonObj(
              obj.deployStageOverrideArguments
            )
          : undefined,
        "deployArtifactOverrideArguments": obj.deployArtifactOverrideArguments
          ? model.DeployArtifactOverrideArgumentCollection.getDeserializedJsonObj(
              obj.deployArtifactOverrideArguments
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
