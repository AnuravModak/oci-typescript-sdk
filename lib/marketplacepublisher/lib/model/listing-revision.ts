/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
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
 * The model for an Oracle Cloud Infrastructure Marketplace Publisher listing revision.
 */
export interface ListingRevision {
  /**
   * Unique OCID identifier for the listing revision in Marketplace Publisher.
   */
  "id": string;
  /**
   * The unique identifier for the listing this revision belongs to.
   */
  "listingId": string;
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId"?: string;
  /**
   * The name for the listing revision.
   */
  "displayName": string;
  /**
   * The revision number for the listing revision. This is an internal attribute
   */
  "revisionNumber"?: string;
  "versionDetails"?: model.VersionDetails;
  /**
   * Single line introduction for the listing revision.
   */
  "headline": string;
  /**
   * The tagline of the listing revision.
   */
  "tagline"?: string;
  /**
   * Keywords associated with the listing revision.
   */
  "keywords"?: string;
  /**
   * A short description for the listing revision.
   */
  "shortDescription"?: string;
  /**
   * Usage information for the listing revision.
   */
  "usageInformation"?: string;
  /**
   * A long description for the listing revision.
   */
  "longDescription"?: string;
  /**
   * System requirements for the listing revision.
   */
  "systemRequirements"?: string;
  /**
   * The time the listing revision was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the listing revision was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The categories for the listing revsion.
   */
  "categories": Array<string>;
  /**
   * The markets supported by the listing revision.
   */
  "markets"?: Array<string>;
  "contentLanguage"?: model.LanguageItem;
  /**
   * Languages supported by the publisher for the listing revision.
   */
  "supportedlanguages"?: Array<model.LanguageItem>;
  /**
   * Contact information to use to get support from the publisher for the listing revision.
   */
  "supportContacts"?: Array<model.SupportContact>;
  /**
   * Links to support resources for the listing revision.
   */
  "supportLinks"?: Array<model.NamedLink>;
  "icon"?: model.ListingRevisionIconAttachment;
  /**
   * The current status for the Listing revision.
   */
  "status": ListingRevision.Status;
  /**
   * Status notes for the listing revision.
   */
  "statusNotes"?: string;
  /**
   * The current state of the listing revision.
   */
  "lifecycleState": ListingRevision.LifecycleState;
  /**
   * The listing's package type. Populated from the listing.
   */
  "packageType": model.PackageType;
  /**
   * The pricing model for the listing revision.
   */
  "pricingType": ListingRevision.PricingType;
  /**
   * Allowed tenancies provided when a listing revision is published as private.
   */
  "allowedTenancies"?: Array<string>;
  /**
   * Identifies whether publisher allows internal tenancy launches for the listing revision.
   */
  "areInternalTenancyLaunchAllowed"?: boolean;
  /**
   * Additional metadata key/value pairs for the listing revision summary.
   *
   */
  "extendedMetadata"?: { [key: string]: string };
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ListingRevision {
  export enum Status {
    New = "NEW",
    PendingReview = "PENDING_REVIEW",
    ReviewInProgress = "REVIEW_IN_PROGRESS",
    Rejected = "REJECTED",
    Approved = "APPROVED",
    PublishInProgress = "PUBLISH_IN_PROGRESS",
    PublishFailed = "PUBLISH_FAILED",
    Published = "PUBLISHED",
    PublishAsPrivateFailed = "PUBLISH_AS_PRIVATE_FAILED",
    PublishedAsPrivate = "PUBLISHED_AS_PRIVATE",
    PublishAsPrivateInProgress = "PUBLISH_AS_PRIVATE_IN_PROGRESS",
    UnpublishInProgress = "UNPUBLISH_IN_PROGRESS",
    Unpublished = "UNPUBLISHED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PricingType {
    Free = "FREE",
    Byol = "BYOL",
    Paygo = "PAYGO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ListingRevision): object {
    const jsonObj = {
      ...obj,
      ...{
        "versionDetails": obj.versionDetails
          ? model.VersionDetails.getJsonObj(obj.versionDetails)
          : undefined,

        "contentLanguage": obj.contentLanguage
          ? model.LanguageItem.getJsonObj(obj.contentLanguage)
          : undefined,
        "supportedlanguages": obj.supportedlanguages
          ? obj.supportedlanguages.map(item => {
              return model.LanguageItem.getJsonObj(item);
            })
          : undefined,
        "supportContacts": obj.supportContacts
          ? obj.supportContacts.map(item => {
              return model.SupportContact.getJsonObj(item);
            })
          : undefined,
        "supportLinks": obj.supportLinks
          ? obj.supportLinks.map(item => {
              return model.NamedLink.getJsonObj(item);
            })
          : undefined,
        "icon": obj.icon ? model.ListingRevisionIconAttachment.getJsonObj(obj.icon) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ListingRevision): object {
    const jsonObj = {
      ...obj,
      ...{
        "versionDetails": obj.versionDetails
          ? model.VersionDetails.getDeserializedJsonObj(obj.versionDetails)
          : undefined,

        "contentLanguage": obj.contentLanguage
          ? model.LanguageItem.getDeserializedJsonObj(obj.contentLanguage)
          : undefined,
        "supportedlanguages": obj.supportedlanguages
          ? obj.supportedlanguages.map(item => {
              return model.LanguageItem.getDeserializedJsonObj(item);
            })
          : undefined,
        "supportContacts": obj.supportContacts
          ? obj.supportContacts.map(item => {
              return model.SupportContact.getDeserializedJsonObj(item);
            })
          : undefined,
        "supportLinks": obj.supportLinks
          ? obj.supportLinks.map(item => {
              return model.NamedLink.getDeserializedJsonObj(item);
            })
          : undefined,
        "icon": obj.icon
          ? model.ListingRevisionIconAttachment.getDeserializedJsonObj(obj.icon)
          : undefined
      }
    };

    return jsonObj;
  }
}
