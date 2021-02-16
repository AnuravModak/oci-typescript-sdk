/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * TestParserPayloadDetails
 */
export interface TestParserPayloadDetails {
  /**
   * content
   */
  "content"?: string;
  /**
   * description
   */
  "description"?: string;
  /**
   * Display name
   */
  "displayName"?: string;
  /**
   * encoding
   */
  "encoding"?: string;
  /**
   * exampleContent
   */
  "exampleContent"?: string;
  /**
   * fieldMaps
   */
  "fieldMaps"?: Array<model.LogAnalyticsParserField>;
  /**
   * footerRegex
   */
  "footerContent"?: string;
  /**
   * headerContent
   */
  "headerContent"?: string;
  /**
   * name
   */
  "name"?: string;
  /**
   * isDefault
   */
  "isDefault"?: boolean;
  /**
   * isSingleLineContent
   */
  "isSingleLineContent"?: boolean;
  /**
   * isSystem
   */
  "isSystem"?: boolean;
  /**
   * language
   */
  "language"?: string;
  /**
   * lastUpdatedDate
   */
  "timeUpdated"?: Date;
  /**
   * logTypeTestRequestVersion Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "logTypeTestRequestVersion"?: number;
  "metadata"?: model.UiParserTestMetadata;
  /**
   * parser ignore linechars
   */
  "parserIgnorelineCharacters"?: string;
  /**
   * parser is hidden Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "isHidden"?: number;
  /**
   * parser seq Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserSequence"?: number;
  /**
   * parser timezone
   */
  "parserTimezone"?: string;
  /**
   * isParserWrittenOnce
   */
  "isParserWrittenOnce"?: boolean;
  /**
   * plugin instance list
   */
  "parserFunctions"?: Array<model.LogAnalyticsParserFunction>;
  /**
   * tokenize original text
   */
  "shouldTokenizeOriginalText"?: boolean;
  /**
   * type
   */
  "type"?: TestParserPayloadDetails.Type;
}

export namespace TestParserPayloadDetails {
  export enum Type {
    Xml = "XML",
    Json = "JSON",
    Regex = "REGEX",
    Odl = "ODL"
  }

  export function getJsonObj(obj: TestParserPayloadDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "fieldMaps": obj.fieldMaps
          ? obj.fieldMaps.map(item => {
              return model.LogAnalyticsParserField.getJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata ? model.UiParserTestMetadata.getJsonObj(obj.metadata) : undefined,

        "parserFunctions": obj.parserFunctions
          ? obj.parserFunctions.map(item => {
              return model.LogAnalyticsParserFunction.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
