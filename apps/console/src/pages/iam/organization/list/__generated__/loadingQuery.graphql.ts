/**
 * @generated SignedSource<<8e055dc70cd8f045d9756ff6b2ee94fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type loadingQuery$variables = Record<PropertyKey, never>;
export type loadingQuery$data = {
  readonly viewer: {
    readonly memberships: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly organization: {
            readonly id: string;
            readonly name: string;
          };
        };
      }>;
    };
  } | null | undefined;
};
export type loadingQuery = {
  response: loadingQuery$data;
  variables: loadingQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 1000
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "ASC",
        "field": "FULL_NAME"
      }
    }
  ],
  "concreteType": "MembershipConnection",
  "kind": "LinkedField",
  "name": "memberships",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MembershipEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Membership",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Organization",
              "kind": "LinkedField",
              "name": "organization",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "memberships(first:1000,orderBy:{\"direction\":\"ASC\",\"field\":\"FULL_NAME\"})"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "loadingQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Identity",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "loadingQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Identity",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f774a2182442ebd0949d99fbff1d54fc",
    "id": null,
    "metadata": {},
    "name": "loadingQuery",
    "operationKind": "query",
    "text": "query loadingQuery {\n  viewer {\n    memberships(first: 1000, orderBy: {direction: ASC, field: FULL_NAME}) {\n      edges {\n        node {\n          id\n          organization {\n            id\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "72c3f05c43d8eed12fa6d2a3e3c7f32c";

export default node;
