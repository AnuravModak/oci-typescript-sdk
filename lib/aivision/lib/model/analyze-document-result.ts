/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * The document analysis results.
 */
export interface AnalyzeDocumentResult {
  "documentMetadata": model.DocumentMetadata;
  /**
   * The array of a Page.
   */
  "pages": Array<model.Page>;
  /**
   * An array of detected document types.
   */
  "detectedDocumentTypes"?: Array<model.DetectedDocumentType>;
  /**
   * An array of detected languages.
   */
  "detectedLanguages"?: Array<model.DetectedLanguage>;
  /**
   * The document classification model version.
   */
  "documentClassificationModelVersion"?: string;
  /**
   * The document language classification model version.
   */
  "languageClassificationModelVersion"?: string;
  /**
   * The document text detection model version.
   */
  "textDetectionModelVersion"?: string;
  /**
   * The document keyValue detection model version.
   */
  "keyValueDetectionModelVersion"?: string;
  /**
   * The document table detection model version.
   */
  "tableDetectionModelVersion"?: string;
  /**
   * The errors encountered during document analysis.
   */
  "errors"?: Array<model.ProcessingError>;
  /**
   * The searchable PDF file that was generated.
   */
  "searchablePdf"?: string;
}

export namespace AnalyzeDocumentResult {
  export function getJsonObj(obj: AnalyzeDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "documentMetadata": obj.documentMetadata
          ? model.DocumentMetadata.getJsonObj(obj.documentMetadata)
          : undefined,
        "pages": obj.pages
          ? obj.pages.map(item => {
              return model.Page.getJsonObj(item);
            })
          : undefined,
        "detectedDocumentTypes": obj.detectedDocumentTypes
          ? obj.detectedDocumentTypes.map(item => {
              return model.DetectedDocumentType.getJsonObj(item);
            })
          : undefined,
        "detectedLanguages": obj.detectedLanguages
          ? obj.detectedLanguages.map(item => {
              return model.DetectedLanguage.getJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyzeDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "documentMetadata": obj.documentMetadata
          ? model.DocumentMetadata.getDeserializedJsonObj(obj.documentMetadata)
          : undefined,
        "pages": obj.pages
          ? obj.pages.map(item => {
              return model.Page.getDeserializedJsonObj(item);
            })
          : undefined,
        "detectedDocumentTypes": obj.detectedDocumentTypes
          ? obj.detectedDocumentTypes.map(item => {
              return model.DetectedDocumentType.getDeserializedJsonObj(item);
            })
          : undefined,
        "detectedLanguages": obj.detectedLanguages
          ? obj.detectedLanguages.map(item => {
              return model.DetectedLanguage.getDeserializedJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
