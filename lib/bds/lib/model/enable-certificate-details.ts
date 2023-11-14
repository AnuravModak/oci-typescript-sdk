/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * The request body info about configure certificate service list.
 */
export interface EnableCertificateDetails {
  /**
   * Base-64 encoded password for the cluster admin user.
   */
  "clusterAdminPassword": string;
  /**
   * List of services for which certificate needs to be enabled.
   */
  "services": Array<model.Service>;
  /**
   * Plain text certificate/s in order, separated by new line character. If not provided in request a self-signed root certificate is generated inside the cluster. In case hostCertDetails is provided, root certificate is mandatory.
   */
  "rootCertificate"?: string;
  /**
   * List of leaf certificates to use for services on each host. If custom host certificate is provided the root certificate becomes required.
   */
  "hostCertDetails"?: Array<model.HostCertDetails>;
  /**
   * Base-64 encoded password for CA certificate's private key. This value can be empty.
   */
  "serverKeyPassword"?: string;
}

export namespace EnableCertificateDetails {
  export function getJsonObj(obj: EnableCertificateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.Service.getJsonObj(item);
            })
          : undefined,

        "hostCertDetails": obj.hostCertDetails
          ? obj.hostCertDetails.map(item => {
              return model.HostCertDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EnableCertificateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.Service.getDeserializedJsonObj(item);
            })
          : undefined,

        "hostCertDetails": obj.hostCertDetails
          ? obj.hostCertDetails.map(item => {
              return model.HostCertDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}