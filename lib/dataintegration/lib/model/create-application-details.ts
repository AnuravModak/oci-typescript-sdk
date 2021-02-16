/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Properties used in application create operations.
 */
export interface CreateApplicationDetails {
  /**
   * Currently not used on application creation. Reserved for future.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  /**
   * The type of the application.
   */
  "modelType"?: CreateApplicationDetails.ModelType;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name": string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier": string;
  "sourceApplicationInfo"?: model.CreateSourceApplicationInfo;
  "registryMetadata"?: model.RegistryMetadata;
}

export namespace CreateApplicationDetails {
  export enum ModelType {
    IntegrationApplication = "INTEGRATION_APPLICATION"
  }

  export function getJsonObj(obj: CreateApplicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceApplicationInfo": obj.sourceApplicationInfo
          ? model.CreateSourceApplicationInfo.getJsonObj(obj.sourceApplicationInfo)
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
