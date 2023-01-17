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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details about the Oracle Cloud Infrastructure Classic account, the source environment from which you want to migrate the application.
 *
 */
export interface OcicSourceDetails extends model.SourceDetails {
  /**
   * The Oracle Cloud Infrastructure - Classic region from which you want to migrate your applications. For example, uscom-east-1 or uscom-central-1.
   */
  "region": string;
  /**
    * If you are using an Oracle Cloud Infrastructure - Classic account with Identity Cloud Service (IDCS), enter the service instance ID.
* For example, if Compute-567890123 is the account name of your Oracle Cloud Infrastructure Classic Compute service entitlement,
* then enter 567890123.
* <p>
If you are using a traditional Oracle Cloud Infrastructure - Classic account, enter your identity domain ID.
* 
    */
  "computeAccount": string;

  "type": string;
}

export namespace OcicSourceDetails {
  export function getJsonObj(obj: OcicSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SourceDetails.getJsonObj(obj) as OcicSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OCIC";
  export function getDeserializedJsonObj(
    obj: OcicSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceDetails.getDeserializedJsonObj(obj) as OcicSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
