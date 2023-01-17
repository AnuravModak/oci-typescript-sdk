/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Validate pattern using the expression and file list.
 */
export interface ValidatePatternDetails {
  /**
   * Input string which drives the selection process, allowing for fine-grained control using qualifiers.
   * Refer to the user documentation for details of the format and examples. A pattern cannot include both
   * a prefix and an expression.
   *
   */
  "expression"?: string;
  /**
   * Input string which drives the selection process.
   * Refer to the user documentation for details of the format and examples. A pattern cannot include both
   * a prefix and an expression.
   *
   */
  "filePathPrefix"?: string;
  /**
    * List of file paths against which the pattern can be tried, as a check. This documents, for reference
* purposes, some example objects a pattern is meant to work with.
* <p>
If provided with the request,this overrides the list which already exists as part of the pattern, if any.
* 
    */
  "checkFilePathList"?: Array<string>;
  /**
    * The maximum number of UNMATCHED files, in checkFilePathList, above which the check fails.
* Optional, if checkFilePathList is provided.
* <p>
If provided with the request, this overrides the value which already exists as part of the pattern, if any.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "checkFailureLimit"?: number;
}

export namespace ValidatePatternDetails {
  export function getJsonObj(obj: ValidatePatternDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ValidatePatternDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
