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
 * The properties that define a configuration source provider of the type `GITLAB_ACCESS_TOKEN`.
 * This type corresponds to a configuration source provider in GitLab that is authenticated with a personal access token.
 *
 */
export interface GitlabAccessTokenConfigurationSourceProvider
  extends model.ConfigurationSourceProvider {
  /**
   * The Git service endpoint.
   * Example: `https://gitlab.com`
   *
   */
  "apiEndpoint"?: string;

  "configSourceProviderType": string;
}

export namespace GitlabAccessTokenConfigurationSourceProvider {
  export function getJsonObj(
    obj: GitlabAccessTokenConfigurationSourceProvider,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigurationSourceProvider.getJsonObj(
            obj
          ) as GitlabAccessTokenConfigurationSourceProvider)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceProviderType = "GITLAB_ACCESS_TOKEN";
  export function getDeserializedJsonObj(
    obj: GitlabAccessTokenConfigurationSourceProvider,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigurationSourceProvider.getDeserializedJsonObj(
            obj
          ) as GitlabAccessTokenConfigurationSourceProvider)),
      ...{}
    };

    return jsonObj;
  }
}
