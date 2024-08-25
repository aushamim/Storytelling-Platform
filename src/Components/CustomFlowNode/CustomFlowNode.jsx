/* eslint-disable react/prop-types */
import { Handle, Position } from "reactflow";

const CustomFlowNode = ({ data }) => {
  return (
    <div className="relative">
      <div
        style={
          data.selected
            ? {
                padding: 5,
                border: "1px solid #3b82f6",
                borderRadius: "0.375rem",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                backgroundColor: "#dbeafe",
              }
            : {
                padding: 5,
                border: "1px solid black",
                borderRadius: "0.375rem",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                backgroundColor: "white",
              }
        }
      >
        <div>{data.label}</div>

        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
      </div>

      {data.time !== "" ? (
        <div className="absolute -bottom-6 right-0 bg-[#dbeafe] text-xs p-0.5 px-2 rounded-md italic border border-blue-500">
          {data.time}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomFlowNode;
