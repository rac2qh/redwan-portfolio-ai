"use client";

import React, { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Position,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import { Dialog } from "@headlessui/react";

const initialNodes: Node[] = [
  // Grandparents (Top Layer)
  { id: "gp1", data: { label: "Grandparent 1" }, position: { x: 0, y: 0 } },
  { id: "gp2", data: { label: "Grandparent 2" }, position: { x: 300, y: 0 } },

  { id: "gp3", data: { label: "Grandparent 3" }, position: { x: 800, y: 0 } },
  { id: "gp4", data: { label: "Grandparent 4" }, position: { x: 1100, y: 0 } },

  // Parents + Aunts + Uncles
  { id: "dad", data: { label: "Dad 1" }, position: { x: 150, y: 200 } },
  { id: "uncle1", data: { label: "Uncle 1" }, position: { x: -250, y: 200 } },
  { id: "uncle2", data: { label: "Uncle 2" }, position: { x: -150, y: 200 } },
  { id: "uncle3", data: { label: "Uncle 3" }, position: { x: -50, y: 200 } },
  { id: "uncle4", data: { label: "Uncle 4" }, position: { x: 50, y: 200 } },
  { id: "uncle5", data: { label: "Uncle 5" }, position: { x: 250, y: 200 } },
  { id: "uncle6", data: { label: "Uncle 6" }, position: { x: 350, y: 200 } },
  { id: "uncle7", data: { label: "Uncle 7" }, position: { x: 450, y: 200 } },

  { id: "mom", data: { label: "Mom 1" }, position: { x: 950, y: 200 } },
  { id: "aunt1", data: { label: "Aunt 1" }, position: { x: 700, y: 200 } },
  { id: "aunt2", data: { label: "Aunt 2" }, position: { x: 800, y: 200 } },
  { id: "aunt3", data: { label: "Aunt 3" }, position: { x: 1000, y: 200 } },
  { id: "aunt4", data: { label: "Aunt 4" }, position: { x: 1100, y: 200 } },
  { id: "aunt5", data: { label: "Aunt 5" }, position: { x: 1200, y: 200 } },

  // You + Siblings
  { id: "you", data: { label: "You" }, position: { x: 150, y: 400 } },
  { id: "bro1", data: { label: "Brother 1" }, position: { x: 100, y: 400 } },
  { id: "bro2", data: { label: "Brother 2" }, position: { x: 200, y: 400 } },

  // Example cousins (will finish tree in next update)
  { id: "cousin1", data: { label: "Cousin 1" }, position: { x: -300, y: 400 } },
  { id: "cousin2", data: { label: "Cousin 2" }, position: { x: -350, y: 400 } },

  { id: "cousin3", data: { label: "Cousin 3" }, position: { x: 700, y: 400 } },
  { id: "cousin4", data: { label: "Cousin 4" }, position: { x: 750, y: 400 } },
];

const initialEdges: Edge[] = [
  // Connect Grandparents to Parents
  { id: "e1", source: "gp1", target: "dad" },
  { id: "e2", source: "gp1", target: "uncle1" },
  { id: "e3", source: "gp1", target: "uncle2" },
  { id: "e4", source: "gp1", target: "uncle3" },
  { id: "e5", source: "gp1", target: "uncle4" },
  { id: "e6", source: "gp1", target: "uncle5" },
  { id: "e7", source: "gp1", target: "uncle6" },
  { id: "e8", source: "gp1", target: "uncle7" },

  { id: "e9", source: "gp3", target: "mom" },
  { id: "e10", source: "gp3", target: "aunt1" },
  { id: "e11", source: "gp3", target: "aunt2" },
  { id: "e12", source: "gp3", target: "aunt3" },
  { id: "e13", source: "gp3", target: "aunt4" },
  { id: "e14", source: "gp3", target: "aunt5" },

  // Connect Parents to You + Siblings
  { id: "e15", source: "dad", target: "you" },
  { id: "e16", source: "dad", target: "bro1" },
  { id: "e17", source: "dad", target: "bro2" },

  // Example cousin connections
  { id: "e18", source: "uncle1", target: "cousin1" },
  { id: "e19", source: "uncle1", target: "cousin2" },
  { id: "e20", source: "aunt1", target: "cousin3" },
  { id: "e21", source: "aunt1", target: "cousin4" },
];

export default function AncestryTreePage() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, __, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onNodeClick = useCallback((_ : unknown, node: Node) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-blue-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background variant="dots" gap={20} size={1} />
      </ReactFlow>

      <Dialog open={!!selectedNode} onClose={() => setSelectedNode(null)}>
        <Dialog.Panel className="absolute top-20 left-1/2 -translate-x-1/2 bg-white text-black rounded-xl p-6 shadow-xl w-[400px]">
          <Dialog.Title className="text-xl font-semibold mb-2">
            {selectedNode?.data.label}
          </Dialog.Title>
          <p><strong>Full Name:</strong> ...</p>
          <p><strong>Birthdate:</strong> Jan 1, 1970</p>
          <p><strong>Current Age:</strong> ...</p>
          <p><strong>Field of Work:</strong> Unknown</p>
          <p><strong>Studied:</strong> Unknown</p>
          <p><strong>Institution:</strong> Unknown</p>
          <p><strong>Current Residence:</strong> ...</p>
          <p><strong>Deceased:</strong> No</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setSelectedNode(null)}
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
