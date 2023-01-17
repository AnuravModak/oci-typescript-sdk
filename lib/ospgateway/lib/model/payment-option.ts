/**
 * OSP Gateway API
 * This site describes all the Rest endpoints of OSP Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
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
 * Payment option of a subscription.
 */
export interface PaymentOption {
  /**
   * Wallet instrument internal id.
   */
  "walletInstrumentId"?: string;
  /**
   * Wallet transaction id.
   */
  "walletTransactionId"?: string;

  "paymentMethod": string;
}

export namespace PaymentOption {
  export function getJsonObj(obj: PaymentOption): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "paymentMethod" in obj && obj.paymentMethod) {
      switch (obj.paymentMethod) {
        case "CREDIT_CARD":
          return model.CreditCardPaymentOption.getJsonObj(
            <model.CreditCardPaymentOption>(<object>jsonObj),
            true
          );
        case "PAYPAL":
          return model.PaypalPaymentOption.getJsonObj(
            <model.PaypalPaymentOption>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.paymentMethod}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PaymentOption): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "paymentMethod" in obj && obj.paymentMethod) {
      switch (obj.paymentMethod) {
        case "CREDIT_CARD":
          return model.CreditCardPaymentOption.getDeserializedJsonObj(
            <model.CreditCardPaymentOption>(<object>jsonObj),
            true
          );
        case "PAYPAL":
          return model.PaypalPaymentOption.getDeserializedJsonObj(
            <model.PaypalPaymentOption>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.paymentMethod}`);
      }
    }
    return jsonObj;
  }
}
