/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/SummarizeHostInsightTopProcessesUsageTrend.ts.html |here} to see how to use SummarizeHostInsightTopProcessesUsageTrendRequest.
 */
export interface SummarizeHostInsightTopProcessesUsageTrendRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * Required [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the host insight resource.
   *
   */
  "id": string;
  /**
   * Host top processes resource metric sort options.
   * Supported values are CPU, MEMORY, VIIRTUAL_MEMORY.
   *
   */
  "resourceMetric": string;
  /**
   * Specify time period in ISO 8601 format with respect to current time.
   * Default is last 30 days represented by P30D.
   * If timeInterval is specified, then timeIntervalStart and timeIntervalEnd will be ignored.
   * Examples  P90D (last 90 days), P4W (last 4 weeks), P2M (last 2 months), P1Y (last 12 months), . Maximum value allowed is 25 months prior to current time (P25M).
   *
   */
  "analysisTimeInterval"?: string;
  /**
   * Analysis start time in UTC in ISO 8601 format(inclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * The minimum allowed value is 2 years prior to the current day.
   * timeIntervalStart and timeIntervalEnd parameters are used together.
   * If analysisTimeInterval is specified, this parameter is ignored.
   *
   */
  "timeIntervalStart"?: Date;
  /**
   * Analysis end time in UTC in ISO 8601 format(exclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * timeIntervalStart and timeIntervalEnd are used together.
   * If timeIntervalEnd is not specified, current time is used as timeIntervalEnd.
   *
   */
  "timeIntervalEnd"?: Date;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Filter by one or more host types.
   * Possible values are CLOUD-HOST, EXTERNAL-HOST, COMANAGED-VM-HOST, COMANAGED-BM-HOST, COMANAGED-EXACS-HOST
   *
   */
  "hostType"?: Array<string>;
  /**
   * Optional [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the host (Compute Id)
   *
   */
  "hostId"?: string;
  /**
   * Unique identifier for a process.
   *
   */
  "processHash"?: string;
}
