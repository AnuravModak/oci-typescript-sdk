/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of the VM target asset.
 */
export interface VmTargetAssetSummary extends model.TargetAssetSummary {
  /**
   * The preferred VM shape type that you provide.
   */
  "preferredShapeType": string;
  /**
   * Performance of the block volumes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockVolumesPerformance"?: number;
  /**
   * Microsoft license for VM configuration.
   */
  "msLicense"?: string;
  "userSpec": model.LaunchInstanceDetails;
  "recommendedSpec": model.LaunchInstanceDetails;

  "type": string;
}

export namespace VmTargetAssetSummary {
  export function getJsonObj(obj: VmTargetAssetSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetAssetSummary.getJsonObj(obj) as VmTargetAssetSummary)),
      ...{
        "userSpec": obj.userSpec ? model.LaunchInstanceDetails.getJsonObj(obj.userSpec) : undefined,
        "recommendedSpec": obj.recommendedSpec
          ? model.LaunchInstanceDetails.getJsonObj(obj.recommendedSpec)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "INSTANCE";
  export function getDeserializedJsonObj(
    obj: VmTargetAssetSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetAssetSummary.getDeserializedJsonObj(obj) as VmTargetAssetSummary)),
      ...{
        "userSpec": obj.userSpec
          ? model.LaunchInstanceDetails.getDeserializedJsonObj(obj.userSpec)
          : undefined,
        "recommendedSpec": obj.recommendedSpec
          ? model.LaunchInstanceDetails.getDeserializedJsonObj(obj.recommendedSpec)
          : undefined
      }
    };

    return jsonObj;
  }
}
