/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details required to create a Managed Database Group.
 */
export interface CreateManagedDatabaseGroupDetails {
  /**
   * The name of the Managed Database Group. Valid characters are uppercase or
   * lowercase letters, numbers, and \"_\". The name of the Managed Database Group
   * cannot be modified. It must be unique in the compartment and must begin with
   * an alphabetic character.
   *
   */
  "name": string;
  /**
   * The information specified by the user about the Managed Database Group.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment
   * in which the Managed Database Group resides.
   *
   */
  "compartmentId": string;
}

export namespace CreateManagedDatabaseGroupDetails {
  export function getJsonObj(obj: CreateManagedDatabaseGroupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
