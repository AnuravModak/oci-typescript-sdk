/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

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
 * TestParserPayloadDetails
 */
export interface TestParserPayloadDetails {
  /**
   * The content used for testing.
   */
  "content"?: string;
  /**
   * The parser description.
   */
  "description"?: string;
  /**
   * The parser display name.
   */
  "displayName"?: string;
  /**
   * The content encoding.
   */
  "encoding"?: string;
  /**
   * The example content.
   */
  "exampleContent"?: string;
  /**
   * The parser fields.
   */
  "fieldMaps"?: Array<model.LogAnalyticsParserField>;
  /**
   * The footer regular expression.
   */
  "footerContent"?: string;
  /**
   * The header content.
   */
  "headerContent"?: string;
  /**
   * The parser name.
   */
  "name"?: string;
  /**
   * A flag indicating if this is a default parser.
   *
   */
  "isDefault"?: boolean;
  /**
   * A flag indicating if this is a single line content parser.
   *
   */
  "isSingleLineContent"?: boolean;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The language.
   */
  "language"?: string;
  /**
   * The last updated date.
   */
  "timeUpdated"?: Date;
  /**
   * The log type test request version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "logTypeTestRequestVersion"?: number;
  "metadata"?: model.UiParserTestMetadata;
  /**
   * The line characters for the parser to ignore.
   */
  "parserIgnorelineCharacters"?: string;
  /**
   * A flag indicating if the parser is hidden or not. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "isHidden"?: number;
  /**
   * The parser sequence. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserSequence"?: number;
  /**
   * The parser timezone.
   */
  "parserTimezone"?: string;
  /**
   * A flag indicating whther or not the parser is write once.
   *
   */
  "isParserWrittenOnce"?: boolean;
  /**
   * The parser function list.
   */
  "parserFunctions"?: Array<model.LogAnalyticsParserFunction>;
  /**
   * A flag indicating whether or not to tokenize the original text.
   *
   */
  "shouldTokenizeOriginalText"?: boolean;
  /**
   * The parser field delimiter.
   */
  "fieldDelimiter"?: string;
  /**
   * The parser field qualifier.
   */
  "fieldQualifier"?: string;
  /**
   * The parser type.  Default value is REGEX.
   */
  "type"?: TestParserPayloadDetails.Type;
  /**
   * A flag indicating whether the XML parser should consider the namespace(s) while processing the log data.
   *
   */
  "isNamespaceAware"?: boolean;
}

export namespace TestParserPayloadDetails {
  export enum Type {
    Xml = "XML",
    Json = "JSON",
    Regex = "REGEX",
    Odl = "ODL",
    Delimited = "DELIMITED"
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
  export function getDeserializedJsonObj(obj: TestParserPayloadDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "fieldMaps": obj.fieldMaps
          ? obj.fieldMaps.map(item => {
              return model.LogAnalyticsParserField.getDeserializedJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata
          ? model.UiParserTestMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined,

        "parserFunctions": obj.parserFunctions
          ? obj.parserFunctions.map(item => {
              return model.LogAnalyticsParserFunction.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
