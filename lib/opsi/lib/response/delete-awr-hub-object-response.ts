/**
 *
 *
 * OpenAPI spec version: 20200630
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

export interface DeleteAwrHubObjectResponse {
  /**
   * Echoes back the value passed in the opc-client-request-id header, for use by clients when debugging.
   */
  "opcClientRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The Awr Hub object modification time.
   */
  "lastModified": Date;
  /**
   * VersionId of the requested Awr Hub object.
   */
  "versionId": string;
  /**
   * This is `true` if the deleted object is a delete marker, otherwise `false`
   */
  "isDeleteMarker": boolean;
}