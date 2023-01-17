/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The abstract read attribute.
 */
export interface AbstractReadAttribute {
  "modelType": string;
}

export namespace AbstractReadAttribute {
  export function getJsonObj(obj: AbstractReadAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_READ_ATTRIBUTE":
          return model.OracleReadAttributes.getJsonObj(
            <model.OracleReadAttributes>(<object>jsonObj),
            true
          );
        case "BICC_READ_ATTRIBUTE":
          return model.BiccReadAttributes.getJsonObj(
            <model.BiccReadAttributes>(<object>jsonObj),
            true
          );
        case "ORACLEREADATTRIBUTE":
          return model.OracleReadAttribute.getJsonObj(
            <model.OracleReadAttribute>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AbstractReadAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_READ_ATTRIBUTE":
          return model.OracleReadAttributes.getDeserializedJsonObj(
            <model.OracleReadAttributes>(<object>jsonObj),
            true
          );
        case "BICC_READ_ATTRIBUTE":
          return model.BiccReadAttributes.getDeserializedJsonObj(
            <model.BiccReadAttributes>(<object>jsonObj),
            true
          );
        case "ORACLEREADATTRIBUTE":
          return model.OracleReadAttribute.getDeserializedJsonObj(
            <model.OracleReadAttribute>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
