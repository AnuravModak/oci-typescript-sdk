/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new Kafka (e.g. Confluent) Schema Registry Connection.
 *
 */
export interface CreateKafkaSchemaRegistryConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The Kafka (e.g. Confluent) Schema Registry technology type.
   *
   */
  "technologyType": string;
  /**
   * Kafka Schema Registry URL.
   * e.g.: 'https://server1.us.oracle.com:8081'
   *
   */
  "url": string;
  /**
   * Used authentication mechanism to access Schema Registry.
   *
   */
  "authenticationType": string;
  /**
   * The username to access Schema Registry using basic authentation.
   * This value is injected into 'schema.registry.basic.auth.user.info=user:password' configuration property.
   *
   */
  "username"?: string;
  /**
   * The password to access Schema Registry using basic authentation.
   * This value is injected into 'schema.registry.basic.auth.user.info=user:password' configuration property.
   *
   */
  "password"?: string;
  /**
   * The base64 encoded content of the TrustStore file.
   *
   */
  "trustStore"?: string;
  /**
   * The TrustStore password.
   *
   */
  "trustStorePassword"?: string;
  /**
   * The base64 encoded content of the KeyStore file.
   *
   */
  "keyStore"?: string;
  /**
   * The KeyStore password.
   *
   */
  "keyStorePassword"?: string;
  /**
   * The password for the cert inside the KeyStore.
   * In case it differs from the KeyStore password, it should be provided.
   *
   */
  "sslKeyPassword"?: string;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;

  "connectionType": string;
}

export namespace CreateKafkaSchemaRegistryConnectionDetails {
  export function getJsonObj(
    obj: CreateKafkaSchemaRegistryConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(
            obj
          ) as CreateKafkaSchemaRegistryConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "KAFKA_SCHEMA_REGISTRY";
  export function getDeserializedJsonObj(
    obj: CreateKafkaSchemaRegistryConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateKafkaSchemaRegistryConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
