/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * Settings schema
 */
export interface Setting {
  /**
   * Unique identifier for the SCIM Resource as defined by the Service Provider. Each representation of the Resource MUST include a non-empty id value. This identifier MUST be unique across the Service Provider's entire set of Resources. It MUST be a stable, non-reassignable identifier that does not change when the same Resource is returned in subsequent requests. The value of the id attribute is always issued by the Service Provider and MUST never be specified by the Service Consumer. bulkId: is a reserved keyword and MUST NOT be used in the unique identifier.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: global
   */
  "id"?: string;
  /**
   * Unique OCI identifier for the SCIM Resource.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: global
   */
  "ocid"?: string;
  /**
   * REQUIRED. The schemas attribute is an array of Strings which allows introspection of the supported schema version for a SCIM representation as well any schema extensions supported by that representation. Each String value must be a unique URI. This specification defines URIs for User, Group, and a standard \\\"enterprise\\\" extension. All representations of SCIM schema MUST include a non-zero value array with value(s) of the URIs supported by that representation. Duplicate values MUST NOT be included. Value order is not specified and MUST not impact behavior.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "schemas": Array<string>;
  "meta"?: model.Meta;
  "idcsCreatedBy"?: model.IdcsCreatedBy;
  "idcsLastModifiedBy"?: model.IdcsLastModifiedBy;
  /**
   * Each value of this attribute specifies an operation that only an internal client may perform on this particular resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsPreventedOperations"?: Array<Setting.IdcsPreventedOperations>;
  /**
   * A list of tags on this resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [key, value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "tags"?: Array<model.Tags>;
  /**
   * A boolean flag indicating this resource in the process of being deleted. Usually set to true when synchronous deletion of the resource would take too long.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "deleteInProgress"?: boolean;
  /**
   * The release number when the resource was upgraded.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsLastUpgradedInRelease"?: string;
  /**
   * OCI Domain Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "domainOcid"?: string;
  /**
   * OCI Compartment Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "compartmentOcid"?: string;
  /**
   * OCI Tenant Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "tenancyOcid"?: string;
  /**
   * An identifier for the Resource as defined by the Service Consumer. The externalId may simplify identification of the Resource between Service Consumer and Service Provider by allowing the Consumer to refer to the Resource with its own identifier, obviating the need to store a local mapping between the local identifier of the Resource and the identifier used by the Service Provider. Each Resource MAY include a non-empty externalId value. The value of the externalId attribute is always issued by the Service Consumer and can never be specified by the Service Provider. The Service Provider MUST always interpret the externalId as scoped to the Service Consumer's tenant.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "externalId"?: string;
  /**
   * Contact emails used to notify tenants. Can be one or more user or group alias emails.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "contactEmails"?: Array<string>;
  /**
   * Indicates if the branding is default or custom
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "customBranding"?: boolean;
  /**
   * Preferred written or spoken language used for localized user interfaces
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCanonicalValueSourceFilter: attrName eq \"languages\" and attrValues.value eq \"$(preferredLanguage)\"
   *  - idcsCanonicalValueSourceResourceType: AllowedValue
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "preferredLanguage"?: string;
  /**
   * User's timezone
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCanonicalValueSourceFilter: attrName eq \"timezones\" and attrValues.value eq \"$(timezone)\"
   *  - idcsCanonicalValueSourceResourceType: AllowedValue
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "timezone"?: string;
  /**
   * Controls whether DiagnosticRecords for external search-operations (against SCIM resource-types in the Admin service) identify returned resources.  If true, indicates that for each successful external search-operation at least one DiagnosticRecord will include at least one identifier for each matching resource that is returned in that search-response.  If false, no DiagnosticRecord should be expected to identify returned resources for a search-operation.  The default value is false.
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "diagnosticRecordForSearchIdentifiesReturnedResources"?: boolean;
  /**
   * Specifies whether re-authentication is required or not when a user changes one of their security factors such as password or email. Default is true to ensure more secure behavior.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "reAuthWhenChangingMyAuthenticationFactors"?: boolean;
  /**
   * If reAuthWhenChangingMyAuthenticationFactors is true (default), this attribute specifies which re-authentication factor to use. Allowed value is \\\"password\\\".
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "reAuthFactor"?: Array<Setting.ReAuthFactor>;
  /**
   * Default location for purposes of localizing items such as currency, date and time format, numerical representations, and so on.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCanonicalValueSourceFilter: attrName eq \"locales\" and attrValues.value eq \"$(locale)\"
   *  - idcsCanonicalValueSourceResourceType: AllowedValue
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "locale"?: string;
  /**
   * This value indicates whether Customer Service Representatives can login and have readOnly or readWrite access.  A value of 'none' means CSR cannot login to the services.
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   */
  "csrAccess": Setting.CsrAccess;
  /**
   * Indicates if access on SigningCert is allowed to public or not
   * <p>
   **Added In:** 17.3.4
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "signingCertPublicAccess"?: boolean;
  /**
   * **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   * - caseExact: false
   * - multiValued: false
   * - mutability: readWrite
   * - required: false
   * - returned: default
   * - type: string
   * - uniqueness: none
   * Subject mapping user profile attribute. The input format should be SCIM compliant. This attribute should be of type String and multivalued to false.
   */
  "subMappingAttr"?: string;
  /**
   * Indicates whether all the Apps in this customer tenancy should trust each other. A value of true overrides the 'defaultTrustScope' attribute here in Settings, as well as any App-specific 'trustScope' attribute, to force in effect 'trustScope=Account' for every App in this customer tenancy.
   * <p>
   **Added In:** 18.1.6
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "accountAlwaysTrustScope"?: boolean;
  /**
   * **Deprecated Since: 18.3.6**
   * <p>
   **SCIM++ Properties:**
   * - multiValued: false
   * - mutability: readWrite
   * - required: false
   * - returned: default
   * - type: string
   * Indicates the default trust scope for all apps
   */
  "defaultTrustScope"?: Setting.DefaultTrustScope;
  /**
   * Tenant issuer.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "issuer"?: string;
  /**
   * Previous Tenant issuer. This is an Oracle Identity Cloud Service internal attribute which is not meant to be directly modified by ID Admin. Even if the request body (Settings) contains this attribute, the actual value will be set according to the Oracle Identity Cloud Service internal logic rather than solely based on the value provided in the request payload.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "prevIssuer"?: string;
  /**
   * The level of diagnostic logging that is currently in effect. A level of 0 (zero) indicates that diagnostic logging is disabled. A level of 1 (one) indicates that diagnostic logging is enabled.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diagnosticLevel"?: number;
  /**
   * The end time up to which diagnostic recording is switched on
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "diagnosticTracingUpto"?: string;
  /**
   * One or more email domains allowed in a user's email field. If unassigned, any domain is allowed.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "allowedDomains"?: Array<string>;
  /**
   * Indicates if Terms of Use is enabled in UI
   * <p>
   **Added In:** 18.2.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "enableTermsOfUse"?: boolean;
  /**
   * Terms of Use URL
   * <p>
   **Added In:** 18.2.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "termsOfUseUrl"?: string;
  /**
   * Privacy Policy URL
   * <p>
   **Added In:** 18.2.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "privacyPolicyUrl"?: string;
  /**
   * Database Migration Status
   * <p>
   **Added In:** 19.2.1
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "migrationStatus"?: string;
  /**
   * On-Premises provisioning feature toggle.
   * <p>
   **Added In:** 19.2.1
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "onPremisesProvisioning"?: boolean;
  /**
   * If specified, indicates the set of Urls which can be returned to after successful forgot password flow
   * <p>
   **Added In:** 19.3.3
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: true
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - caseExact: false
   */
  "allowedForgotPasswordFlowReturnUrls"?: Array<string>;
  /**
   * If specified, indicates the set of allowed notification redirect Urls which can be specified as the value of \\\"notificationRedirectUrl\\\" in the POST .../admin/v1/MePasswordResetRequestor request payload, which will then be included in the reset password email notification sent to a user as part of the forgot password / password reset flow.
   * <p>
   **Added In:** 2009041201
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: true
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - caseExact: false
   */
  "allowedNotificationRedirectUrls"?: Array<string>;
  /**
   * Audit Event retention period. If set, overrides default of 30 days after which Audit Events will be purged
   * <p>
   **Added In:** 19.2.1
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "auditEventRetentionPeriod"?: number;
  /**
   * Indicates if 'hosted' option was selected
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "isHostedPage"?: boolean;
  /**
   * Storage URL location where the sanitized custom html is located
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "customHtmlLocation"?: string;
  /**
   * Storage URL location where the sanitized custom css is located
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "customCssLocation"?: string;
  /**
   * Custom translations (JSON String)
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "customTranslation"?: string;
  /**
   * The attribute to store the cloud account name
   * <p>
   **Deprecated Since: 2011192329**
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "cloudAccountName"?: string;
  /**
   * CloudAccountMigration: Enable Custom SIM Migrator Url.
   * <p>
   **Added In:** 2012271618
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "cloudMigrationUrlEnabled"?: boolean;
  /**
   * If specified, indicates the custom SIM Migrator Url which can be used while SIM to Oracle Identity Cloud Service CloudAccount Migration.
   * <p>
   **Added In:** 2012271618
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - caseExact: false
   */
  "cloudMigrationCustomUrl"?: string;
  /**
   * By default, a service admin can list all users in stripe. If true, a service admin cannot list other users.
   * <p>
   **Added In:** 2108190438
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "serviceAdminCannotListOtherUsers"?: boolean;
  /**
   * Limit the maximum return of members for an AppRole
   * <p>
   **Added In:** 2111112015
   * <p>
   **SCIM++ Properties:**
   *  - idcsMinValue: 0
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxNoOfAppRoleMembersToReturn"?: number;
  /**
   * Limit the maximum return of CMVA for an App
   * <p>
   **Added In:** 2111112015
   * <p>
   **SCIM++ Properties:**
   *  - idcsMinValue: 0
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxNoOfAppCMVAToReturn"?: number;
  /**
   * Maximum duration for IAM User Principal Session Token expiry
   * <p>
   **Added In:** 2307071836
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "iamUpstSessionExpiry"?: number;
  "cloudGateCorsSettings"?: model.SettingsCloudGateCorsSettings;
  "certificateValidation"?: model.SettingsCertificateValidation;
  /**
   * Custom claims associated with the specific tenant
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [name]
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   *  - uniqueness: none
   */
  "tenantCustomClaims"?: Array<model.SettingsTenantCustomClaims>;
  /**
   * Purge Configs for different Resource Types
   * <p>
   **Deprecated Since: 19.1.6**
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [resourceName]
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "purgeConfigs"?: Array<model.SettingsPurgeConfigs>;
  /**
   * Default name of the Company in different locales
   * <p>
   **Added In:** 18.2.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [locale]
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "defaultCompanyNames"?: Array<model.SettingsDefaultCompanyNames>;
  /**
   * Default Login text in different locales
   * <p>
   **Added In:** 18.2.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [locale]
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "defaultLoginTexts"?: Array<model.SettingsDefaultLoginTexts>;
  /**
   * References to various images
   * <p>
   **Added In:** 18.2.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [type]
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "defaultImages"?: Array<model.SettingsDefaultImages>;
  /**
   * Name of the company in different locales
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [locale]
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "companyNames"?: Array<model.SettingsCompanyNames>;
  /**
   * Login text in different locales
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [locale]
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "loginTexts"?: Array<model.SettingsLoginTexts>;
  /**
   * References to various images
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [type]
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "images"?: Array<model.SettingsImages>;
}

export namespace Setting {
  export enum IdcsPreventedOperations {
    Replace = "replace",
    Update = "update",
    Delete = "delete",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ReAuthFactor {
    Password = "password",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum CsrAccess {
    ReadOnly = "readOnly",
    ReadWrite = "readWrite",
    None = "none",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultTrustScope {
    Explicit = "Explicit",
    Account = "Account",
    Tags = "Tags",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Setting): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getJsonObj(item);
            })
          : undefined,

        "cloudGateCorsSettings": obj.cloudGateCorsSettings
          ? model.SettingsCloudGateCorsSettings.getJsonObj(obj.cloudGateCorsSettings)
          : undefined,
        "certificateValidation": obj.certificateValidation
          ? model.SettingsCertificateValidation.getJsonObj(obj.certificateValidation)
          : undefined,
        "tenantCustomClaims": obj.tenantCustomClaims
          ? obj.tenantCustomClaims.map(item => {
              return model.SettingsTenantCustomClaims.getJsonObj(item);
            })
          : undefined,
        "purgeConfigs": obj.purgeConfigs
          ? obj.purgeConfigs.map(item => {
              return model.SettingsPurgeConfigs.getJsonObj(item);
            })
          : undefined,
        "defaultCompanyNames": obj.defaultCompanyNames
          ? obj.defaultCompanyNames.map(item => {
              return model.SettingsDefaultCompanyNames.getJsonObj(item);
            })
          : undefined,
        "defaultLoginTexts": obj.defaultLoginTexts
          ? obj.defaultLoginTexts.map(item => {
              return model.SettingsDefaultLoginTexts.getJsonObj(item);
            })
          : undefined,
        "defaultImages": obj.defaultImages
          ? obj.defaultImages.map(item => {
              return model.SettingsDefaultImages.getJsonObj(item);
            })
          : undefined,
        "companyNames": obj.companyNames
          ? obj.companyNames.map(item => {
              return model.SettingsCompanyNames.getJsonObj(item);
            })
          : undefined,
        "loginTexts": obj.loginTexts
          ? obj.loginTexts.map(item => {
              return model.SettingsLoginTexts.getJsonObj(item);
            })
          : undefined,
        "images": obj.images
          ? obj.images.map(item => {
              return model.SettingsImages.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Setting): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getDeserializedJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getDeserializedJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getDeserializedJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getDeserializedJsonObj(item);
            })
          : undefined,

        "cloudGateCorsSettings": obj.cloudGateCorsSettings
          ? model.SettingsCloudGateCorsSettings.getDeserializedJsonObj(obj.cloudGateCorsSettings)
          : undefined,
        "certificateValidation": obj.certificateValidation
          ? model.SettingsCertificateValidation.getDeserializedJsonObj(obj.certificateValidation)
          : undefined,
        "tenantCustomClaims": obj.tenantCustomClaims
          ? obj.tenantCustomClaims.map(item => {
              return model.SettingsTenantCustomClaims.getDeserializedJsonObj(item);
            })
          : undefined,
        "purgeConfigs": obj.purgeConfigs
          ? obj.purgeConfigs.map(item => {
              return model.SettingsPurgeConfigs.getDeserializedJsonObj(item);
            })
          : undefined,
        "defaultCompanyNames": obj.defaultCompanyNames
          ? obj.defaultCompanyNames.map(item => {
              return model.SettingsDefaultCompanyNames.getDeserializedJsonObj(item);
            })
          : undefined,
        "defaultLoginTexts": obj.defaultLoginTexts
          ? obj.defaultLoginTexts.map(item => {
              return model.SettingsDefaultLoginTexts.getDeserializedJsonObj(item);
            })
          : undefined,
        "defaultImages": obj.defaultImages
          ? obj.defaultImages.map(item => {
              return model.SettingsDefaultImages.getDeserializedJsonObj(item);
            })
          : undefined,
        "companyNames": obj.companyNames
          ? obj.companyNames.map(item => {
              return model.SettingsCompanyNames.getDeserializedJsonObj(item);
            })
          : undefined,
        "loginTexts": obj.loginTexts
          ? obj.loginTexts.map(item => {
              return model.SettingsLoginTexts.getDeserializedJsonObj(item);
            })
          : undefined,
        "images": obj.images
          ? obj.images.map(item => {
              return model.SettingsImages.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}