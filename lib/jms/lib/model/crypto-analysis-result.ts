/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Metadata of a Crypto Event Analysis result. The analysis result is stored as the Object Storage object.
 */
export interface CryptoAnalysisResult {
  /**
   * The OCID to identify this analysis results.
   */
  "id": string;
  /**
   * The OCID of the work request to start the analysis.
   */
  "workRequestId"?: string;
  /**
   * The result aggregation mode
   */
  "aggregationMode": model.CryptoAnalysisResultMode;
  /**
   * The fleet OCID.
   */
  "fleetId": string;
  /**
   * The managed instance OCID.
   */
  "managedInstanceId"?: string;
  /**
   * The hostname of the managed instance.
   */
  "hostName"?: string;
  /**
   * Time of the first event in the analysis.
   */
  "timeFirstEvent"?: Date;
  /**
   * Time of the last event in the analysis.
   */
  "timeLastEvent"?: Date;
  /**
   * Total number of events in the analysis. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalEventCount": number;
  /**
   * Total number of summarized events. Summarized events are deduplicated events of interest. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "summarizedEventCount": number;
  /**
   * Total number of findings with the analysis. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "findingCount": number;
  /**
   * Total number of non-compliant findings with the analysis. A non-compliant finding means the
   * application won't work properly with the changes introduced by the crypto roadmap version
   * used the the analysis.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nonCompliantFindingCount": number;
  /**
   * The time the result is compiled.
   */
  "timeCreated"?: Date;
  /**
   * The Crypto Roadmap version used to perform the analysis.
   */
  "cryptoRoadmapVersion": string;
  /**
   * The Object Storage namespace of this analysis result.
   */
  "namespace": string;
  /**
   * The Object Storage bucket name of this analysis result.
   */
  "bucketName": string;
  /**
   * The Object Storage object name of this analysis result.
   */
  "objectName": string;
}

export namespace CryptoAnalysisResult {
  export function getJsonObj(obj: CryptoAnalysisResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CryptoAnalysisResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
