/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum QueryApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class QueryClient {
  protected static serviceEndpointTemplate = "https://apm-trace.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean = false;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "Query";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20200630";
    if (this.logger) this.logger.info(`QueryClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        QueryClient.serviceEndpointTemplate,
        this._region,
        QueryClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        QueryClient.serviceEndpointTemplate,
        this._regionId,
        QueryClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      QueryClient.serviceEndpointTemplate,
      region,
      QueryClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      QueryClient.serviceEndpointTemplate,
      regionId,
      QueryClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Returns a list of predefined Quick Pick queries intended to assist the user
   * to choose a query to run.  There is no sorting applied on the results.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListQuickPicksRequest
   * @return ListQuickPicksResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmtraces/ListQuickPicks.ts.html |here} to see how to use ListQuickPicks API.
   */
  public async listQuickPicks(
    listQuickPicksRequest: requests.ListQuickPicksRequest
  ): Promise<responses.ListQuickPicksResponse> {
    if (this.logger) this.logger.debug("Calling operation QueryClient#listQuickPicks.");
    const operationName = "listQuickPicks";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-trace-explorer/20200630/QuickPickSummary/ListQuickPicks";
    const pathParams = {};

    const queryParams = {
      "apmDomainId": listQuickPicksRequest.apmDomainId,
      "limit": listQuickPicksRequest.limit,
      "page": listQuickPicksRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listQuickPicksRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listQuickPicksRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/queries/quickPicks",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListQuickPicksResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.QuickPickSummary,
        type: "Array<model.QuickPickSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-total-items"),
            key: "opcTotalItems",
            dataType: "number"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listQuickPicksRecordIterator function.
   * Creates a new async iterator which will iterate over the models.QuickPickSummary objects
   * contained in responses from the listQuickPicks operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllQuickPicks(
    request: requests.ListQuickPicksRequest
  ): AsyncIterableIterator<model.QuickPickSummary> {
    return paginateRecords(request, req => this.listQuickPicks(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listQuickPicksResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listQuickPicks operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllQuickPicksResponses(
    request: requests.ListQuickPicksRequest
  ): AsyncIterableIterator<responses.ListQuickPicksResponse> {
    return paginateResponses(request, req => this.listQuickPicks(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.QuickPickSummary objects
   * contained in responses from the listQuickPicks operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listQuickPicksRecordIterator(
    request: requests.ListQuickPicksRequest
  ): AsyncIterableIterator<model.QuickPickSummary> {
    return paginateRecords(request, req => this.listQuickPicks(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listQuickPicks operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listQuickPicksResponseIterator(
    request: requests.ListQuickPicksRequest
  ): AsyncIterableIterator<responses.ListQuickPicksResponse> {
    return paginateResponses(request, req => this.listQuickPicks(req));
  }

  /**
   * Retrieves the results (selected attributes and aggregations) of a query constructed according to the Application Performance Monitoring Defined Query Syntax.
   * Query results are filtered by the filter criteria specified in the where clause.
   * Further query results are grouped by the attributes specified in the group by clause.  Finally,
   * ordering (asc/desc) is done by the specified attributes in the order by clause.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param QueryRequest
   * @return QueryResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmtraces/Query.ts.html |here} to see how to use Query API.
   */
  public async query(queryRequest: requests.QueryRequest): Promise<responses.QueryResponse> {
    if (this.logger) this.logger.debug("Calling operation QueryClient#query.");
    const operationName = "query";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-trace-explorer/20200630/QueryResultResponse/Query";
    const pathParams = {};

    const queryParams = {
      "apmDomainId": queryRequest.apmDomainId,
      "limit": queryRequest.limit,
      "page": queryRequest.page,
      "timeSpanStartedGreaterThanOrEqualTo": queryRequest.timeSpanStartedGreaterThanOrEqualTo,
      "timeSpanStartedLessThan": queryRequest.timeSpanStartedLessThan
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": queryRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      queryRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/queries/actions/runQuery",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        queryRequest.queryDetails,
        "QueryDetails",
        model.QueryDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.QueryResponse>{},
        body: await response.json(),
        bodyKey: "queryResultResponse",
        bodyModel: model.QueryResultResponse,
        type: "model.QueryResultResponse",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-total-items"),
            key: "opcTotalItems",
            dataType: "number"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
export enum TraceApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class TraceClient {
  protected static serviceEndpointTemplate = "https://apm-trace.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean = false;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "Trace";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20200630";
    if (this.logger) this.logger.info(`TraceClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        TraceClient.serviceEndpointTemplate,
        this._region,
        TraceClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        TraceClient.serviceEndpointTemplate,
        this._regionId,
        TraceClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      TraceClient.serviceEndpointTemplate,
      region,
      TraceClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      TraceClient.serviceEndpointTemplate,
      regionId,
      TraceClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Gets the aggregated snapshot identified by trace ID.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetAggregatedSnapshotRequest
   * @return GetAggregatedSnapshotResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmtraces/GetAggregatedSnapshot.ts.html |here} to see how to use GetAggregatedSnapshot API.
   */
  public async getAggregatedSnapshot(
    getAggregatedSnapshotRequest: requests.GetAggregatedSnapshotRequest
  ): Promise<responses.GetAggregatedSnapshotResponse> {
    if (this.logger) this.logger.debug("Calling operation TraceClient#getAggregatedSnapshot.");
    const operationName = "getAggregatedSnapshot";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-trace-explorer/20200630/AggregatedSnapshot/GetAggregatedSnapshot";
    const pathParams = {
      "{traceKey}": getAggregatedSnapshotRequest.traceKey
    };

    const queryParams = {
      "apmDomainId": getAggregatedSnapshotRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getAggregatedSnapshotRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getAggregatedSnapshotRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/traces/{traceKey}/aggregatedSnapshotData",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAggregatedSnapshotResponse>{},
        body: await response.json(),
        bodyKey: "aggregatedSnapshot",
        bodyModel: model.AggregatedSnapshot,
        type: "model.AggregatedSnapshot",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the span details identified by spanId.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetSpanRequest
   * @return GetSpanResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmtraces/GetSpan.ts.html |here} to see how to use GetSpan API.
   */
  public async getSpan(
    getSpanRequest: requests.GetSpanRequest
  ): Promise<responses.GetSpanResponse> {
    if (this.logger) this.logger.debug("Calling operation TraceClient#getSpan.");
    const operationName = "getSpan";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-trace-explorer/20200630/Span/GetSpan";
    const pathParams = {
      "{spanKey}": getSpanRequest.spanKey,
      "{traceKey}": getSpanRequest.traceKey
    };

    const queryParams = {
      "apmDomainId": getSpanRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getSpanRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getSpanRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/spans/{traceKey}/{spanKey}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSpanResponse>{},
        body: await response.json(),
        bodyKey: "span",
        bodyModel: model.Span,
        type: "model.Span",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the trace details identified by traceId.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetTraceRequest
   * @return GetTraceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmtraces/GetTrace.ts.html |here} to see how to use GetTrace API.
   */
  public async getTrace(
    getTraceRequest: requests.GetTraceRequest
  ): Promise<responses.GetTraceResponse> {
    if (this.logger) this.logger.debug("Calling operation TraceClient#getTrace.");
    const operationName = "getTrace";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-trace-explorer/20200630/Trace/GetTrace";
    const pathParams = {
      "{traceKey}": getTraceRequest.traceKey
    };

    const queryParams = {
      "apmDomainId": getTraceRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getTraceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getTraceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/traces/{traceKey}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetTraceResponse>{},
        body: await response.json(),
        bodyKey: "trace",
        bodyModel: model.Trace,
        type: "model.Trace",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the trace snapshots data identified by trace ID.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetTraceSnapshotRequest
   * @return GetTraceSnapshotResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmtraces/GetTraceSnapshot.ts.html |here} to see how to use GetTraceSnapshot API.
   */
  public async getTraceSnapshot(
    getTraceSnapshotRequest: requests.GetTraceSnapshotRequest
  ): Promise<responses.GetTraceSnapshotResponse> {
    if (this.logger) this.logger.debug("Calling operation TraceClient#getTraceSnapshot.");
    const operationName = "getTraceSnapshot";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-trace-explorer/20200630/TraceSnapshot/GetTraceSnapshot";
    const pathParams = {
      "{traceKey}": getTraceSnapshotRequest.traceKey
    };

    const queryParams = {
      "apmDomainId": getTraceSnapshotRequest.apmDomainId,
      "isSummarized": getTraceSnapshotRequest.isSummarized,
      "threadId": getTraceSnapshotRequest.threadId,
      "snapshotTime": getTraceSnapshotRequest.snapshotTime
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getTraceSnapshotRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getTraceSnapshotRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/traces/{traceKey}/snapshotData",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetTraceSnapshotResponse>{},
        body: await response.json(),
        bodyKey: "traceSnapshot",
        bodyModel: model.TraceSnapshot,
        type: "model.TraceSnapshot",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
