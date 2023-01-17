/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.017
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

export interface TransferAppliance {
  /**
   * Unique alpha-numeric identifier for a transfer appliance auto generated during create.
   */
  "label": string;
  "lifecycleState"?: TransferAppliance.LifecycleState;
  "transferJobId"?: string;
  "serialNumber"?: string;
  "creationTime"?: Date;
  "customerReceivedTime"?: Date;
  "customerReturnedTime"?: Date;
  "nextBillingTime"?: Date;
  "deliverySecurityTieId"?: string;
  "returnSecurityTieId"?: string;
  "applianceDeliveryTrackingNumber"?: string;
  "applianceReturnDeliveryTrackingNumber"?: string;
  "applianceDeliveryVendor"?: string;
  "customerShippingAddress"?: model.ShippingAddress;
  "uploadStatusLogUri"?: string;
  "returnShippingLabelUri"?: string;
  /**
   * Expected return date from customer for the device, time portion should be zero.
   */
  "expectedReturnDate"?: Date;
  /**
   * Start time for the window to pickup the device from customer.
   */
  "pickupWindowStartTime"?: Date;
  /**
   * End time for the window to pickup the device from customer.
   */
  "pickupWindowEndTime"?: Date;
  /**
   * Minimum storage capacity of the device, in terabytes. Valid options are 50, 95 and 150. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minimumStorageCapacityInTerabytes"?: number;
}

export namespace TransferAppliance {
  export enum LifecycleState {
    Requested = "REQUESTED",
    OraclePreparing = "ORACLE_PREPARING",
    Shipping = "SHIPPING",
    Delivered = "DELIVERED",
    Preparing = "PREPARING",
    Finalized = "FINALIZED",
    ReturnLabelRequested = "RETURN_LABEL_REQUESTED",
    ReturnLabelGenerating = "RETURN_LABEL_GENERATING",
    ReturnLabelAvailable = "RETURN_LABEL_AVAILABLE",
    ReturnDelayed = "RETURN_DELAYED",
    ReturnShipped = "RETURN_SHIPPED",
    ReturnShippedCancelled = "RETURN_SHIPPED_CANCELLED",
    OracleReceived = "ORACLE_RECEIVED",
    OracleReceivedCancelled = "ORACLE_RECEIVED_CANCELLED",
    Processing = "PROCESSING",
    Complete = "COMPLETE",
    CustomerNeverReceived = "CUSTOMER_NEVER_RECEIVED",
    OracleNeverReceived = "ORACLE_NEVER_RECEIVED",
    CustomerLost = "CUSTOMER_LOST",
    Cancelled = "CANCELLED",
    Deleted = "DELETED",
    Rejected = "REJECTED",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TransferAppliance): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getJsonObj(obj.customerShippingAddress)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TransferAppliance): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getDeserializedJsonObj(obj.customerShippingAddress)
          : undefined
      }
    };

    return jsonObj;
  }
}
