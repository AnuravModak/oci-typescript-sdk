/**
 *
 *
 * OpenAPI spec version: 20210224
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificates/ListCertificateBundleVersions.ts.html |here} to see how to use ListCertificateBundleVersionsRequest.
 */
export interface ListCertificateBundleVersionsRequest extends common.BaseRequest {
  /**
   * The OCID of the certificate.
   */
  "certificateId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The field to sort by. You can specify only one sort order. The default
   * order for `VERSION_NUMBER` is ascending.
   *
   */
  "sortBy"?: ListCertificateBundleVersionsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListCertificateBundleVersionsRequest.SortOrder;
}

export namespace ListCertificateBundleVersionsRequest {
  export enum SortBy {
    VersionNumber = "VERSION_NUMBER"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}