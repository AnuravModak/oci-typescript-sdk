/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListTargetDatabases.ts.html |here} to see how to use ListTargetDatabasesRequest.
 */
export interface ListTargetDatabasesRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified compartment OCID.
   */
  "compartmentId": string;
  /**
   * A filter to return the target databases that are associated to the resource id passed in as a parameter value.
   */
  "associatedResourceId"?: string;
  /**
   * A filter to return the target database that matches the specified OCID.
   */
  "targetDatabaseId"?: string;
  /**
   * A filter to return only resources that match the specified display name.
   *
   */
  "displayName"?: string;
  /**
   * A filter to return the target databases that matches the current state of the target database.
   */
  "lifecycleState"?: model.TargetDatabaseLifecycleState;
  /**
   * A filter to return target databases that match the database type of the target database.
   */
  "databaseType"?: model.DatabaseType;
  /**
   * A filter to return target databases that match the infrastructure type of the target database.
   */
  "infrastructureType"?: model.InfrastructureType;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned. Depends on the 'accessLevel' setting.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are RESTRICTED and ACCESSIBLE. Default is RESTRICTED.
   * Setting this to ACCESSIBLE returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment). When set to RESTRICTED permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListTargetDatabasesRequest.AccessLevel;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListTargetDatabasesRequest.SortOrder;
  /**
   * The field used for sorting. Only one sorting order (sortOrder) can be specified.
   * The default order for TIMECREATED is descending. The default order for DISPLAYNAME is ascending.
   * The DISPLAYNAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListTargetDatabasesRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListTargetDatabasesRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }
}
