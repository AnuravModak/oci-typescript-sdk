/**
 * ManagementDashboard API
 * API for the Management Dashboard micro-service. Use this API for dashboard and saved search metadata preservation and to perform  tasks such as creating a dashboard, creating a saved search, and obtaining a list of dashboards and saved searches in a compartment.
    

 * OpenAPI spec version: 20200901
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
 * Properties of a saved search.
 */
export interface CreateManagementSavedSearchDetails {
  /**
   * ID of the saved search, which must only be provided for Out-of-the-Box (OOB) saved search.
   */
  "id"?: string;
  /**
   * Display name of the saved search.
   */
  "displayName": string;
  /**
   * ID of the service (for example log-analytics) that owns the saved search. Each service has a unique ID.
   */
  "providerId": string;
  /**
   * The version of the metadata of the provider. This is useful for provider to version its features and metadata. Any newly created saved search (or dashboard) should use providerVersion 3.0.0.
   */
  "providerVersion": string;
  /**
   * The user friendly name of the service (for example, Logging Analytics) that owns the saved search.
   */
  "providerName": string;
  /**
   * OCID of the compartment in which the saved search resides.
   */
  "compartmentId": string;
  /**
   * Determines whether the saved search is an Out-of-the-Box (OOB) saved search. Note that OOB saved searches are only provided by Oracle and cannot be modified.
   */
  "isOobSavedSearch": boolean;
  /**
   * Description of the saved search.
   */
  "description": string;
  /**
   * JSON that contains internationalization options.
   */
  "nls": any;
  /**
   * Determines how the saved search is displayed in a dashboard.
   */
  "type": model.SavedSearchTypes;
  /**
   * It defines the visualization type of the widget saved search, the UI options of that visualization type, the binding of data to the visualization.
   */
  "uiConfig": any;
  /**
   * It defines how data is fetched. A functional saved search needs a valid dataConfig. See examples on how it can be constructed for various data sources.
   */
  "dataConfig": Array<any>;
  /**
   * Screen image of the saved search.
   */
  "screenImage": string;
  /**
   * The version of the metadata defined in the API. This is maintained and enforced by dashboard server. Currently it is 2.0.
   */
  "metadataVersion": string;
  /**
   * The UI template that the saved search uses to render itself.
   */
  "widgetTemplate": string;
  /**
   * The View Model that the saved search uses to render itself.
   */
  "widgetVM": string;
  /**
   * Defines parameters for the saved search.
   */
  "parametersConfig"?: Array<any>;
  /**
   * Contains configuration for enabling features.
   */
  "featuresConfig"?: any;
  /**
   * Drill-down configuration to define the destination of a drill-down action.
   */
  "drilldownConfig"?: Array<any>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateManagementSavedSearchDetails {
  export function getJsonObj(obj: CreateManagementSavedSearchDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateManagementSavedSearchDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
