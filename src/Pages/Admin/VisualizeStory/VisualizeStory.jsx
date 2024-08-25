import { useParams } from "react-router-dom";
import { useStoriesStore } from "../../../hooks/store";
import { useEffect, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const VisualizeStory = () => {
  const { id } = useParams();
  const story = useStoriesStore((state) =>
    state.stories.find((story) => story.id == id)
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
        data: { label: part.data },
        position: { x: posX, y: posY },
        style: {
          borderRadius: "0.375rem",
          width: "50%",
        },
      });
      posY += 150;

      if (part.next !== "") {
        tempEdges.push({
          id: `${partId}-${part.next}`,
          source: partId,
          target: part.next !== "end" ? part.next : "",
          animated: true,
        });
      }

      if (part.choices.length > 0) {
        let i = 0;
        while (i < part.choices.length) {
          tempNodes.push({
            id: `${partId}-choice${i}`,
            data: { label: part.choices[i].title },
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
          });

          tempEdges.push({
            id: `${partId}-choice${i}-${partId}`,
            source: `${partId}-choice${i}`,
            target: part.choices[i].next !== "end" ? part.choices[i].next : "",
            animated: true,
          });

          i++;
        }
        posY += 150;
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

export default VisualizeStory;
