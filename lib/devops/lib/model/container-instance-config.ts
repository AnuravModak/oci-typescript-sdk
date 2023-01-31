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
 * Specifies ContainerInstance configuration.
 */
export interface ContainerInstanceConfig extends model.ContainerConfig {
  /**
   * The OCID of the compartment where the ContainerInstance will be created.
   */
  "compartmentId"?: string;
  /**
   * Availability domain where the ContainerInstance will be created.
   */
  "availabilityDomain"?: string;
  /**
   * The shape of the ContainerInstance. The shape determines the resources available to the ContainerInstance.
   */
  "shapeName": string;
  "shapeConfig": model.ShapeConfig;
  "networkChannel": model.ServiceVnicChannel | model.PrivateEndpointChannel;

  "containerConfigType": string;
}

export namespace ContainerInstanceConfig {
  export function getJsonObj(obj: ContainerInstanceConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ContainerConfig.getJsonObj(obj) as ContainerInstanceConfig)),
      ...{
        "shapeConfig": obj.shapeConfig ? model.ShapeConfig.getJsonObj(obj.shapeConfig) : undefined,
        "networkChannel": obj.networkChannel
          ? model.NetworkChannel.getJsonObj(obj.networkChannel)
          : undefined
      }
    };

    return jsonObj;
  }
  export const containerConfigType = "CONTAINER_INSTANCE_CONFIG";
  export function getDeserializedJsonObj(
    obj: ContainerInstanceConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ContainerConfig.getDeserializedJsonObj(obj) as ContainerInstanceConfig)),
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.ShapeConfig.getDeserializedJsonObj(obj.shapeConfig)
          : undefined,
        "networkChannel": obj.networkChannel
          ? model.NetworkChannel.getDeserializedJsonObj(obj.networkChannel)
          : undefined
      }
    };

    return jsonObj;
  }
}
