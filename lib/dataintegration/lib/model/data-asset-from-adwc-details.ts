/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Details for the Autonomous Data Warehouse data asset type.
 */
export interface DataAssetFromAdwcDetails extends model.DataAsset {
  /**
   * The Autonomous Data Warehouse instance service name.
   */
  "serviceName"?: string;
  /**
   * Array of service names that are available for selection in the serviceName property.
   */
  "serviceNames"?: Array<string>;
  /**
   * The Autonomous Data Warehouse driver class.
   */
  "driverClass"?: string;
  "defaultConnection"?: model.ConnectionFromAdwcDetails;
  "stagingDataAsset"?:
    | model.DataAssetFromJdbc
    | model.DataAssetFromOracleDetails
    | model.DataAssetFromAdwcDetails
    | model.DataAssetFromAmazonS3
    | model.DataAssetFromLakehouseDetails
    | model.DataAssetFromObjectStorageDetails
    | model.DataAssetFromFusionApp
    | model.DataAssetFromAtpDetails
    | model.DataAssetFromMySQL
    | model.DataAssetFromRestDetails;
  "stagingConnection"?:
    | model.ConnectionFromObjectStorage
    | model.ConnectionFromAdwc
    | model.ConnectionFromAtp
    | model.ConnectionFromOracle
    | model.ConnectionFromLakehouse
    | model.ConnectionFromAmazonS3
    | model.ConnectionFromBIP
    | model.ConnectionFromMySQL
    | model.ConnectionFromJdbc
    | model.ConnectionFromBICC
    | model.ConnectionFromRestNoAuth
    | model.ConnectionFromRestBasicAuth;
  "bucketSchema"?: model.Schema;

  "modelType": string;
}

export namespace DataAssetFromAdwcDetails {
  export function getJsonObj(obj: DataAssetFromAdwcDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DataAsset.getJsonObj(obj) as DataAssetFromAdwcDetails)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionFromAdwcDetails.getJsonObj(obj.defaultConnection)
          : undefined,
        "stagingDataAsset": obj.stagingDataAsset
          ? model.DataAsset.getJsonObj(obj.stagingDataAsset)
          : undefined,
        "stagingConnection": obj.stagingConnection
          ? model.Connection.getJsonObj(obj.stagingConnection)
          : undefined,
        "bucketSchema": obj.bucketSchema ? model.Schema.getJsonObj(obj.bucketSchema) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ADWC_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: DataAssetFromAdwcDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataAsset.getDeserializedJsonObj(obj) as DataAssetFromAdwcDetails)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionFromAdwcDetails.getDeserializedJsonObj(obj.defaultConnection)
          : undefined,
        "stagingDataAsset": obj.stagingDataAsset
          ? model.DataAsset.getDeserializedJsonObj(obj.stagingDataAsset)
          : undefined,
        "stagingConnection": obj.stagingConnection
          ? model.Connection.getDeserializedJsonObj(obj.stagingConnection)
          : undefined,
        "bucketSchema": obj.bucketSchema
          ? model.Schema.getDeserializedJsonObj(obj.bucketSchema)
          : undefined
      }
    };

    return jsonObj;
  }
}
