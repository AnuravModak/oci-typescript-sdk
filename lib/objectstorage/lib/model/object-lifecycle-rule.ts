/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
 * talk to an administrator. If you are an administrator who needs to write policies to give users access, see
 * [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 *
 */
export interface ObjectLifecycleRule {
  /**
   * The name of the lifecycle rule to be applied.
   */
  "name": string;
  /**
   *
   */
  "target"?: string;
  /**
   * The action of the object lifecycle policy rule. Rules using the action 'ARCHIVE' move objects into the
   * [Archive Storage tier](https://docs.cloud.oracle.com/Content/Archive/Concepts/archivestorageoverview.htm). Rules using the action
   * 'DELETE' permanently delete objects from buckets. Rules using 'ABORT' abort the uncommitted multipart-uploads
   * and permanently delete their parts from buckets. 'ARCHIVE', 'DELETE' and 'ABORT' are the only three supported
   * actions at this time.
   *
   */
  "action": string;
  /**
   * Specifies the age of objects to apply the rule to. The timeAmount is interpreted in units defined by the
   * timeUnit parameter, and is calculated in relation to each object's Last-Modified time.
   *
   */
  "timeAmount": number;
  /**
   * The unit that should be used to interpret timeAmount.  Days are defined as starting and ending at midnight UTC.
   * Years are defined as 365.2425 days long and likewise round up to the next midnight UTC.
   *
   */
  "timeUnit": ObjectLifecycleRule.TimeUnit;
  /**
   * A Boolean that determines whether this rule is currently enabled.
   */
  "isEnabled": boolean;
  "objectNameFilter"?: model.ObjectNameFilter;
}

export namespace ObjectLifecycleRule {
  export enum TimeUnit {
    Days = "DAYS",
    Years = "YEARS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ObjectLifecycleRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectNameFilter": obj.objectNameFilter
          ? model.ObjectNameFilter.getJsonObj(obj.objectNameFilter)
          : undefined
      }
    };

    return jsonObj;
  }
}
