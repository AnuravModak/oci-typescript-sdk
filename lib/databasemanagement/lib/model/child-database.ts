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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The child Managed Database of a Managed Database Group.
 */
export interface ChildDatabase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "id": string;
  /**
   * The name of the Managed Database.
   */
  "name": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the Managed Database resides.
   */
  "compartmentId": string;
  /**
   * The infrastructure used to deploy the Oracle Database.
   */
  "deploymentType"?: model.DeploymentType;
  /**
   * The workload type of the Autonomous Database.
   */
  "workloadType"?: model.WorkloadType;
  /**
   * The type of Oracle Database installation.
   */
  "databaseType"?: model.DatabaseType;
  /**
   * The subtype of the Oracle Database. Indicates whether the database is a Container Database,
   * Pluggable Database, Non-container Database, Autonomous Database, or Autonomous Container Database.
   *
   */
  "databaseSubType"?: model.DatabaseSubType;
  /**
   * The date and time the Managed Database was added to the group.
   */
  "timeAdded": Date;
}

export namespace ChildDatabase {
  export function getJsonObj(obj: ChildDatabase): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChildDatabase): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
