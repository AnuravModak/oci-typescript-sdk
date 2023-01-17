/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Summary of the target asset.
 */
export interface TargetAssetSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The current state of the target asset.
   */
  "lifecycleState": string;
  /**
   * OCID of the associated migration plan.
   */
  "migrationPlanId": string;
  /**
   * Compartment identifier
   */
  "compartmentId"?: string;
  /**
   * Created resource identifier
   */
  "createdResourceId"?: string;
  /**
   * A boolean indicating whether the asset should be migrated.
   */
  "isExcludedFromExecution": boolean;
  /**
   * Messages about compatibility issues.
   */
  "compatibilityMessages"?: Array<model.CompatibilityMessage>;
  "estimatedCost": model.CostEstimation;
  /**
   * The time when the target asset was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * A message describing the current state in more detail. For example, it can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time when the target asset was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The time when the assessment was done. An RFC3339 formatted datetime string.
   */
  "timeAssessed": Date;
  "migrationAsset"?: model.MigrationAssetSummary;

  "type": string;
}

export namespace TargetAssetSummary {
  export function getJsonObj(obj: TargetAssetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "compatibilityMessages": obj.compatibilityMessages
          ? obj.compatibilityMessages.map(item => {
              return model.CompatibilityMessage.getJsonObj(item);
            })
          : undefined,
        "estimatedCost": obj.estimatedCost
          ? model.CostEstimation.getJsonObj(obj.estimatedCost)
          : undefined,

        "migrationAsset": obj.migrationAsset
          ? model.MigrationAssetSummary.getJsonObj(obj.migrationAsset)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "INSTANCE":
          return model.VmTargetAssetSummary.getJsonObj(
            <model.VmTargetAssetSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetAssetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "compatibilityMessages": obj.compatibilityMessages
          ? obj.compatibilityMessages.map(item => {
              return model.CompatibilityMessage.getDeserializedJsonObj(item);
            })
          : undefined,
        "estimatedCost": obj.estimatedCost
          ? model.CostEstimation.getDeserializedJsonObj(obj.estimatedCost)
          : undefined,

        "migrationAsset": obj.migrationAsset
          ? model.MigrationAssetSummary.getDeserializedJsonObj(obj.migrationAsset)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "INSTANCE":
          return model.VmTargetAssetSummary.getDeserializedJsonObj(
            <model.VmTargetAssetSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
