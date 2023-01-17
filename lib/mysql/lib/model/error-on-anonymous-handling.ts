/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Disables assignment of IDs to anonymous transactions coming from the source. Use this policy when the transaction
 * identifiers are enabled in the source of the replication channel.
 *
 */
export interface ErrorOnAnonymousHandling extends model.AnonymousTransactionsHandling {
  "policy": string;
}

export namespace ErrorOnAnonymousHandling {
  export function getJsonObj(obj: ErrorOnAnonymousHandling, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AnonymousTransactionsHandling.getJsonObj(obj) as ErrorOnAnonymousHandling)),
      ...{}
    };

    return jsonObj;
  }
  export const policy = "ERROR_ON_ANONYMOUS";
  export function getDeserializedJsonObj(
    obj: ErrorOnAnonymousHandling,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AnonymousTransactionsHandling.getDeserializedJsonObj(
            obj
          ) as ErrorOnAnonymousHandling)),
      ...{}
    };

    return jsonObj;
  }
}
