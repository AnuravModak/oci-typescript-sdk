/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The CSV format attribute.
 */
export interface CsvFormatAttribute extends model.AbstractFormatAttribute {
  /**
   * The encoding for the file.
   */
  "encoding"?: string;
  /**
   * The escape character for the CSV format.
   */
  "escapeCharacter"?: string;
  /**
   * The delimiter for the CSV format.
   */
  "delimiter"?: string;
  /**
   * The quote character for the CSV format.
   */
  "quoteCharacter"?: string;
  /**
   * Defines whether the file has a header row.
   */
  "hasHeader"?: boolean;
  /**
   * Defines whether a file pattern is supported.
   */
  "isFilePattern"?: boolean;
  /**
   * Format for timestamp information.
   */
  "timestampFormat"?: string;
  /**
   * Defines whether the quote entire content while performing read/write.
   */
  "isQuoteAll"?: boolean;
  /**
   * Defines whether the file has a multiline content
   */
  "isMultiline"?: boolean;
  /**
   * Defines whether the file has a trailing delimiter
   */
  "isTrailingDelimiter"?: boolean;

  "modelType": string;
}

export namespace CsvFormatAttribute {
  export function getJsonObj(obj: CsvFormatAttribute, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFormatAttribute.getJsonObj(obj) as CsvFormatAttribute)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "CSV_FORMAT";
  export function getDeserializedJsonObj(
    obj: CsvFormatAttribute,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFormatAttribute.getDeserializedJsonObj(obj) as CsvFormatAttribute)),
      ...{}
    };

    return jsonObj;
  }
}
