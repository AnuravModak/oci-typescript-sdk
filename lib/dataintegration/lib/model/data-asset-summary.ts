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
 * The summary object for data asset.
 */
export interface DataAssetSummary {
  /**
   * Generated key that can be used in API calls to identify data asset.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * The user-defined description of the data asset.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  /**
   * Additional properties for the data asset.
   */
  "assetProperties"?: { [key: string]: string };
  "nativeTypeSystem"?: model.TypeSystem;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  "parentRef"?: model.ParentReference;
  "metadata"?: model.ObjectMetadata;

  "modelType": string;
}

export namespace DataAssetSummary {
  export function getJsonObj(obj: DataAssetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "nativeTypeSystem": obj.nativeTypeSystem
          ? model.TypeSystem.getJsonObj(obj.nativeTypeSystem)
          : undefined,

        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_SIEBEL_DATA_ASSET":
          return model.DataAssetSummaryFromOracleSiebel.getJsonObj(
            <model.DataAssetSummaryFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_DATA_ASSET":
          return model.DataAssetSummaryFromMySqlHeatWave.getJsonObj(
            <model.DataAssetSummaryFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.DataAssetSummaryFromMySQL.getJsonObj(
            <model.DataAssetSummaryFromMySQL>(<object>jsonObj),
            true
          );
        case "HDFS_DATA_ASSET":
          return model.DataAssetSummaryFromHdfs.getJsonObj(
            <model.DataAssetSummaryFromHdfs>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_DATA_ASSET":
          return model.DataAssetSummaryFromAmazonS3.getJsonObj(
            <model.DataAssetSummaryFromAmazonS3>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_DATA_ASSET":
          return model.DataAssetSummaryFromOraclePeopleSoft.getJsonObj(
            <model.DataAssetSummaryFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.DataAssetSummaryFromObjectStorage.getJsonObj(
            <model.DataAssetSummaryFromObjectStorage>(<object>jsonObj),
            true
          );
        case "LAKE_DATA_ASSET":
          return model.DataAssetSummaryFromLake.getJsonObj(
            <model.DataAssetSummaryFromLake>(<object>jsonObj),
            true
          );
        case "REST_DATA_ASSET":
          return model.DataAssetSummaryFromRest.getJsonObj(
            <model.DataAssetSummaryFromRest>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.DataAssetSummaryFromOracle.getJsonObj(
            <model.DataAssetSummaryFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.DataAssetSummaryFromAtp.getJsonObj(
            <model.DataAssetSummaryFromAtp>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.DataAssetSummaryFromAdwc.getJsonObj(
            <model.DataAssetSummaryFromAdwc>(<object>jsonObj),
            true
          );
        case "GENERIC_JDBC_DATA_ASSET":
          return model.DataAssetSummaryFromJdbc.getJsonObj(
            <model.DataAssetSummaryFromJdbc>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_DATA_ASSET":
          return model.DataAssetSummaryFromOracleEbs.getJsonObj(
            <model.DataAssetSummaryFromOracleEbs>(<object>jsonObj),
            true
          );
        case "FUSION_APP_DATA_ASSET":
          return model.DataAssetSummaryFromFusionApp.getJsonObj(
            <model.DataAssetSummaryFromFusionApp>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataAssetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "nativeTypeSystem": obj.nativeTypeSystem
          ? model.TypeSystem.getDeserializedJsonObj(obj.nativeTypeSystem)
          : undefined,

        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_SIEBEL_DATA_ASSET":
          return model.DataAssetSummaryFromOracleSiebel.getDeserializedJsonObj(
            <model.DataAssetSummaryFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_DATA_ASSET":
          return model.DataAssetSummaryFromMySqlHeatWave.getDeserializedJsonObj(
            <model.DataAssetSummaryFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.DataAssetSummaryFromMySQL.getDeserializedJsonObj(
            <model.DataAssetSummaryFromMySQL>(<object>jsonObj),
            true
          );
        case "HDFS_DATA_ASSET":
          return model.DataAssetSummaryFromHdfs.getDeserializedJsonObj(
            <model.DataAssetSummaryFromHdfs>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_DATA_ASSET":
          return model.DataAssetSummaryFromAmazonS3.getDeserializedJsonObj(
            <model.DataAssetSummaryFromAmazonS3>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_DATA_ASSET":
          return model.DataAssetSummaryFromOraclePeopleSoft.getDeserializedJsonObj(
            <model.DataAssetSummaryFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.DataAssetSummaryFromObjectStorage.getDeserializedJsonObj(
            <model.DataAssetSummaryFromObjectStorage>(<object>jsonObj),
            true
          );
        case "LAKE_DATA_ASSET":
          return model.DataAssetSummaryFromLake.getDeserializedJsonObj(
            <model.DataAssetSummaryFromLake>(<object>jsonObj),
            true
          );
        case "REST_DATA_ASSET":
          return model.DataAssetSummaryFromRest.getDeserializedJsonObj(
            <model.DataAssetSummaryFromRest>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.DataAssetSummaryFromOracle.getDeserializedJsonObj(
            <model.DataAssetSummaryFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.DataAssetSummaryFromAtp.getDeserializedJsonObj(
            <model.DataAssetSummaryFromAtp>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.DataAssetSummaryFromAdwc.getDeserializedJsonObj(
            <model.DataAssetSummaryFromAdwc>(<object>jsonObj),
            true
          );
        case "GENERIC_JDBC_DATA_ASSET":
          return model.DataAssetSummaryFromJdbc.getDeserializedJsonObj(
            <model.DataAssetSummaryFromJdbc>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_DATA_ASSET":
          return model.DataAssetSummaryFromOracleEbs.getDeserializedJsonObj(
            <model.DataAssetSummaryFromOracleEbs>(<object>jsonObj),
            true
          );
        case "FUSION_APP_DATA_ASSET":
          return model.DataAssetSummaryFromFusionApp.getDeserializedJsonObj(
            <model.DataAssetSummaryFromFusionApp>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
