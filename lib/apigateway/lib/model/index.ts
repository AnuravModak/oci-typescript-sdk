/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AccessLogPolicy from "./access-log-policy";
export import AccessLogPolicy = AccessLogPolicy.AccessLogPolicy;
import * as Api from "./api";
export import Api = Api.Api;
import * as ApiCollection from "./api-collection";
export import ApiCollection = ApiCollection.ApiCollection;
import * as ApiSpecification from "./api-specification";
export import ApiSpecification = ApiSpecification.ApiSpecification;
import * as ApiSpecificationLoggingPolicies from "./api-specification-logging-policies";
export import ApiSpecificationLoggingPolicies = ApiSpecificationLoggingPolicies.ApiSpecificationLoggingPolicies;
import * as ApiSpecificationRequestPolicies from "./api-specification-request-policies";
export import ApiSpecificationRequestPolicies = ApiSpecificationRequestPolicies.ApiSpecificationRequestPolicies;
import * as ApiSpecificationRoute from "./api-specification-route";
export import ApiSpecificationRoute = ApiSpecificationRoute.ApiSpecificationRoute;
import * as ApiSpecificationRouteBackend from "./api-specification-route-backend";
export import ApiSpecificationRouteBackend = ApiSpecificationRouteBackend.ApiSpecificationRouteBackend;
import * as ApiSpecificationRouteRequestPolicies from "./api-specification-route-request-policies";
export import ApiSpecificationRouteRequestPolicies = ApiSpecificationRouteRequestPolicies.ApiSpecificationRouteRequestPolicies;
import * as ApiSpecificationRouteResponsePolicies from "./api-specification-route-response-policies";
export import ApiSpecificationRouteResponsePolicies = ApiSpecificationRouteResponsePolicies.ApiSpecificationRouteResponsePolicies;
import * as ApiSummary from "./api-summary";
export import ApiSummary = ApiSummary.ApiSummary;
import * as ApiValidationDetail from "./api-validation-detail";
export import ApiValidationDetail = ApiValidationDetail.ApiValidationDetail;
import * as ApiValidationDetails from "./api-validation-details";
export import ApiValidationDetails = ApiValidationDetails.ApiValidationDetails;
import * as ApiValidationResult from "./api-validation-result";
export import ApiValidationResult = ApiValidationResult.ApiValidationResult;
import * as ApiValidations from "./api-validations";
export import ApiValidations = ApiValidations.ApiValidations;
import * as AuthenticationPolicy from "./authentication-policy";
export import AuthenticationPolicy = AuthenticationPolicy.AuthenticationPolicy;
import * as BodyValidationRequestPolicy from "./body-validation-request-policy";
export import BodyValidationRequestPolicy = BodyValidationRequestPolicy.BodyValidationRequestPolicy;
import * as Certificate from "./certificate";
export import Certificate = Certificate.Certificate;
import * as CertificateCollection from "./certificate-collection";
export import CertificateCollection = CertificateCollection.CertificateCollection;
import * as CertificateSummary from "./certificate-summary";
export import CertificateSummary = CertificateSummary.CertificateSummary;
import * as ChangeApiCompartmentDetails from "./change-api-compartment-details";
export import ChangeApiCompartmentDetails = ChangeApiCompartmentDetails.ChangeApiCompartmentDetails;
import * as ChangeCertificateCompartmentDetails from "./change-certificate-compartment-details";
export import ChangeCertificateCompartmentDetails = ChangeCertificateCompartmentDetails.ChangeCertificateCompartmentDetails;
import * as ChangeDeploymentCompartmentDetails from "./change-deployment-compartment-details";
export import ChangeDeploymentCompartmentDetails = ChangeDeploymentCompartmentDetails.ChangeDeploymentCompartmentDetails;
import * as ChangeGatewayCompartmentDetails from "./change-gateway-compartment-details";
export import ChangeGatewayCompartmentDetails = ChangeGatewayCompartmentDetails.ChangeGatewayCompartmentDetails;
import * as ContentValidation from "./content-validation";
export import ContentValidation = ContentValidation.ContentValidation;
import * as CorsPolicy from "./cors-policy";
export import CorsPolicy = CorsPolicy.CorsPolicy;
import * as CreateApiDetails from "./create-api-details";
export import CreateApiDetails = CreateApiDetails.CreateApiDetails;
import * as CreateCertificateDetails from "./create-certificate-details";
export import CreateCertificateDetails = CreateCertificateDetails.CreateCertificateDetails;
import * as CreateDeploymentDetails from "./create-deployment-details";
export import CreateDeploymentDetails = CreateDeploymentDetails.CreateDeploymentDetails;
import * as CreateGatewayDetails from "./create-gateway-details";
export import CreateGatewayDetails = CreateGatewayDetails.CreateGatewayDetails;
import * as CreateSdkDetails from "./create-sdk-details";
export import CreateSdkDetails = CreateSdkDetails.CreateSdkDetails;
import * as Deployment from "./deployment";
export import Deployment = Deployment.Deployment;
import * as DeploymentCollection from "./deployment-collection";
export import DeploymentCollection = DeploymentCollection.DeploymentCollection;
import * as DeploymentSummary from "./deployment-summary";
export import DeploymentSummary = DeploymentSummary.DeploymentSummary;
import * as ExecutionLogPolicy from "./execution-log-policy";
export import ExecutionLogPolicy = ExecutionLogPolicy.ExecutionLogPolicy;
import * as FilterHeaderPolicy from "./filter-header-policy";
export import FilterHeaderPolicy = FilterHeaderPolicy.FilterHeaderPolicy;
import * as FilterHeaderPolicyItem from "./filter-header-policy-item";
export import FilterHeaderPolicyItem = FilterHeaderPolicyItem.FilterHeaderPolicyItem;
import * as FilterQueryParameterPolicy from "./filter-query-parameter-policy";
export import FilterQueryParameterPolicy = FilterQueryParameterPolicy.FilterQueryParameterPolicy;
import * as FilterQueryParameterPolicyItem from "./filter-query-parameter-policy-item";
export import FilterQueryParameterPolicyItem = FilterQueryParameterPolicyItem.FilterQueryParameterPolicyItem;
import * as Gateway from "./gateway";
export import Gateway = Gateway.Gateway;
import * as GatewayCollection from "./gateway-collection";
export import GatewayCollection = GatewayCollection.GatewayCollection;
import * as GatewaySummary from "./gateway-summary";
export import GatewaySummary = GatewaySummary.GatewaySummary;
import * as HeaderFieldSpecification from "./header-field-specification";
export import HeaderFieldSpecification = HeaderFieldSpecification.HeaderFieldSpecification;
import * as HeaderTransformationPolicy from "./header-transformation-policy";
export import HeaderTransformationPolicy = HeaderTransformationPolicy.HeaderTransformationPolicy;
import * as HeaderValidationItem from "./header-validation-item";
export import HeaderValidationItem = HeaderValidationItem.HeaderValidationItem;
import * as HeaderValidationRequestPolicy from "./header-validation-request-policy";
export import HeaderValidationRequestPolicy = HeaderValidationRequestPolicy.HeaderValidationRequestPolicy;
import * as IpAddress from "./ip-address";
export import IpAddress = IpAddress.IpAddress;
import * as JsonWebTokenClaim from "./json-web-token-claim";
export import JsonWebTokenClaim = JsonWebTokenClaim.JsonWebTokenClaim;
import * as PublicKeySet from "./public-key-set";
export import PublicKeySet = PublicKeySet.PublicKeySet;
import * as QueryParameterTransformationPolicy from "./query-parameter-transformation-policy";
export import QueryParameterTransformationPolicy = QueryParameterTransformationPolicy.QueryParameterTransformationPolicy;
import * as QueryParameterValidationItem from "./query-parameter-validation-item";
export import QueryParameterValidationItem = QueryParameterValidationItem.QueryParameterValidationItem;
import * as QueryParameterValidationRequestPolicy from "./query-parameter-validation-request-policy";
export import QueryParameterValidationRequestPolicy = QueryParameterValidationRequestPolicy.QueryParameterValidationRequestPolicy;
import * as RateLimitingPolicy from "./rate-limiting-policy";
export import RateLimitingPolicy = RateLimitingPolicy.RateLimitingPolicy;
import * as RenameHeaderPolicy from "./rename-header-policy";
export import RenameHeaderPolicy = RenameHeaderPolicy.RenameHeaderPolicy;
import * as RenameHeaderPolicyItem from "./rename-header-policy-item";
export import RenameHeaderPolicyItem = RenameHeaderPolicyItem.RenameHeaderPolicyItem;
import * as RenameQueryParameterPolicy from "./rename-query-parameter-policy";
export import RenameQueryParameterPolicy = RenameQueryParameterPolicy.RenameQueryParameterPolicy;
import * as RenameQueryParameterPolicyItem from "./rename-query-parameter-policy-item";
export import RenameQueryParameterPolicyItem = RenameQueryParameterPolicyItem.RenameQueryParameterPolicyItem;
import * as RequestParameterValidation from "./request-parameter-validation";
export import RequestParameterValidation = RequestParameterValidation.RequestParameterValidation;
import * as ResponseCacheDetails from "./response-cache-details";
export import ResponseCacheDetails = ResponseCacheDetails.ResponseCacheDetails;
import * as ResponseCacheLookupPolicy from "./response-cache-lookup-policy";
export import ResponseCacheLookupPolicy = ResponseCacheLookupPolicy.ResponseCacheLookupPolicy;
import * as ResponseCacheRespServer from "./response-cache-resp-server";
export import ResponseCacheRespServer = ResponseCacheRespServer.ResponseCacheRespServer;
import * as ResponseCacheStorePolicy from "./response-cache-store-policy";
export import ResponseCacheStorePolicy = ResponseCacheStorePolicy.ResponseCacheStorePolicy;
import * as RouteAuthorizationPolicy from "./route-authorization-policy";
export import RouteAuthorizationPolicy = RouteAuthorizationPolicy.RouteAuthorizationPolicy;
import * as Sdk from "./sdk";
export import Sdk = Sdk.Sdk;
import * as SdkCollection from "./sdk-collection";
export import SdkCollection = SdkCollection.SdkCollection;
import * as SdkLanguageOptionalParameters from "./sdk-language-optional-parameters";
export import SdkLanguageOptionalParameters = SdkLanguageOptionalParameters.SdkLanguageOptionalParameters;
import * as SdkLanguageOptionalParametersAllowedValue from "./sdk-language-optional-parameters-allowed-value";
export import SdkLanguageOptionalParametersAllowedValue = SdkLanguageOptionalParametersAllowedValue.SdkLanguageOptionalParametersAllowedValue;
import * as SdkLanguageTypeCollection from "./sdk-language-type-collection";
export import SdkLanguageTypeCollection = SdkLanguageTypeCollection.SdkLanguageTypeCollection;
import * as SdkLanguageTypeSummary from "./sdk-language-type-summary";
export import SdkLanguageTypeSummary = SdkLanguageTypeSummary.SdkLanguageTypeSummary;
import * as SdkLanguageTypes from "./sdk-language-types";
export import SdkLanguageTypes = SdkLanguageTypes.SdkLanguageTypes;
import * as SdkSummary from "./sdk-summary";
export import SdkSummary = SdkSummary.SdkSummary;
import * as SetHeaderPolicy from "./set-header-policy";
export import SetHeaderPolicy = SetHeaderPolicy.SetHeaderPolicy;
import * as SetHeaderPolicyItem from "./set-header-policy-item";
export import SetHeaderPolicyItem = SetHeaderPolicyItem.SetHeaderPolicyItem;
import * as SetQueryParameterPolicy from "./set-query-parameter-policy";
export import SetQueryParameterPolicy = SetQueryParameterPolicy.SetQueryParameterPolicy;
import * as SetQueryParameterPolicyItem from "./set-query-parameter-policy-item";
export import SetQueryParameterPolicyItem = SetQueryParameterPolicyItem.SetQueryParameterPolicyItem;
import * as StaticPublicKey from "./static-public-key";
export import StaticPublicKey = StaticPublicKey.StaticPublicKey;
import * as UpdateApiDetails from "./update-api-details";
export import UpdateApiDetails = UpdateApiDetails.UpdateApiDetails;
import * as UpdateCertificateDetails from "./update-certificate-details";
export import UpdateCertificateDetails = UpdateCertificateDetails.UpdateCertificateDetails;
import * as UpdateDeploymentDetails from "./update-deployment-details";
export import UpdateDeploymentDetails = UpdateDeploymentDetails.UpdateDeploymentDetails;
import * as UpdateGatewayDetails from "./update-gateway-details";
export import UpdateGatewayDetails = UpdateGatewayDetails.UpdateGatewayDetails;
import * as UpdateSdkDetails from "./update-sdk-details";
export import UpdateSdkDetails = UpdateSdkDetails.UpdateSdkDetails;
import * as ValidationRequestPolicy from "./validation-request-policy";
export import ValidationRequestPolicy = ValidationRequestPolicy.ValidationRequestPolicy;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLog from "./work-request-log";
export import WorkRequestLog = WorkRequestLog.WorkRequestLog;
import * as WorkRequestLogCollection from "./work-request-log-collection";
export import WorkRequestLogCollection = WorkRequestLogCollection.WorkRequestLogCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as AnonymousRouteAuthorizationPolicy from "./anonymous-route-authorization-policy";
export import AnonymousRouteAuthorizationPolicy = AnonymousRouteAuthorizationPolicy.AnonymousRouteAuthorizationPolicy;
import * as AnyOfRouteAuthorizationPolicy from "./any-of-route-authorization-policy";
export import AnyOfRouteAuthorizationPolicy = AnyOfRouteAuthorizationPolicy.AnyOfRouteAuthorizationPolicy;
import * as AuthenticationOnlyRouteAuthorizationPolicy from "./authentication-only-route-authorization-policy";
export import AuthenticationOnlyRouteAuthorizationPolicy = AuthenticationOnlyRouteAuthorizationPolicy.AuthenticationOnlyRouteAuthorizationPolicy;
import * as CustomAuthenticationPolicy from "./custom-authentication-policy";
export import CustomAuthenticationPolicy = CustomAuthenticationPolicy.CustomAuthenticationPolicy;
import * as ExternalRespCache from "./external-resp-cache";
export import ExternalRespCache = ExternalRespCache.ExternalRespCache;
import * as FixedTTLResponseCacheStorePolicy from "./fixed-tt-lresponse-cache-store-policy";
export import FixedTTLResponseCacheStorePolicy = FixedTTLResponseCacheStorePolicy.FixedTTLResponseCacheStorePolicy;
import * as HTTPBackend from "./h-tt-pbackend";
export import HTTPBackend = HTTPBackend.HTTPBackend;
import * as JsonWebKey from "./json-web-key";
export import JsonWebKey = JsonWebKey.JsonWebKey;
import * as JwtAuthenticationPolicy from "./jwt-authentication-policy";
export import JwtAuthenticationPolicy = JwtAuthenticationPolicy.JwtAuthenticationPolicy;
import * as NoCache from "./no-cache";
export import NoCache = NoCache.NoCache;
import * as NoContentValidation from "./no-content-validation";
export import NoContentValidation = NoContentValidation.NoContentValidation;
import * as OracleFunctionBackend from "./oracle-function-backend";
export import OracleFunctionBackend = OracleFunctionBackend.OracleFunctionBackend;
import * as PemEncodedPublicKey from "./pem-encoded-public-key";
export import PemEncodedPublicKey = PemEncodedPublicKey.PemEncodedPublicKey;
import * as RemoteJsonWebKeySet from "./remote-json-web-key-set";
export import RemoteJsonWebKeySet = RemoteJsonWebKeySet.RemoteJsonWebKeySet;
import * as SimpleLookupPolicy from "./simple-lookup-policy";
export import SimpleLookupPolicy = SimpleLookupPolicy.SimpleLookupPolicy;
import * as StaticPublicKeySet from "./static-public-key-set";
export import StaticPublicKeySet = StaticPublicKeySet.StaticPublicKeySet;
import * as StockResponseBackend from "./stock-response-backend";
export import StockResponseBackend = StockResponseBackend.StockResponseBackend;
