/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Details about the Oracle Cloud @ Customer account, the source environment from which you want to migrate the application.
 *
 */
export interface OccSourceDetails extends model.SourceDetails {
  /**
   * If you are using a Oracle Cloud @ Customer account with Identity Cloud Service (IDCS), enter the service instance ID.
   * For example, if Compute-567890123 is the account name of your Oracle Cloud @ Customer Compute service entitlement,
   * then enter 567890123.
   *
   */
  "computeAccount": string;

  "type": string;
}

export namespace OccSourceDetails {
  export function getJsonObj(obj: OccSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SourceDetails.getJsonObj(obj) as OccSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OCC";
}
