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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/SummarizeSqlStatisticsTimeSeries.ts.html |here} to see how to use SummarizeSqlStatisticsTimeSeriesRequest.
 */
export interface SummarizeSqlStatisticsTimeSeriesRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * Unique SQL_ID for a SQL Statement.
   * Example: `6rgjh9bjmy2s7`
   *
   */
  "sqlIdentifier": string;
  /**
   * Optional list of database [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the associated DBaaS entity.
   *
   */
  "databaseId"?: Array<string>;
  /**
   * Optional list of database [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database insight resource.
   *
   */
  "id"?: Array<string>;
  /**
   * Optional list of exadata insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "exadataInsightId"?: Array<string>;
  /**
   * Filter by one or more cdb name.
   *
   */
  "cdbName"?: Array<string>;
  /**
   * Filter by one or more hostname.
   *
   */
  "hostName"?: Array<string>;
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
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A list of tag filters to apply.  Only resources with a defined tag matching the value will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   *
   */
  "definedTagEquals"?: Array<string>;
  /**
   * A list of tag filters to apply.  Only resources with a freeform tag matching the value will be returned.
   * The key for each tag is \"{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same tag name are interpreted as \"OR\".  Values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagEquals"?: Array<string>;
  /**
   * A list of tag existence filters to apply.  Only resources for which the specified defined tags exist will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.true\" (for checking existence of a defined tag)
   * or \"{namespace}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   *
   */
  "definedTagExists"?: Array<string>;
  /**
   * A list of tag existence filters to apply.  Only resources for which the specified freeform tags exist the value will be returned.
   * The key for each tag is \"{tagName}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagExists"?: Array<string>;
  /**
   * A flag to search all resources within a given compartment and all sub-compartments.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Optional list of Exadata Insight VM cluster name.
   *
   */
  "vmclusterName"?: Array<string>;
}
