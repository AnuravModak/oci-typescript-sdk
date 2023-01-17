/**
 * Application Performance Monitoring Control Plane API
 * Use the Application Performance Monitoring Control Plane API to perform operations such as creating, updating,
deleting and listing APM domains and monitoring the progress of these operations using the work request APIs. For more information, see [Application Performance Monitoring](/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
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
 * Details of the Data Key to be generated.
 */
export interface GenerateDataKeyDetails {
  /**
   * Name of the Data Key. The name uniquely identifies a Data Key within an APM domain.
   *
   */
  "name": string;
  /**
   * Type of the Data Key.
   */
  "type": model.DataKeyTypes;
}

export namespace GenerateDataKeyDetails {
  export function getJsonObj(obj: GenerateDataKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateDataKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
