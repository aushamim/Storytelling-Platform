import { useParams } from "react-router-dom";
import { useActivitiesStore } from "../../../hooks/store";
import { useEffect, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import CustomFlowNode from "../../../Components/CustomFlowNode/CustomFlowNode";

const ActivityDetails = () => {
  const { email, id } = useParams();
  const story = useActivitiesStore(
    (state) =>
      state.activities.find((x) => x.email === email && x.story.id == id)?.story
  );

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const storyData = story?.story;

    const tempNodes = [];
    const tempEdges = [];
    let posX = 0;
    let posY = 0;

    Object.keys(storyData).forEach((partId) => {
      const part = storyData[partId];

      tempNodes.push({
        id: partId,
        type: "custom",
        data: {
          label: part.data,
          selected: part.selected ? true : false,
          time: part.time ? part.time : "",
        },
        position: { x: posX, y: posY },
        style: {
          borderRadius: "0.375rem",
          width: "50%",
        },
      });
      posY += 200;

      if (part.next !== "") {
        tempEdges.push({
          id: `${partId}-${part.next}`,
          source: partId,
          target: part.next !== "end" ? part.next : "",
          animated: true,
          style: { stroke: part.selected ? "#3b82f6" : "" },
        });
      }

      if (part.choices.length > 0) {
        let i = 0;
        while (i < part.choices.length) {
          tempNodes.push({
            id: `${partId}-choice${i}`,
            type: "custom",
            data: {
              label: part.choices[i].title,
              selected: part.choices[i].selected ? true : false,
              time: part.choices[i].time ? part.choices[i].time : "",
            },
            position: { x: 0 + i * 400, y: posY },
            style: {
              borderRadius: "0.375rem",
              width: "22%",
            },
          });

          tempEdges.push({
            id: `${partId}-${partId}-choice${i}`,
            source: partId,
            target:
              part.choices[i].next !== "end" ? `${partId}-choice${i}` : "",
            animated: true,
            style: { stroke: part.choices[i].selected ? "#3b82f6" : "" },
          });

          tempEdges.push({
            id: `${partId}-choice${i}-${partId}`,
            source: `${partId}-choice${i}`,
            target: part.choices[i].next !== "end" ? part.choices[i].next : "",
            animated: true,
            style: { stroke: part.choices[i].selected ? "#3b82f6" : "" },
          });

          i++;
        }
        posY += 200;
      }
    });

    setNodes(tempNodes);
    setEdges(tempEdges);
  }, []);

  return (
    <div>
      <h1 className="mt-5 text-3xl">{story?.title}</h1>

      <div style={{ height: "85vh", width: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={{ custom: CustomFlowNode }}
          defaultViewport={{ x: 350, y: 100, zoom: 1 }}
        >
          <MiniMap zoomable pannable />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ActivityDetails;
