import React from "react";
import { TableCell, TableRow, Button } from "@windmill/react-ui";
import { EditIcon, TrashIcon } from "../icons";

function RoadmapInfo(props) {
  return (
    <>
      {props.posts.map((post, number) => (
        <TableRow key={post?.id}>
          <TableCell>
            <div className="flex items-center text-sm">
              <div>
                <p className="font-semibold">
                  {number + 1}.{post?.title}
                </p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center text-sm">
              <div>
                <p>Category - {post?.category}</p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <h1
              style={{
                width: "200px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              type="text"
            >
              {post?.description}
            </h1>
          </TableCell>
          <TableCell>
            <div
              className="flex items-center space-x-4"
              style={{ width: "180px" }}
            >
              <Button
                onClick={() => props.editClick(post)}
                layout="link"
                size="icon"
                aria-label="Edit"
              >
                <EditIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                onClick={() => props.removePost(post.id)}
                layout="link"
                size="icon"
                aria-label="Delete"
              >
                <TrashIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                layout="link"
                size="small"
                onClick={() => props.detailClick(post)}
              >
                More Info
              </Button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default RoadmapInfo;
