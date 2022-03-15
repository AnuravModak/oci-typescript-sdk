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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A summary of object privileges.
 */
export interface ObjectPrivilegeSummary {
  /**
   * The name of the privilege on the object.
   */
  "name"?: string;
  /**
   * The type of object.
   */
  "schemaType"?: string;
  /**
   * The owner of the object.
   */
  "owner"?: string;
  /**
   * The name of the user who granted the object privilege.
   */
  "grantor"?: string;
  /**
   * Indicates whether the privilege is granted with the HIERARCHY OPTION (YES) or not (NO).
   */
  "hierarchy"?: ObjectPrivilegeSummary.Hierarchy;
  /**
   * The name of the object. The object can be any object, including tables, packages, indexes, sequences, and so on.
   */
  "object"?: string;
  /**
   * Indicates whether the privilege is granted with the GRANT OPTION (YES) or not (NO).
   */
  "grantOption"?: ObjectPrivilegeSummary.GrantOption;
  /**
   * Indicates how the object privilege was granted. Possible values:
   * YES if the role is granted commonly (CONTAINER=ALL is used)
   * NO if the role is granted locally (CONTAINER=ALL is not used)
   *
   */
  "common"?: ObjectPrivilegeSummary.Common;
  /**
   * Indicates whether the granted privilege is inherited from another container (YES) or not (NO).
   */
  "inherited"?: ObjectPrivilegeSummary.Inherited;
}

export namespace ObjectPrivilegeSummary {
  export enum Hierarchy {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum GrantOption {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Common {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Inherited {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ObjectPrivilegeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectPrivilegeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}