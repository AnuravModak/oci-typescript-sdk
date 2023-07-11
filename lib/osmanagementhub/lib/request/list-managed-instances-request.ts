/**
 *
 *
 * OpenAPI spec version: 20220901
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/ListManagedInstances.ts.html |here} to see how to use ListManagedInstancesRequest.
 */
export interface ListManagedInstancesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment that contains the resources to list.
   */
  "compartmentId"?: string;
  /**
   * A filter to return resources that match the given display names.
   */
  "displayName"?: Array<string>;
  /**
   * A filter to return resources that may partially match the given display name.
   */
  "displayNameContains"?: string;
  /**
   * The OCID of the managed instance for which to list resources.
   */
  "managedInstanceId"?: string;
  /**
   * A filter to return only instances whose managed instance status matches the given status.
   */
  "status"?: Array<model.ManagedInstanceStatus>;
  /**
   * A filter to return only instances whose architecture type matches the given architecture.
   */
  "archType"?: Array<model.ArchType>;
  /**
   * A filter to return only instances whose OS family type matches the given OS family.
   */
  "osFamily"?: Array<model.OsFamily>;
  /**
   * A filter to return only managed instances acting as management stations.
   */
  "isManagementStation"?: boolean;
  /**
   * A filter to return only managed instances that are attached to the specified group.
   */
  "group"?: string;
  /**
   * A filter to return only managed instances that are NOT attached to the specified group.
   */
  "groupNotEqualTo"?: string;
  /**
   * A filter to return only managed instances that are associated with the specified lifecycle environment.
   */
  "lifecycleStage"?: string;
  /**
   * A filter to return only managed instances that are NOT associated with the specified lifecycle environment.
   */
  "lifecycleStageNotEqualTo"?: string;
  /**
   * A filter to return only managed instances that are attached to the specified group or lifecycle environment.
   */
  "isAttachedToGroupOrLifecycleStage"?: boolean;
  /**
   * The OCID for the software source.
   */
  "softwareSourceId"?: string;
  /**
 * The assigned erratum name. It's unique and not changeable.
* <p>
Example: `ELSA-2020-5804`
* 
 */
  "advisoryName"?: Array<string>;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `3`
* 
 */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending.
   *
   */
  "sortBy"?: ListManagedInstancesRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace ListManagedInstancesRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}