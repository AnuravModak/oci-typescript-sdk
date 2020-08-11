/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details gathered during the creation of the support ticket.
 * <p>
 **Caution:** Avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateIncident {
  /**
   * The OCID of the tenancy.
   */
  "compartmentId": string;
  "ticket": model.CreateTicketDetails;
  /**
   * The Customer Support Identifier number for the support account.
   */
  "csi"?: string;
  /**
   * The kind of support ticket, such as a technical issue request.
   */
  "problemType": model.ProblemType;
  /**
   * The list of contacts.
   */
  "contacts"?: Array<model.Contact>;
  /**
   * The incident referrer. This value is often the URL that the customer used when creating the support ticket.
   */
  "referrer"?: string;
}

export namespace CreateIncident {
  export function getJsonObj(obj: CreateIncident): object {
    const jsonObj = {
      ...obj,
      ...{
        "ticket": obj.ticket ? model.CreateTicketDetails.getJsonObj(obj.ticket) : undefined,

        "contacts": obj.contacts
          ? obj.contacts.map(item => {
              return model.Contact.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
