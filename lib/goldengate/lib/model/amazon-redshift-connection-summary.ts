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
 * Summary of the Amazon Redshift Connection.
 *
 */
export interface AmazonRedshiftConnectionSummary extends model.ConnectionSummary {
  /**
   * The Amazon Redshift technology type.
   */
  "technologyType": string;
  /**
   * Connection URL.
   * e.g.: 'jdbc:redshift://aws-redshift-instance.aaaaaaaaaaaa.us-east-2.redshift.amazonaws.com:5439/mydb'
   *
   */
  "connectionUrl": string;
  /**
   * The username Oracle GoldenGate uses to connect the associated system of the given technology.
   * This username must already exist and be available by the system/application to be connected to
   * and must conform to the case sensitivty requirments defined in it.
   *
   */
  "username": string;

  "connectionType": string;
}

export namespace AmazonRedshiftConnectionSummary {
  export function getJsonObj(
    obj: AmazonRedshiftConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as AmazonRedshiftConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "AMAZON_REDSHIFT";
  export function getDeserializedJsonObj(
    obj: AmazonRedshiftConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(obj) as AmazonRedshiftConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}