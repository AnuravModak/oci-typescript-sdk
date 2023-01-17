/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AccessLoggingConfiguration from "./access-logging-configuration";
export import AccessLoggingConfiguration = AccessLoggingConfiguration.AccessLoggingConfiguration;
import * as AccessPolicy from "./access-policy";
export import AccessPolicy = AccessPolicy.AccessPolicy;
import * as AccessPolicyCollection from "./access-policy-collection";
export import AccessPolicyCollection = AccessPolicyCollection.AccessPolicyCollection;
import * as AccessPolicyRule from "./access-policy-rule";
export import AccessPolicyRule = AccessPolicyRule.AccessPolicyRule;
import * as AccessPolicyRuleDetails from "./access-policy-rule-details";
export import AccessPolicyRuleDetails = AccessPolicyRuleDetails.AccessPolicyRuleDetails;
import * as AccessPolicySummary from "./access-policy-summary";
export import AccessPolicySummary = AccessPolicySummary.AccessPolicySummary;
import * as AccessPolicyTarget from "./access-policy-target";
export import AccessPolicyTarget = AccessPolicyTarget.AccessPolicyTarget;
import * as AccessPolicyTargetDetails from "./access-policy-target-details";
export import AccessPolicyTargetDetails = AccessPolicyTargetDetails.AccessPolicyTargetDetails;
import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as CaBundle from "./ca-bundle";
export import CaBundle = CaBundle.CaBundle;
import * as CertificateAuthority from "./certificate-authority";
export import CertificateAuthority = CertificateAuthority.CertificateAuthority;
import * as ChangeAccessPolicyCompartmentDetails from "./change-access-policy-compartment-details";
export import ChangeAccessPolicyCompartmentDetails = ChangeAccessPolicyCompartmentDetails.ChangeAccessPolicyCompartmentDetails;
import * as ChangeIngressGatewayCompartmentDetails from "./change-ingress-gateway-compartment-details";
export import ChangeIngressGatewayCompartmentDetails = ChangeIngressGatewayCompartmentDetails.ChangeIngressGatewayCompartmentDetails;
import * as ChangeIngressGatewayRouteTableCompartmentDetails from "./change-ingress-gateway-route-table-compartment-details";
export import ChangeIngressGatewayRouteTableCompartmentDetails = ChangeIngressGatewayRouteTableCompartmentDetails.ChangeIngressGatewayRouteTableCompartmentDetails;
import * as ChangeMeshCompartmentDetails from "./change-mesh-compartment-details";
export import ChangeMeshCompartmentDetails = ChangeMeshCompartmentDetails.ChangeMeshCompartmentDetails;
import * as ChangeVirtualDeploymentCompartmentDetails from "./change-virtual-deployment-compartment-details";
export import ChangeVirtualDeploymentCompartmentDetails = ChangeVirtualDeploymentCompartmentDetails.ChangeVirtualDeploymentCompartmentDetails;
import * as ChangeVirtualServiceCompartmentDetails from "./change-virtual-service-compartment-details";
export import ChangeVirtualServiceCompartmentDetails = ChangeVirtualServiceCompartmentDetails.ChangeVirtualServiceCompartmentDetails;
import * as ChangeVirtualServiceRouteTableCompartmentDetails from "./change-virtual-service-route-table-compartment-details";
export import ChangeVirtualServiceRouteTableCompartmentDetails = ChangeVirtualServiceRouteTableCompartmentDetails.ChangeVirtualServiceRouteTableCompartmentDetails;
import * as CreateAccessPolicyDetails from "./create-access-policy-details";
export import CreateAccessPolicyDetails = CreateAccessPolicyDetails.CreateAccessPolicyDetails;
import * as CreateIngressGatewayDetails from "./create-ingress-gateway-details";
export import CreateIngressGatewayDetails = CreateIngressGatewayDetails.CreateIngressGatewayDetails;
import * as CreateIngressGatewayRouteTableDetails from "./create-ingress-gateway-route-table-details";
export import CreateIngressGatewayRouteTableDetails = CreateIngressGatewayRouteTableDetails.CreateIngressGatewayRouteTableDetails;
import * as CreateMeshDetails from "./create-mesh-details";
export import CreateMeshDetails = CreateMeshDetails.CreateMeshDetails;
import * as CreateVirtualDeploymentDetails from "./create-virtual-deployment-details";
export import CreateVirtualDeploymentDetails = CreateVirtualDeploymentDetails.CreateVirtualDeploymentDetails;
import * as CreateVirtualServiceDetails from "./create-virtual-service-details";
export import CreateVirtualServiceDetails = CreateVirtualServiceDetails.CreateVirtualServiceDetails;
import * as CreateVirtualServiceRouteTableDetails from "./create-virtual-service-route-table-details";
export import CreateVirtualServiceRouteTableDetails = CreateVirtualServiceRouteTableDetails.CreateVirtualServiceRouteTableDetails;
import * as DefaultVirtualServiceRoutingPolicy from "./default-virtual-service-routing-policy";
export import DefaultVirtualServiceRoutingPolicy = DefaultVirtualServiceRoutingPolicy.DefaultVirtualServiceRoutingPolicy;
import * as IngressGateway from "./ingress-gateway";
export import IngressGateway = IngressGateway.IngressGateway;
import * as IngressGatewayCollection from "./ingress-gateway-collection";
export import IngressGatewayCollection = IngressGatewayCollection.IngressGatewayCollection;
import * as IngressGatewayHost from "./ingress-gateway-host";
export import IngressGatewayHost = IngressGatewayHost.IngressGatewayHost;
import * as IngressGatewayHostRef from "./ingress-gateway-host-ref";
export import IngressGatewayHostRef = IngressGatewayHostRef.IngressGatewayHostRef;
import * as IngressGatewayListener from "./ingress-gateway-listener";
export import IngressGatewayListener = IngressGatewayListener.IngressGatewayListener;
import * as IngressGatewayMutualTransportLayerSecurity from "./ingress-gateway-mutual-transport-layer-security";
export import IngressGatewayMutualTransportLayerSecurity = IngressGatewayMutualTransportLayerSecurity.IngressGatewayMutualTransportLayerSecurity;
import * as IngressGatewayMutualTransportLayerSecurityDetails from "./ingress-gateway-mutual-transport-layer-security-details";
export import IngressGatewayMutualTransportLayerSecurityDetails = IngressGatewayMutualTransportLayerSecurityDetails.IngressGatewayMutualTransportLayerSecurityDetails;
import * as IngressGatewayRouteTable from "./ingress-gateway-route-table";
export import IngressGatewayRouteTable = IngressGatewayRouteTable.IngressGatewayRouteTable;
import * as IngressGatewayRouteTableCollection from "./ingress-gateway-route-table-collection";
export import IngressGatewayRouteTableCollection = IngressGatewayRouteTableCollection.IngressGatewayRouteTableCollection;
import * as IngressGatewayRouteTableSummary from "./ingress-gateway-route-table-summary";
export import IngressGatewayRouteTableSummary = IngressGatewayRouteTableSummary.IngressGatewayRouteTableSummary;
import * as IngressGatewaySummary from "./ingress-gateway-summary";
export import IngressGatewaySummary = IngressGatewaySummary.IngressGatewaySummary;
import * as IngressGatewayTrafficRouteRule from "./ingress-gateway-traffic-route-rule";
export import IngressGatewayTrafficRouteRule = IngressGatewayTrafficRouteRule.IngressGatewayTrafficRouteRule;
import * as IngressGatewayTrafficRouteRuleDetails from "./ingress-gateway-traffic-route-rule-details";
export import IngressGatewayTrafficRouteRuleDetails = IngressGatewayTrafficRouteRuleDetails.IngressGatewayTrafficRouteRuleDetails;
import * as IngressListenerClientValidationConfig from "./ingress-listener-client-validation-config";
export import IngressListenerClientValidationConfig = IngressListenerClientValidationConfig.IngressListenerClientValidationConfig;
import * as IngressListenerTlsConfig from "./ingress-listener-tls-config";
export import IngressListenerTlsConfig = IngressListenerTlsConfig.IngressListenerTlsConfig;
import * as Mesh from "./mesh";
export import Mesh = Mesh.Mesh;
import * as MeshCollection from "./mesh-collection";
export import MeshCollection = MeshCollection.MeshCollection;
import * as MeshMutualTransportLayerSecurity from "./mesh-mutual-transport-layer-security";
export import MeshMutualTransportLayerSecurity = MeshMutualTransportLayerSecurity.MeshMutualTransportLayerSecurity;
import * as MeshSummary from "./mesh-summary";
export import MeshSummary = MeshSummary.MeshSummary;
import * as MutualTransportLayerSecurity from "./mutual-transport-layer-security";
export import MutualTransportLayerSecurity = MutualTransportLayerSecurity.MutualTransportLayerSecurity;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as ProxyDetails from "./proxy-details";
export import ProxyDetails = ProxyDetails.ProxyDetails;
import * as ServiceDiscoveryConfiguration from "./service-discovery-configuration";
export import ServiceDiscoveryConfiguration = ServiceDiscoveryConfiguration.ServiceDiscoveryConfiguration;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as TlsCertificate from "./tls-certificate";
export import TlsCertificate = TlsCertificate.TlsCertificate;
import * as TrafficRuleTarget from "./traffic-rule-target";
export import TrafficRuleTarget = TrafficRuleTarget.TrafficRuleTarget;
import * as TrafficRuleTargetDetails from "./traffic-rule-target-details";
export import TrafficRuleTargetDetails = TrafficRuleTargetDetails.TrafficRuleTargetDetails;
import * as UpdateAccessPolicyDetails from "./update-access-policy-details";
export import UpdateAccessPolicyDetails = UpdateAccessPolicyDetails.UpdateAccessPolicyDetails;
import * as UpdateIngressGatewayDetails from "./update-ingress-gateway-details";
export import UpdateIngressGatewayDetails = UpdateIngressGatewayDetails.UpdateIngressGatewayDetails;
import * as UpdateIngressGatewayRouteTableDetails from "./update-ingress-gateway-route-table-details";
export import UpdateIngressGatewayRouteTableDetails = UpdateIngressGatewayRouteTableDetails.UpdateIngressGatewayRouteTableDetails;
import * as UpdateMeshDetails from "./update-mesh-details";
export import UpdateMeshDetails = UpdateMeshDetails.UpdateMeshDetails;
import * as UpdateVirtualDeploymentDetails from "./update-virtual-deployment-details";
export import UpdateVirtualDeploymentDetails = UpdateVirtualDeploymentDetails.UpdateVirtualDeploymentDetails;
import * as UpdateVirtualServiceDetails from "./update-virtual-service-details";
export import UpdateVirtualServiceDetails = UpdateVirtualServiceDetails.UpdateVirtualServiceDetails;
import * as UpdateVirtualServiceRouteTableDetails from "./update-virtual-service-route-table-details";
export import UpdateVirtualServiceRouteTableDetails = UpdateVirtualServiceRouteTableDetails.UpdateVirtualServiceRouteTableDetails;
import * as VirtualDeployment from "./virtual-deployment";
export import VirtualDeployment = VirtualDeployment.VirtualDeployment;
import * as VirtualDeploymentCollection from "./virtual-deployment-collection";
export import VirtualDeploymentCollection = VirtualDeploymentCollection.VirtualDeploymentCollection;
import * as VirtualDeploymentListener from "./virtual-deployment-listener";
export import VirtualDeploymentListener = VirtualDeploymentListener.VirtualDeploymentListener;
import * as VirtualDeploymentSummary from "./virtual-deployment-summary";
export import VirtualDeploymentSummary = VirtualDeploymentSummary.VirtualDeploymentSummary;
import * as VirtualService from "./virtual-service";
export import VirtualService = VirtualService.VirtualService;
import * as VirtualServiceCollection from "./virtual-service-collection";
export import VirtualServiceCollection = VirtualServiceCollection.VirtualServiceCollection;
import * as VirtualServiceMutualTransportLayerSecurityDetails from "./virtual-service-mutual-transport-layer-security-details";
export import VirtualServiceMutualTransportLayerSecurityDetails = VirtualServiceMutualTransportLayerSecurityDetails.VirtualServiceMutualTransportLayerSecurityDetails;
import * as VirtualServiceRouteTable from "./virtual-service-route-table";
export import VirtualServiceRouteTable = VirtualServiceRouteTable.VirtualServiceRouteTable;
import * as VirtualServiceRouteTableCollection from "./virtual-service-route-table-collection";
export import VirtualServiceRouteTableCollection = VirtualServiceRouteTableCollection.VirtualServiceRouteTableCollection;
import * as VirtualServiceRouteTableSummary from "./virtual-service-route-table-summary";
export import VirtualServiceRouteTableSummary = VirtualServiceRouteTableSummary.VirtualServiceRouteTableSummary;
import * as VirtualServiceSummary from "./virtual-service-summary";
export import VirtualServiceSummary = VirtualServiceSummary.VirtualServiceSummary;
import * as VirtualServiceTrafficRouteRule from "./virtual-service-traffic-route-rule";
export import VirtualServiceTrafficRouteRule = VirtualServiceTrafficRouteRule.VirtualServiceTrafficRouteRule;
import * as VirtualServiceTrafficRouteRuleDetails from "./virtual-service-traffic-route-rule-details";
export import VirtualServiceTrafficRouteRuleDetails = VirtualServiceTrafficRouteRuleDetails.VirtualServiceTrafficRouteRuleDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as AllVirtualServicesAccessPolicyTarget from "./all-virtual-services-access-policy-target";
export import AllVirtualServicesAccessPolicyTarget = AllVirtualServicesAccessPolicyTarget.AllVirtualServicesAccessPolicyTarget;
import * as AllVirtualServicesAccessPolicyTargetDetails from "./all-virtual-services-access-policy-target-details";
export import AllVirtualServicesAccessPolicyTargetDetails = AllVirtualServicesAccessPolicyTargetDetails.AllVirtualServicesAccessPolicyTargetDetails;
import * as DisabledServiceDiscoveryConfiguration from "./disabled-service-discovery-configuration";
export import DisabledServiceDiscoveryConfiguration = DisabledServiceDiscoveryConfiguration.DisabledServiceDiscoveryConfiguration;
import * as DnsServiceDiscoveryConfiguration from "./dns-service-discovery-configuration";
export import DnsServiceDiscoveryConfiguration = DnsServiceDiscoveryConfiguration.DnsServiceDiscoveryConfiguration;
import * as ExternalServiceAccessPolicyTarget from "./external-service-access-policy-target";
export import ExternalServiceAccessPolicyTarget = ExternalServiceAccessPolicyTarget.ExternalServiceAccessPolicyTarget;
import * as ExternalServiceAccessPolicyTargetDetails from "./external-service-access-policy-target-details";
export import ExternalServiceAccessPolicyTargetDetails = ExternalServiceAccessPolicyTargetDetails.ExternalServiceAccessPolicyTargetDetails;
import * as HttpIngressGatewayTrafficRouteRule from "./http-ingress-gateway-traffic-route-rule";
export import HttpIngressGatewayTrafficRouteRule = HttpIngressGatewayTrafficRouteRule.HttpIngressGatewayTrafficRouteRule;
import * as HttpIngressGatewayTrafficRouteRuleDetails from "./http-ingress-gateway-traffic-route-rule-details";
export import HttpIngressGatewayTrafficRouteRuleDetails = HttpIngressGatewayTrafficRouteRuleDetails.HttpIngressGatewayTrafficRouteRuleDetails;
import * as HttpVirtualServiceTrafficRouteRule from "./http-virtual-service-traffic-route-rule";
export import HttpVirtualServiceTrafficRouteRule = HttpVirtualServiceTrafficRouteRule.HttpVirtualServiceTrafficRouteRule;
import * as HttpVirtualServiceTrafficRouteRuleDetails from "./http-virtual-service-traffic-route-rule-details";
export import HttpVirtualServiceTrafficRouteRuleDetails = HttpVirtualServiceTrafficRouteRuleDetails.HttpVirtualServiceTrafficRouteRuleDetails;
import * as IngressGatewayAccessPolicyTarget from "./ingress-gateway-access-policy-target";
export import IngressGatewayAccessPolicyTarget = IngressGatewayAccessPolicyTarget.IngressGatewayAccessPolicyTarget;
import * as IngressGatewayAccessPolicyTargetDetails from "./ingress-gateway-access-policy-target-details";
export import IngressGatewayAccessPolicyTargetDetails = IngressGatewayAccessPolicyTargetDetails.IngressGatewayAccessPolicyTargetDetails;
import * as LocalFileCaBundle from "./local-file-ca-bundle";
export import LocalFileCaBundle = LocalFileCaBundle.LocalFileCaBundle;
import * as LocalFileTlsCertificate from "./local-file-tls-certificate";
export import LocalFileTlsCertificate = LocalFileTlsCertificate.LocalFileTlsCertificate;
import * as OciCaBundle from "./oci-ca-bundle";
export import OciCaBundle = OciCaBundle.OciCaBundle;
import * as OciTlsCertificate from "./oci-tls-certificate";
export import OciTlsCertificate = OciTlsCertificate.OciTlsCertificate;
import * as TcpIngressGatewayTrafficRouteRule from "./tcp-ingress-gateway-traffic-route-rule";
export import TcpIngressGatewayTrafficRouteRule = TcpIngressGatewayTrafficRouteRule.TcpIngressGatewayTrafficRouteRule;
import * as TcpIngressGatewayTrafficRouteRuleDetails from "./tcp-ingress-gateway-traffic-route-rule-details";
export import TcpIngressGatewayTrafficRouteRuleDetails = TcpIngressGatewayTrafficRouteRuleDetails.TcpIngressGatewayTrafficRouteRuleDetails;
import * as TcpVirtualServiceTrafficRouteRule from "./tcp-virtual-service-traffic-route-rule";
export import TcpVirtualServiceTrafficRouteRule = TcpVirtualServiceTrafficRouteRule.TcpVirtualServiceTrafficRouteRule;
import * as TcpVirtualServiceTrafficRouteRuleDetails from "./tcp-virtual-service-traffic-route-rule-details";
export import TcpVirtualServiceTrafficRouteRuleDetails = TcpVirtualServiceTrafficRouteRuleDetails.TcpVirtualServiceTrafficRouteRuleDetails;
import * as TlsPassthroughIngressGatewayTrafficRouteRule from "./tls-passthrough-ingress-gateway-traffic-route-rule";
export import TlsPassthroughIngressGatewayTrafficRouteRule = TlsPassthroughIngressGatewayTrafficRouteRule.TlsPassthroughIngressGatewayTrafficRouteRule;
import * as TlsPassthroughIngressGatewayTrafficRouteRuleDetails from "./tls-passthrough-ingress-gateway-traffic-route-rule-details";
export import TlsPassthroughIngressGatewayTrafficRouteRuleDetails = TlsPassthroughIngressGatewayTrafficRouteRuleDetails.TlsPassthroughIngressGatewayTrafficRouteRuleDetails;
import * as TlsPassthroughVirtualServiceTrafficRouteRule from "./tls-passthrough-virtual-service-traffic-route-rule";
export import TlsPassthroughVirtualServiceTrafficRouteRule = TlsPassthroughVirtualServiceTrafficRouteRule.TlsPassthroughVirtualServiceTrafficRouteRule;
import * as TlsPassthroughVirtualServiceTrafficRouteRuleDetails from "./tls-passthrough-virtual-service-traffic-route-rule-details";
export import TlsPassthroughVirtualServiceTrafficRouteRuleDetails = TlsPassthroughVirtualServiceTrafficRouteRuleDetails.TlsPassthroughVirtualServiceTrafficRouteRuleDetails;
import * as VirtualDeploymentTrafficRuleTarget from "./virtual-deployment-traffic-rule-target";
export import VirtualDeploymentTrafficRuleTarget = VirtualDeploymentTrafficRuleTarget.VirtualDeploymentTrafficRuleTarget;
import * as VirtualDeploymentTrafficRuleTargetDetails from "./virtual-deployment-traffic-rule-target-details";
export import VirtualDeploymentTrafficRuleTargetDetails = VirtualDeploymentTrafficRuleTargetDetails.VirtualDeploymentTrafficRuleTargetDetails;
import * as VirtualServiceAccessPolicyTarget from "./virtual-service-access-policy-target";
export import VirtualServiceAccessPolicyTarget = VirtualServiceAccessPolicyTarget.VirtualServiceAccessPolicyTarget;
import * as VirtualServiceAccessPolicyTargetDetails from "./virtual-service-access-policy-target-details";
export import VirtualServiceAccessPolicyTargetDetails = VirtualServiceAccessPolicyTargetDetails.VirtualServiceAccessPolicyTargetDetails;
import * as VirtualServiceTrafficRuleTarget from "./virtual-service-traffic-rule-target";
export import VirtualServiceTrafficRuleTarget = VirtualServiceTrafficRuleTarget.VirtualServiceTrafficRuleTarget;
import * as VirtualServiceTrafficRuleTargetDetails from "./virtual-service-traffic-rule-target-details";
export import VirtualServiceTrafficRuleTargetDetails = VirtualServiceTrafficRuleTargetDetails.VirtualServiceTrafficRuleTargetDetails;
