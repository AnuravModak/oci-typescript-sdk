/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListParsers.ts.html |here} to see how to use ListParsersRequest.
 */
export interface ListParsersRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * A flag indicating how to handle filtering when multiple filter criteria are specified.
   * A value of true will always result in the most expansive list of items being returned.
   * For example, if two field lists are supplies as filter criteria, a value of true will
   * result in any item matching a field in either list being returned, while a value of
   * false will result in a list of items which only have fields contained in both input lists.
   *
   */
  "isMatchAll"?: boolean;
  /**
   * The source type used for filtering.  Only parsers associated with a source of the
   * specified type will be returned.
   *
   */
  "sourceType"?: ListParsersRequest.SourceType;
  /**
   * The parser name used for filtering.
   *
   */
  "parserName"?: string;
  /**
   * The parser display text used for filtering.  Only parsers with the specified name
   * or description will be returned.
   *
   */
  "parserDisplayText"?: string;
  /**
   * The parser type used for filtering.  Only items with, or associated with, parsers
   * of the specified type will be returned.
   *
   */
  "parserType"?: ListParsersRequest.ParserType;
  /**
   * A comma-separated list of categories used for filtering
   */
  "categories"?: string;
  /**
   * The system value used for filtering.  Only items with the specified system value
   * will be returned.  Valid values are built in, custom (for user defined items), or
   * all (for all items, regardless of system value).
   *
   */
  "isSystem"?: ListParsersRequest.IsSystem;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListParsersRequest.SortOrder;
  /**
   * The attribute used to sort the returned parsers
   */
  "sortBy"?: ListParsersRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListParsersRequest {
  export enum SourceType {
    OsFile = "OS_FILE",
    Syslog = "SYSLOG",
    Odl = "ODL",
    OsWindowsSys = "OS_WINDOWS_SYS"
  }

  export enum ParserType {
    All = "ALL",
    Regex = "REGEX",
    Xml = "XML",
    Json = "JSON",
    Odl = "ODL",
    Delimited = "DELIMITED"
  }

  export enum IsSystem {
    All = "ALL",
    Custom = "CUSTOM",
    BuiltIn = "BUILT_IN"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "name",
    Type = "type",
    SourcesCount = "sourcesCount",
    TimeUpdated = "timeUpdated"
  }
}
