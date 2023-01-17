/**
 *
 *
 * OpenAPI spec version: 20210224
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificatesmanagement/CancelCertificateVersionDeletion.ts.html |here} to see how to use CancelCertificateVersionDeletionRequest.
 */
export interface CancelCertificateVersionDeletionRequest extends common.BaseRequest {
  /**
   * The OCID of the certificate.
   */
  "certificateId": string;
  /**
   * The version number of the certificate.
   */
  "certificateVersionNumber": number;
  /**
   * Unique Oracle-assigned identifier for the request. If provided, the returned request ID
   * will include this value. Otherwise, a random request ID will be
   * generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a
   * resource, set the `if-match` parameter to the value of the etag from a
   * previous GET or POST response for that resource. The resource will be
   * updated or deleted only if the etag you provide matches the resource's
   * current etag value.
   *
   */
  "ifMatch"?: string;
}
