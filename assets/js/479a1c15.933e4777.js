"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64739],{66995:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>f});var a=i(87462),s=(i(67294),i(3905)),o=i(26389),r=i(94891),n=i(74933),l=i(47507),c=i(24310),m=i(63303),p=(i(75035),i(85162));const d={id:"get-policy-violation-by-id",sidebar_label:"Returns a PolicyViolation resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getPolicyViolationById",tags:["PolicyViolations"],description:"The PolicyViolation resource with matching id is returned.",parameters:[{name:"policyViolationId",in:"path",schema:{type:"string"},description:"The id of the PolicyViolation.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"policyName,constraintName"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"policyName,constraintName"},description:"A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*"}],responses:{200:{description:"Returns a PolicyViolation resource based on the id.",content:{"application/json":{schema:{properties:{id:{description:"IdentityIQ id of the PolicyViolation.",type:"string",example:"c0b4568a4fe7458c434ee77d1fbt156b"},policyName:{description:"Name of the Policy this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},constraintName:{description:"Name of the Constraint this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},identity:{description:"The Identity (User) that caused the PolicyViolation.",type:"object",properties:{displayName:{description:"Display name of the Identity that caused the PolicyViolation.",type:"string",example:"Bob Smith"},value:{description:"The id of the Identity which caused the PolicyViolation.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Identity (User).",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},owner:{description:"The User that owns the Policy.",type:"object",properties:{displayName:{description:"Display name of the Policy owner.",type:"string",example:"Bob Smith"},value:{description:"The id of the Policy owner.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Policy owner.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},description:{description:"Description of the PolicyViolation.",type:"string",example:"Production and development systems should not be available to one person."},status:{description:"Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.",type:"string",example:"Open"},meta:{description:"Metadata of the resource.",properties:{created:{description:"Datetime this Resource was created.",type:"string",format:"date-time",example:"2022-02-11T01:34:04.074-05:00"},location:{description:"The location of the resource.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b"},lastModified:{description:"Datetime the resource was last modified.",type:"string",format:"date-time",example:"2022-02-11T01:08:45.866-05:00"},version:{description:"The version of the resource.",type:"string",example:'W/"1644561244074"'},resourceType:{description:"The SCIM resource type.",type:"string",example:"PolicyViolation"}}},schemas:{description:"The schemas involved in the SCIM resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:sailpoint:1.0:PolicyViolation"]}}}},"application/scim+json":{schema:{properties:{id:{description:"IdentityIQ id of the PolicyViolation.",type:"string",example:"c0b4568a4fe7458c434ee77d1fbt156b"},policyName:{description:"Name of the Policy this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},constraintName:{description:"Name of the Constraint this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},identity:{description:"The Identity (User) that caused the PolicyViolation.",type:"object",properties:{displayName:{description:"Display name of the Identity that caused the PolicyViolation.",type:"string",example:"Bob Smith"},value:{description:"The id of the Identity which caused the PolicyViolation.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Identity (User).",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},owner:{description:"The User that owns the Policy.",type:"object",properties:{displayName:{description:"Display name of the Policy owner.",type:"string",example:"Bob Smith"},value:{description:"The id of the Policy owner.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Policy owner.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},description:{description:"Description of the PolicyViolation.",type:"string",example:"Production and development systems should not be available to one person."},status:{description:"Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.",type:"string",example:"Open"},meta:{description:"Metadata of the resource.",properties:{created:{description:"Datetime this Resource was created.",type:"string",format:"date-time",example:"2022-02-11T01:34:04.074-05:00"},location:{description:"The location of the resource.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b"},lastModified:{description:"Datetime the resource was last modified.",type:"string",format:"date-time",example:"2022-02-11T01:08:45.866-05:00"},version:{description:"The version of the resource.",type:"string",example:'W/"1644561244074"'},resourceType:{description:"The SCIM resource type.",type:"string",example:"PolicyViolation"}}},schemas:{description:"The schemas involved in the SCIM resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:sailpoint:1.0:PolicyViolation"]}}}}}}},method:"get",path:"/PolicyViolations/{policyViolationId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a PolicyViolation resource based on id.",description:{content:"The PolicyViolation resource with matching id is returned.",type:"text/plain"},url:{path:["PolicyViolations",":policyViolationId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) The id of the PolicyViolation.",type:"text/plain"},type:"any",value:"",key:"policyViolationId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a PolicyViolation resource based on id.' (get-policy-violation-by-id)"},h=void 0,y={unversionedId:"api/get-policy-violation-by-id",id:"api/get-policy-violation-by-id",title:"get-policy-violation-by-id",description:"Returns a PolicyViolation resource based on id.",source:"@site/products/iiq/api/get-policy-violation-by-id.api.mdx",sourceDirName:"api",slug:"/api/get-policy-violation-by-id",permalink:"/iiq/api/get-policy-violation-by-id",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a PolicyViolation resource based on id.' (get-policy-violation-by-id)",tags:[],version:"current",frontMatter:{id:"get-policy-violation-by-id",sidebar_label:"Returns a PolicyViolation resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getPolicyViolationById",tags:["PolicyViolations"],description:"The PolicyViolation resource with matching id is returned.",parameters:[{name:"policyViolationId",in:"path",schema:{type:"string"},description:"The id of the PolicyViolation.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"policyName,constraintName"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"policyName,constraintName"},description:"A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*"}],responses:{200:{description:"Returns a PolicyViolation resource based on the id.",content:{"application/json":{schema:{properties:{id:{description:"IdentityIQ id of the PolicyViolation.",type:"string",example:"c0b4568a4fe7458c434ee77d1fbt156b"},policyName:{description:"Name of the Policy this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},constraintName:{description:"Name of the Constraint this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},identity:{description:"The Identity (User) that caused the PolicyViolation.",type:"object",properties:{displayName:{description:"Display name of the Identity that caused the PolicyViolation.",type:"string",example:"Bob Smith"},value:{description:"The id of the Identity which caused the PolicyViolation.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Identity (User).",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},owner:{description:"The User that owns the Policy.",type:"object",properties:{displayName:{description:"Display name of the Policy owner.",type:"string",example:"Bob Smith"},value:{description:"The id of the Policy owner.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Policy owner.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},description:{description:"Description of the PolicyViolation.",type:"string",example:"Production and development systems should not be available to one person."},status:{description:"Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.",type:"string",example:"Open"},meta:{description:"Metadata of the resource.",properties:{created:{description:"Datetime this Resource was created.",type:"string",format:"date-time",example:"2022-02-11T01:34:04.074-05:00"},location:{description:"The location of the resource.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b"},lastModified:{description:"Datetime the resource was last modified.",type:"string",format:"date-time",example:"2022-02-11T01:08:45.866-05:00"},version:{description:"The version of the resource.",type:"string",example:'W/"1644561244074"'},resourceType:{description:"The SCIM resource type.",type:"string",example:"PolicyViolation"}}},schemas:{description:"The schemas involved in the SCIM resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:sailpoint:1.0:PolicyViolation"]}}}},"application/scim+json":{schema:{properties:{id:{description:"IdentityIQ id of the PolicyViolation.",type:"string",example:"c0b4568a4fe7458c434ee77d1fbt156b"},policyName:{description:"Name of the Policy this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},constraintName:{description:"Name of the Constraint this PolicyViolation is associated with.",type:"string",example:"Entitlement Policy with Details"},identity:{description:"The Identity (User) that caused the PolicyViolation.",type:"object",properties:{displayName:{description:"Display name of the Identity that caused the PolicyViolation.",type:"string",example:"Bob Smith"},value:{description:"The id of the Identity which caused the PolicyViolation.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Identity (User).",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},owner:{description:"The User that owns the Policy.",type:"object",properties:{displayName:{description:"Display name of the Policy owner.",type:"string",example:"Bob Smith"},value:{description:"The id of the Policy owner.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},$ref:{description:"URI reference to the Policy owner.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"}}},description:{description:"Description of the PolicyViolation.",type:"string",example:"Production and development systems should not be available to one person."},status:{description:"Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.",type:"string",example:"Open"},meta:{description:"Metadata of the resource.",properties:{created:{description:"Datetime this Resource was created.",type:"string",format:"date-time",example:"2022-02-11T01:34:04.074-05:00"},location:{description:"The location of the resource.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0b4568a4fe7458c434ee77d1fbt156b"},lastModified:{description:"Datetime the resource was last modified.",type:"string",format:"date-time",example:"2022-02-11T01:08:45.866-05:00"},version:{description:"The version of the resource.",type:"string",example:'W/"1644561244074"'},resourceType:{description:"The SCIM resource type.",type:"string",example:"PolicyViolation"}}},schemas:{description:"The schemas involved in the SCIM resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:sailpoint:1.0:PolicyViolation"]}}}}}}},method:"get",path:"/PolicyViolations/{policyViolationId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a PolicyViolation resource based on id.",description:{content:"The PolicyViolation resource with matching id is returned.",type:"text/plain"},url:{path:["PolicyViolations",":policyViolationId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) The id of the PolicyViolation.",type:"text/plain"},type:"any",value:"",key:"policyViolationId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a PolicyViolation resource based on id.' (get-policy-violation-by-id)"},sidebar:"iiqOpenApiSidebar",previous:{title:"Returns all PolicyViolation resources.",permalink:"/iiq/api/get-policy-violations"},next:{title:"ResourceTypes",permalink:"/iiq/api/resource-types"}},u={},f=[{value:"Returns a PolicyViolation resource based on id.",id:"returns-a-policyviolation-resource-based-on-id",level:2}],g={toc:f};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"returns-a-policyviolation-resource-based-on-id"},"Returns a PolicyViolation resource based on id."),(0,s.kt)("p",null,"The PolicyViolation resource with matching id is returned."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"policyViolationId",in:"path",schema:{type:"string"},description:"The id of the PolicyViolation.",required:!0},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"attributes",schema:{type:"string",example:"policyName,constraintName"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"excludedAttributes",schema:{type:"string",example:"policyName,constraintName"},description:"A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Returns a PolicyViolation resource based on the id.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"IdentityIQ id of the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"policyName",required:!1,schemaDescription:"Name of the Policy this PolicyViolation is associated with.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"constraintName",required:!1,schemaDescription:"Name of the Constraint this PolicyViolation is associated with.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"identity"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The Identity (User) that caused the PolicyViolation.")),(0,s.kt)(c.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"Display name of the Identity that caused the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The id of the Identity which caused the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"$ref",required:!1,schemaDescription:"URI reference to the Identity (User).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"owner"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The User that owns the Policy.")),(0,s.kt)(c.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"Display name of the Policy owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The id of the Policy owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"$ref",required:!1,schemaDescription:"URI reference to the Policy owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:"Description of the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"meta"),(0,s.kt)("span",{style:{opacity:"0.6"}}," ")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Metadata of the resource.")),(0,s.kt)(c.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"Datetime this Resource was created.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"The location of the resource.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"lastModified",required:!1,schemaDescription:"Datetime the resource was last modified.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:"The version of the resource.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"resourceType",required:!1,schemaDescription:"The SCIM resource type.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"schemas",required:!1,schemaDescription:"The schemas involved in the SCIM resource.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "string",\n  "policyName": "string",\n  "constraintName": "string",\n  "identity": {\n    "displayName": "string",\n    "value": "string",\n    "$ref": "string"\n  },\n  "owner": {\n    "displayName": "string",\n    "value": "string",\n    "$ref": "string"\n  },\n  "description": "string",\n  "status": "string",\n  "meta": {\n    "created": "2022-10-11",\n    "location": "string",\n    "lastModified": "2022-10-11",\n    "version": "string",\n    "resourceType": "string"\n  },\n  "schemas": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))),(0,s.kt)(p.Z,{label:"application/scim+json",value:"application/scim+json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"IdentityIQ id of the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"policyName",required:!1,schemaDescription:"Name of the Policy this PolicyViolation is associated with.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"constraintName",required:!1,schemaDescription:"Name of the Constraint this PolicyViolation is associated with.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"identity"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The Identity (User) that caused the PolicyViolation.")),(0,s.kt)(c.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"Display name of the Identity that caused the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The id of the Identity which caused the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"$ref",required:!1,schemaDescription:"URI reference to the Identity (User).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"owner"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The User that owns the Policy.")),(0,s.kt)(c.Z,{collapsible:!1,name:"displayName",required:!1,schemaDescription:"Display name of the Policy owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The id of the Policy owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"$ref",required:!1,schemaDescription:"URI reference to the Policy owner.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:"Description of the PolicyViolation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Status of the PolicyViolation. This can be Open, Mitigated, Remediated, or Delegated.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"meta"),(0,s.kt)("span",{style:{opacity:"0.6"}}," ")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Metadata of the resource.")),(0,s.kt)(c.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"Datetime this Resource was created.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"The location of the resource.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"lastModified",required:!1,schemaDescription:"Datetime the resource was last modified.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:"The version of the resource.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"resourceType",required:!1,schemaDescription:"The SCIM resource type.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"schemas",required:!1,schemaDescription:"The schemas involved in the SCIM resource.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "string",\n  "policyName": "string",\n  "constraintName": "string",\n  "identity": {\n    "displayName": "string",\n    "value": "string",\n    "$ref": "string"\n  },\n  "owner": {\n    "displayName": "string",\n    "value": "string",\n    "$ref": "string"\n  },\n  "description": "string",\n  "status": "string",\n  "meta": {\n    "created": "2022-10-11",\n    "location": "string",\n    "lastModified": "2022-10-11",\n    "version": "string",\n    "resourceType": "string"\n  },\n  "schemas": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);