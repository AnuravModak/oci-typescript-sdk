/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * API key created on user's behalf.
 */
export interface CreateBdsApiKeyDetails {
  /**
   * The OCID of the user for whom this new generated API key pair will be created.
   */
  "userId": string;
  /**
   * Base64 passphrase used to secure the private key which will be created on user behalf.
   */
  "passphrase": string;
  /**
   * The name of the region to establish the Object Storage endpoint. See https://docs.oracle.com/en-us/iaas/api/#/en/identity/20160918/Region/
   * for additional information.
   *
   */
  "defaultRegion"?: string;
  /**
   * User friendly identifier used to uniquely differentiate between different API keys associated with this Big Data Service cluster.
   * Only ASCII alphanumeric characters with no spaces allowed.
   *
   */
  "keyAlias": string;
}

export namespace CreateBdsApiKeyDetails {
  export function getJsonObj(obj: CreateBdsApiKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateBdsApiKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}