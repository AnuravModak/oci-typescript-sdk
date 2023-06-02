/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The summary data of a specific deployment version.
 *
 */
export interface DeploymentVersionSummary {
  /**
   * Version of OGG
   *
   */
  "oggVersion": string;
  /**
   * The type of deployment, which can be any one of the Allowed values.
   * NOTE: Use of the value 'OGG' is maintained for backward compatibility purposes.
   *     Its use is discouraged in favor of 'DATABASE_ORACLE'.
   *
   */
  "deploymentType": model.DeploymentType;
  /**
   * The time the resource was released. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeReleased"?: Date;
  /**
   * The type of release.
   *
   */
  "releaseType"?: model.ReleaseType;
  /**
   * Indicates if OGG release contains security fix.
   *
   */
  "isSecurityFix"?: boolean;
}

export namespace DeploymentVersionSummary {
  export function getJsonObj(obj: DeploymentVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeploymentVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}