/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * The information about new Analytics Warehouse instance being provisioned.
 */
export interface CreateOaxServiceInstanceDetails extends model.CreateServiceInstanceDetails {
  /**
   * A unique Name for Analytics Warehouse.
   */
  "name"?: string;
  /**
   * This is the description for Analytics Warehouse Service.
   */
  "description"?: string;
  /**
   * Admin information to provision Analytics Warehouse Servcie
   */
  "fawAdminInfo"?: model.FawAdminInfoDetails;

  "serviceInstanceType": string;
}

export namespace CreateOaxServiceInstanceDetails {
  export function getJsonObj(
    obj: CreateOaxServiceInstanceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateServiceInstanceDetails.getJsonObj(obj) as CreateOaxServiceInstanceDetails)),
      ...{
        "FawAdminInfo": obj.fawAdminInfo
          ? model.FawAdminInfoDetails.getJsonObj(obj.fawAdminInfo)
          : undefined
      }
    };

    delete (jsonObj as Partial<CreateOaxServiceInstanceDetails>).fawAdminInfo;

    return jsonObj;
  }
  export const serviceInstanceType = "ANALYTICS_WAREHOUSE";
  export function getDeserializedJsonObj(
    obj: CreateOaxServiceInstanceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateServiceInstanceDetails.getDeserializedJsonObj(
            obj
          ) as CreateOaxServiceInstanceDetails)),
      ...{
        "FawAdminInfo": obj.fawAdminInfo
          ? model.FawAdminInfoDetails.getDeserializedJsonObj(obj.fawAdminInfo)
          : undefined
      }
    };

    delete (jsonObj as any)["FawAdminInfo"];

    return jsonObj;
  }
}
