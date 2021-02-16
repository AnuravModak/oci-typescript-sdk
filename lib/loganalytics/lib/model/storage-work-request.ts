/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
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
 * This shows the storage work request details.
 *
 */
export interface StorageWorkRequest {
  /**
   * This is the OCID of the storage work Request.
   *
   */
  "id": string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * When the work request started.
   */
  "timeStarted"?: Date;
  /**
   * When the work request was accepted. Should match timeStarted in all cases.
   *
   */
  "timeAccepted"?: Date;
  /**
   * When the work request finished execution.
   */
  "timeFinished"?: Date;
  /**
   * When the work request will expire.
   */
  "timeExpires"?: Date;
  /**
   * Percentage progress completion of the work request.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * This is the work request status.
   *
   */
  "status": model.WorkRequestStatus;
  /**
   * This is the start of the time interval
   */
  "timeDataStarted"?: Date;
  /**
   * This is the end of the time interval
   */
  "timeDataEnded": Date;
  /**
   * This is the solr query used to filter data for purge, '*' means all
   */
  "purgeQueryString"?: string;
  /**
   * Thie is the type of data to be purged
   */
  "dataType": model.StorageDataType;
  /**
   * This provides more detailed status if applicable
   */
  "statusDetails"?: string;
  /**
   * This provides more detailed info about the work request if applicable
   */
  "operationDetails"?: string;
  /**
   * This is the policy name if applicable (e.g. purge policy)
   */
  "policyName"?: string;
  /**
   * This is the purge policy ID if applicable
   */
  "policyId"?: string;
  /**
   * This is the data usage in bytes if applicable Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageUsageInBytes"?: number;
  /**
   * If true, purge child compartments data, only applicable to purge request
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * This is the type of the work request.
   *
   */
  "operationType": model.StorageOperationType;
}

export namespace StorageWorkRequest {
  export function getJsonObj(obj: StorageWorkRequest): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
