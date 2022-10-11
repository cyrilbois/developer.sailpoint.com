"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[7811],{8045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={id:"conditional",title:"Conditional",pagination_label:"Conditional",sidebar_label:"Conditional",sidebar_class_name:"conditional",keywords:["transforms","operations","conditional"],description:"Output different values depending on simple conditional logic.",slug:"/docs/transforms/operations/conditional",tags:["Transforms","Transform Operations"]},r=void 0,s={unversionedId:"docs/identity-now/transforms/operations/conditional",id:"docs/identity-now/transforms/operations/conditional",title:"Conditional",description:"Output different values depending on simple conditional logic.",source:"@site/products/idn/docs/identity-now/transforms/operations/conditional.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/conditional",permalink:"/idn/docs/transforms/operations/conditional",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/conditional.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"Jordan Violet",lastUpdatedAt:1665504194,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{id:"conditional",title:"Conditional",pagination_label:"Conditional",sidebar_label:"Conditional",sidebar_class_name:"conditional",keywords:["transforms","operations","conditional"],description:"Output different values depending on simple conditional logic.",slug:"/docs/transforms/operations/conditional",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Concatenation",permalink:"/idn/docs/transforms/operations/concatenation"},next:{title:"Date Compare",permalink:"/idn/docs/transforms/operations/date-compare"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,'Use the conditional transform to output different values depending on simple\nconditional logic. This is a convenient transform - the same capability can be\nimplemented with a "static" transform, but this transform has greater simplicity\nand null-safe error checking.'),(0,a.kt)("admonition",{title:"Other Considerations",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The two operands within the transform cannot be null; if they are, an\nIllegalArgumentException is thrown."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"expression"),' attribute must be "eq," or the transform will throw an\nIllegalArgumentException.'),(0,a.kt)("li",{parentName:"ul"},'All attribute string values are case-sensitive, so differently cased strings\n(e.g., "engineering" and "Engineering") will not return as matched.'))),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes, the conditional transform\nrequires an ",(0,a.kt)("inlineCode",{parentName:"p"},"expression"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"positiveCondition"),", and a ",(0,a.kt)("inlineCode",{parentName:"p"},"negativeCondition"),". If\nthe expression evaluates to false, the transform returns the negative condition;\notherwise it returns the positive condition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "expression": "foo eq foo",\n    "positiveCondition": "true",\n    "negativeCondition": "false"\n  },\n  "type": "conditional",\n  "name": "Conditional Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"conditional"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"expression")," - This comparison statement follows the structure of\n",(0,a.kt)("inlineCode",{parentName:"li"},"ValueA eq ValueB")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"ValueA")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ValueB")," are static strings or outputs\nof other transforms; the ",(0,a.kt)("inlineCode",{parentName:"li"},"eq")," operator is the only valid comparison."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"positiveCondition")," - This is the output of the transform if the\nexpression evaluates to true."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"negativeCondition")," - This is the output of the transform if the\nexpression evaluates to false."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This transform takes the user's HR-defined department attribute and compares it\nto the value of \"Science\". If this is the user's department, the transform\nreturns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Otherwise, it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "expression": "$department eq Science",\n    "positiveCondition": "true",\n    "negativeCondition": "false",\n    "department": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "department"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "conditional",\n  "name": "Test Conditional Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,"This transform extends the previous one by returning the output of another\nSeaspray transform depending on the result of the expression. You can assign\nSeaspray transforms' outputs to variables and then reference them within the\n",(0,a.kt)("inlineCode",{parentName:"p"},"positiveCondition")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"negativeCondition")," attributes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "expression": "$department eq Science",\n    "positiveCondition": "$scienceBuilding",\n    "negativeCondition": "$adminBuilding",\n    "department": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "department"\n      },\n      "type": "accountAttribute"\n    },\n    "scienceBuilding": {\n      "attributes": {\n        "value": "Building S"\n      },\n      "type": "static"\n    },\n    "adminBuilding": {\n      "attributes": {\n        "value": "Building A"\n      },\n      "type": "static"\n    }\n  },\n  "type": "conditional",\n  "name": "Test Conditional Transform"\n}\n')))}u.isMDXComponent=!0}}]);