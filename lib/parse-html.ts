import React from "react";
import { parse } from "himalaya";
import htmlAttributeToReact from "html-attribute-to-react";

import { Code, CustomLink, RoundedImage } from "components/HTMLComponents";

function buildComponentTree(nodes) {
	return nodes.map((node, i) => {
		switch (node.type) {
			case "text":
				// Node is just a string, so return it as is
				return node.content;

			case "element":
				// Recursively get nodes for element's children
				const children = buildComponentTree(node.children);

				// Convert element's attributes to React props
				const attrs = node.attributes.reduce(
					(acc, attr) => ({
						...acc,
						[htmlAttributeToReact(attr.key)]: attr.value,
					}),
					{}
				);

				if (node.tagName === "a") {
					return React.createElement(CustomLink, { ...attrs }, children);
				}

				if (node.tagName === "img") {
					return React.createElement(RoundedImage, { ...attrs });
				}

				if (node.tagName === "pre") {
					return React.createElement(Code, { ...attrs }, children);
				}

				// Create React element
				return React.createElement(
					node.tagName,
					{ ...attrs, key: `${node.type}-${i}` },
					children.length ? children : null
				);

			default:
				// Return null for any non-text/element nodes
				return null;
		}
	});
}

export default function convertToComponents(html) {
	return buildComponentTree(parse(html));
}
