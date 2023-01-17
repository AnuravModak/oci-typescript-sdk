/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Creation details for a template to use as the source of the Terraform configuration.
 *
 */
export interface CreateStackTemplateConfigSourceDetails extends model.CreateConfigSourceDetails {
  "templateId": string;

  "configSourceType": string;
}

export namespace CreateStackTemplateConfigSourceDetails {
  export function getJsonObj(
    obj: CreateStackTemplateConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getJsonObj(
            obj
          ) as CreateStackTemplateConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceType = "TEMPLATE_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: CreateStackTemplateConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateStackTemplateConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
